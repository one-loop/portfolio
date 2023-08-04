"use client"
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import {useEffect, useState} from "react";
import SceneInit from './SceneInit';
import TWEEN from "@tweenjs/tween.js";
import React from "react";
import { gsap } from 'gsap';



export const RoomModel = () => {
  const [isLoading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    // initialize global variables
    let camera = test.camera, scene = test.scene, renderer = test.renderer;
    let model: THREE.Group
    // let model: THREE.Object3D<THREE.Event> | THREE.AnimationObjectGroup
    let mixer: THREE.AnimationMixer, mouse: THREE.Vector2, raycaster: THREE.Raycaster;
    let isHoveringOverMonitor: boolean, isHoveringOverAquarium: boolean, canZoomOut = false, canInteract = false;
    let savedPosition: THREE.Vector3, targetPosition: THREE.Vector3, currentPosition: THREE.Vector3;
    const canvas = document.getElementById('myThreeJsCanvas') as HTMLCanvasElement;
    const canvasContainer = document.getElementById('canvas-container') as HTMLDivElement;
    const deskItems = ["Monitor_Screen", "Table_Top", "Table_Top001", "Keys", "Chair_Seat"]
    
    const loader = new GLTFLoader();
    
    // // Optional: Provide a DRACOLoader instance to decode compressed mesh data
    // Specify path to a folder containing WASM/JS decoding libraries.
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    dracoLoader.setDecoderConfig({ type: 'js' });

    loader.setDRACOLoader( dracoLoader );

    const videoTexture2 = new THREE.VideoTexture( document.querySelector( '#video2' ) as HTMLVideoElement );

    // loader.load("/messy-room-model-compressed.glb", (gltfScene) => { // 6.7 MB
    loader.load("/clean-room-model.glb", (gltfScene) => { // 2 MB
      model = gltfScene.scene;
      // model.position.y = -1.7;

      // Store references to materials
      let aquariumGlassMaterial, monitorScreenMaterial, laptopScreenMaterial, computerScreenMaterial;
      // let monitorScreen = model.getObjectByName('Monitor_Screen');
      // let aquariumGlass = model.getObjectByName('Aquarium_Glass001');

      model.traverse((child => {
        if (child instanceof THREE.Mesh) {
          if (child.name === 'Aquarium_Glass001') {
            // glass texture seems to add a lot of lag/dropped frames
            // so might be better to not include
            aquariumGlassMaterial = new THREE.MeshPhysicalMaterial({
              // roughness: 0,
              // color: '#80aeff',
              // transmission: 1,
              // opacity: 1,
              visible: false
            });
            child.material = aquariumGlassMaterial;
          } else if (child.name === 'Monitor_Screen' || child.name === 'Laptop_Screen') {
            monitorScreenMaterial = new THREE.MeshBasicMaterial({ map: videoTexture2 });
            if (monitorScreenMaterial.map) monitorScreenMaterial.map.encoding = THREE.sRGBEncoding;
            child.material = monitorScreenMaterial;
          } else if (child.name === 'Computer_Screen') {
            computerScreenMaterial = new THREE.MeshBasicMaterial({ map: videoTexture2 });
            if (computerScreenMaterial.map) computerScreenMaterial.map.encoding = THREE.sRGBEncoding;
            child.material = computerScreenMaterial;
          }
        }
        
        
        // can't apply shadows to ambient or directional lights
        if (child.isObject3D && !(child instanceof THREE.Light)) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      }))

      mouse = new THREE.Vector2();
      raycaster = new THREE.Raycaster();


      const onMouseMove = (event: { clientX: number; clientY: number; }) => {
        // calculate pointer position in normalized device coordinates
        // (-1 to +1) for both components
        const canvasContainer = document.getElementById('canvas-container') as HTMLDivElement;
        let rect = canvasContainer.getBoundingClientRect();

        // Don't change these numbers, it took ages to figure out these exact equations
        // mouse.x = ((event.clientX - rect.left) / (rect.width)) * 1.42 - 1;
        // mouse.y = -((event.clientY - rect.top) / (rect.height)) * 2 + 1;
        mouse.x = ((event.clientX - rect.left) / (rect.width)) * 1.42 - 0.71;
        mouse.y = -((event.clientY - rect.top) / (rect.height)) * 2 + 1;

        // update raycaster with the new mouse position
        raycaster.setFromCamera(mouse, camera!);

        // Intersects objects in the scene with the raycaster
        const intersects = raycaster.intersectObjects(model.children);

        // if (intersects.length) console.log(intersects[0].object.name)

        // if (intersects.length > 0 && deskItems.includes(intersects[0].object.name)) {
        if (intersects.length > 0 && deskItems.includes(intersects[0].object.name)) {
          isHoveringOverMonitor = true;
          // console.log("hovering over monitor screen!");
          canvasContainer.style.cursor = 'pointer';
        } 
        else if (intersects.length > 0 && intersects[0].object.name == 'Aquarium_Glass001') {
          isHoveringOverAquarium = true;
          canvasContainer.style.cursor = 'pointer';
        }
        else {
          isHoveringOverMonitor = false;
          isHoveringOverAquarium = false;
          canvasContainer.style.cursor = '';
        }
      };


      const onMouseClick = () => {
        currentPosition = savedPosition;
      
        if (canZoomOut) {
          targetPosition = new THREE.Vector3(6.8, 4.5, 8.0);
          // test.renderer.antialias = false;
          // Start the GSAP animation to move the camera to the target position
          gsap.to(currentPosition, {
            x: targetPosition.x,
            y: targetPosition.y,
            z: targetPosition.z,
            duration: 1,
            ease: 'power2.out',
            onUpdate: () => {
              camera!.position.copy(currentPosition);
            },
            onComplete: () => {
              // This callback is executed after the camera movement is complete
              // test.renderer.antialias = true;
              canZoomOut = false;
            },
          });
        } else if (isHoveringOverMonitor) {
          savedPosition = camera!.position.clone();
          targetPosition = new THREE.Vector3(-0.15, 0.5, -1.45);
          // Start the GSAP animation to move the camera to the target position
          gsap.to(savedPosition, {
            x: targetPosition.x + 0.3,
            y: targetPosition.y,
            z: targetPosition.z + 3, // Adjust the zoom level by modifying the Z position (you can change the value based on your desired zoom level)
            duration: 1,
            ease: 'power2.out',
            onUpdate: () => { // runs every frame
              camera!.position.copy(savedPosition);
            },
            onComplete: () => {
              canZoomOut = true;
            },
          });
        } else if (isHoveringOverAquarium) {
          savedPosition = camera!.position.clone();
          targetPosition = new THREE.Vector3(2.0, 0.25, 0.5);
          
          gsap.to(savedPosition, {
            x: targetPosition.x,
            y: targetPosition.y,
            z: targetPosition.z, // Adjust the zoom level by modifying the Z position (you can change the value based on your desired zoom level)
            duration: 1,
            ease: 'power2.out',
            onUpdate: () => { // runs every frame
              camera!.position.copy(savedPosition);
            },
            onComplete: () => {
              canZoomOut = true;
            },
          });
        }
      };

      // rotate the model based on the position of cursor on the screen
      const moveModel = (event: { clientX: number; clientY: number; }) => {
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	      mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

        scene!.rotation.y = mouse.x * 0.3;
        scene!.rotation.z = mouse.y * 0.1;
        scene!.rotation.x = mouse.y * -0.1;
      }
      
      const ambientLight = new THREE.AmbientLight(0xC18E5A, 0.05);

      const roomLight = new THREE.SpotLight(0xC18E5A);
      // const roomLightHelper = new THREE.SpotLightHelper( roomLight );
      roomLight.position.set( 0, 4.3, 0 );
      roomLight.intensity = 0.75;

      roomLight.castShadow = true;
      roomLight.receiveShadow = true;

      // turning this on will increase shadow quality but reduce fps to 20-25 fps
      // roomLight.shadow.mapSize.set(1024, 1024); 
      // roomLight.shadow.mapSize.set(512, 512); // 50-60 fps

      roomLight.shadow.mapSize.set(256, 256); // 60 fps
      roomLight.shadow.bias = -0.001;

      // adjust shadow bias carefully to remove those weird shadow stripe artifacts
      roomLight.shadow.normalBias = 0.1;
      roomLight.penumbra = 0.1; // how defined/shaded outer shadows are
      // roomLight.lookAt(10, 1, 1);

      const directionalLight = new THREE.DirectionalLight(0xC18E5A, 0.1);
      directionalLight.position.set(0, 32, 64);
      // const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight);

      const sunLight = new THREE.DirectionalLight(0xfdfbd3, 10);
      sunLight.position.set(-3, 8, -10);
      sunLight.castShadow = true;
      sunLight.receiveShadow = true;
      sunLight.shadow.mapSize.set(256, 256); 


      const aquariumLight = new THREE.RectAreaLight(0xF2B374, 20, 0.1, 1.1);
      aquariumLight.position.set(-1.4, 1.51, -0.5); // x, z, -y
      aquariumLight.lookAt( -1.4, -100, -0.5 );

      const deskLight = new THREE.RectAreaLight(0xF2B374, 40, 1.5, 0.1);
      deskLight.position.set(-0.15, 0.77, -1.71); // x, z, -y
      deskLight.lookAt(-0.153, 0.76, 100 );

      const lampLight = new THREE.SpotLight(0xF2B374);
      lampLight.intensity = 0.5;
      // lampLight.receiveShadow = true;
      // lampLight.castShadow = true;
      // lampLight.shadow.bias = -0.01;
      // lampLight.shadow.normalBias = 0.1;
      lampLight.position.set( 1.4, 2.7, -1.4 ); // x, z, -y
      lampLight.lookAt(5, 5, 5);

      const ambientDayLight = new THREE.AmbientLight(0xfdfbd3, 0.35);

      let today = new Date().getHours();
      if (today >= 7 && today <= 18) { // day lights between 7am and 7pm
        model.add(roomLight, aquariumLight, deskLight, ambientDayLight, sunLight);
      } else { // night lights
        // lamp light adds a lot of lag, so I removed it
        // model.add(roomLight, aquariumLight, deskLight, ambientLight, directionalLight, lampLight);
        model.add(roomLight, aquariumLight, deskLight, ambientLight, directionalLight);
      }

      canvasContainer.addEventListener('mousemove', onMouseMove);
      canvasContainer.addEventListener('mousedown', onMouseClick);

      const aboutSection = document.querySelector('#about-section') as HTMLDivElement;
      // aboutSection.addEventListener('mousemove', moveModel) // adds lag to the rest of the website

      const clickObject = document.querySelector('#click-object') as HTMLButtonElement;
      clickObject.addEventListener('click', () => {
        if (!canZoomOut) {
          savedPosition = camera!.position.clone();
          targetPosition = new THREE.Vector3(-0.15, 0.5, -1.45);
          // Start the GSAP animation to move the camera to the target position
          gsap.to(savedPosition, {
            x: targetPosition.x + 0.3,
            y: targetPosition.y,
            z: targetPosition.z + 3, // Adjust the zoom level by modifying the Z position (you can change the value based on your desired zoom level)
            duration: 1,
            ease: 'power2.out',
            onUpdate: () => { // runs every frame
              camera!.position.copy(savedPosition);
            },
            onComplete: () => {
              canZoomOut = true;
            },
          });
        }
      })
      
      scene!.position.y = -1;
      camera!.position.set(6.8, 4.5, 8.0)
      scene!.add(model);

      // to play animations
      mixer = new THREE.AnimationMixer(model);
      const animations = gltfScene.animations;
      const goldFishAnimation = mixer.clipAction(animations[0]);
      goldFishAnimation.play();

      const clock = new THREE.Clock();
      const animate = () => {
        // anything in here gets called every frame
        // labelRenderer.render(scene, camera);
        // TWEEN.update();
        // v prevents jittering animations but seems to add lag to the scene (30 fps drop)
        // renderer!.render( scene!, camera! ); 
        requestAnimationFrame(animate);
        mixer.update(clock.getDelta());
      };
      animate();
      setLoading(false);

    })
    
  }, []);

  return (
    <>
      {isLoading && ( // Show loading message or spinner while isLoading is true
        <>
          <div aria-label="Default" className="relative inline-flex flex-col gap-2 items-center justify-center">
            <div className="relative flex w-10 h-10">
              <i className="absolute w-full h-full rounded-full animate-spinner-ease-spin [border:solid_3px_#006FEE] !border-t-transparent !border-l-transparent !border-r-transparent"></i>
              <i className="absolute w-full h-full rounded-full opacity-75 animate-spinner-linear-spin [border:dotted_3px_#006FEE] !border-t-transparent !border-l-transparent !border-r-transparent"></i>
            </div>
            <span className="text-md text-off-white">Loading...</span>
          </div>
        </>
      )}
      {/* The canvas will be hidden while loading, and will show after loading */}
      <canvas id="myThreeJsCanvas" className={`md:max-w-[800px] md:max-h-[800px] md:h-full md:w-full w-[100%] h-[100%] ${isLoading ? 'hidden' : ''}`}></canvas>
    </>
  )

}

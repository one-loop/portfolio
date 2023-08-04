"use client"
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import {useEffect, useState} from "react";
import SceneInit from './SceneInit';
import TWEEN from "@tweenjs/tween.js";
// import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
import { CSS3DRenderer, CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer";



export const RoomModel = () => {
  const [isLoading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    // initialize global variables
    let camera = test.camera, scene = test.scene, renderer = test.renderer;
    // let model: THREE.Object3D<THREE.Event> | THREE.AnimationObjectGroup
    let model: THREE.Group
    let mixer: THREE.AnimationMixer, mouse: THREE.Vector2, raycaster: THREE.Raycaster;
    let isHoveringOverMonitor: boolean, canZoomOut = false;
    let savedPosition: THREE.Vector3, targetPosition: THREE.Vector3, currentPosition: THREE.Vector3;
    const deskItems = ["Monitor_Screen", "Table_Top", "Table_Top001", "Keys", "Keyboard", "Chair_Seat", "Table_Legs", "Alex_Drawer", "Mug", "Lid", "Base_Panel", 
                          "Cube047_1", "Pencil_Holder", "Cube145_1", "Cube110", "Circle033", "Sphere", "Mouse", "Circle", "Table_Top002", "Cylinder042", "Cube009_2",
                          "Sphere", "Plant_Pot", "Cube047", "Monitor_Stand", "Circle034", "Chair_Cushion001"]
    const canvas = document.getElementById('myThreeJsCanvas') as HTMLCanvasElement;
    const canvasContainer = document.getElementById('canvas-container') as HTMLDivElement;
    let iframe: HTMLIFrameElement, iframeDiv: HTMLDivElement;

    const screenRenderer = new CSS3DRenderer();
    screenRenderer.setSize(window.innerWidth, window.innerHeight);
    // place container of rendered HTML elements above the canvas scene
    screenRenderer.domElement.style.position = 'absolute';
    screenRenderer.domElement.style.top = '0px';
    screenRenderer.domElement.style.pointerEvents = 'none';

    canvasContainer.appendChild(screenRenderer.domElement);
    // document.body.appendChild(screenRenderer.domElement);
    iframe = document.createElement('iframe');
    iframe.width = "1024px"; // 1024
    iframe.height = "432px"; // 432
    iframe.style.opacity = "inherit";
    // iframe.src = 'https://win11.vercel.app/';
    // iframe.src = 'https://win11.blueedge.me/';
    // iframe.src = 'https://macos1.vercel.app/';
    // iframe.src = 'https://macos.vercel.app/';
    // iframe.src = 'https://giantsur.netlify.app/';
    // iframe.src = 'https://gianlucajahn.github.io/macOS-react/';
    // iframe.src = 'https://win11-portfolio-nine.vercel.app/';
    iframe.src = 'https://macos.vercel.app/';

    iframeDiv = document.createElement('div');
    iframeDiv.appendChild(iframe);
    iframeDiv.style.display = "none";
    iframeDiv.style.opacity = "0%";
    const iframeContainer = new CSS3DObject(iframeDiv);
    iframeDiv.style.backgroundColor = 'black';
    iframeContainer.position.set(-0.15, 1.02, -1.8);
    // iframeContainer.position.set(0, 0, 0);
    iframeContainer.scale.set(0.001, 0.001, 0.001); // very large screen if not included

    // screenRenderer.domElement.addEventListener('onBeforeRender', () => {
    //   if (iframeContainer && model) {
    //     // Update the iframe container's position to match the position of the 3D object
    //     const position = new THREE.Vector3();
    //     model.getObjectByName('Monitor_Screen')?.getWorldPosition(position);
    //     iframeContainer.position.copy(position);
    //   }
    // });

    scene!.add(iframeContainer);

    const loader = new GLTFLoader();
    
    // // Optional: Provide a DRACOLoader instance to decode compressed mesh data
    // Specify path to a folder containing WASM/JS decoding libraries.
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    dracoLoader.setDecoderConfig({ type: 'js' });

    loader.setDRACOLoader( dracoLoader );

    // const videoTexture1 = new THREE.VideoTexture( document.querySelector( '#video1' ) as HTMLVideoElement );
    const videoTexture2 = new THREE.VideoTexture( document.querySelector( '#video2' ) as HTMLVideoElement );

    // loader.load("/messy-room-model-compressed.glb", (gltfScene) => { // 6.7 MB
    loader.load("/clean-room-model.glb", (gltfScene) => { // 2 MB
      model = gltfScene.scene;
      // model.position.y = -1.7;

      // Store references to materials
      let aquariumGlassMaterial;
      let monitorScreenMaterial;
      let laptopScreenMaterial;
      let computerScreenMaterial;
      let monitorScreen = model.getObjectByName('Monitor_Screen') as THREE.Mesh;
      let monitor = model.getObjectByName('Monitor') as THREE.Mesh;

      model.traverse((child => {
        if (child instanceof THREE.Mesh) {
          if (child.name === 'Aquarium_Glass001') {
            aquariumGlassMaterial = new THREE.MeshPhysicalMaterial({
              // roughness: 0,
              // metalness: 0,
              // color: '#80aeff',
              // ior: 1.5,
              // transmission: 1,
              // opacity: 1,
              // thickness: 0.02,
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

      const targetObject = new THREE.Object3D(); 
      model.add(targetObject);

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

        // if (intersects.length) {
        //   console.log(intersects[0].object.name)
        // }

        if (intersects.length > 0 && deskItems.includes(intersects[0].object.name)) {
          isHoveringOverMonitor = true;
          // console.log("hovering over monitor screen!");
          canvasContainer.style.cursor = 'pointer';
        } 
        // else if (intersects.length > 0 && intersects[0].object.name == 'Aquarium_Glass001') {
        //   let isHoveringOverAquarium = true;
        //   canvasContainer.style.cursor = 'pointer';
        // } 
        else {
          isHoveringOverMonitor = false;
          canvasContainer.style.cursor = '';
        }
      };


      const onMouseClick = () => {
        if (savedPosition) {
          currentPosition = savedPosition 
        } else {
          currentPosition = camera!.position;
        }

        if (canZoomOut) {
          iframeDiv.style.display = "none";
          iframeDiv.style.opacity = "0%";
          monitorScreen.visible = true;
          monitor.visible = true;
          targetPosition = new THREE.Vector3(6.8, 4.5, 8.0);
          // Start the tween animation to move the camera to the target position
          const tween = new TWEEN.Tween(currentPosition)
          .to(targetPosition, 750)
          .easing(TWEEN.Easing.Quadratic.Out)
          .onUpdate(() => {
            camera!.position.copy(currentPosition);
          })
          .onComplete(() => {
            // This callback is executed after the camera movement is complete
            canZoomOut = false;
          })
          .start();
        }
        else if (isHoveringOverMonitor) {
          // targetPosition = new THREE.Vector3(0.5, 0.5, 1);
          // targetPosition = new THREE.Vector3(0.5, 0.5, 1.5);
          targetPosition = new THREE.Vector3(0.3, 0.3, 1.2);
          savedPosition = camera!.position;
          iframeDiv.style.display = "block";
          const tween = new TWEEN.Tween(savedPosition)
          .to(targetPosition, 750)
          .easing(TWEEN.Easing.Quadratic.Out)
          .onUpdate(() => {
            camera!.position.copy(currentPosition);
          })
          .onComplete(() => {
            canZoomOut = true;
            iframeDiv.style.opacity = "100%";
            monitorScreen.visible = false;
            monitor.visible = false;
          })
          .start();
        } 
      };


      const moveModel = (event: { clientX: number; clientY: number; }) => {
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	      mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        // console.log(mouse);

        if (!canZoomOut) {
          scene!.rotation.y = mouse.x * 0.3;
          scene!.rotation.z = mouse.y * 0.05;
          scene!.rotation.x = mouse.y * -0.05;
        }
      }

      canvasContainer.addEventListener('mousemove', onMouseMove);
      canvasContainer.addEventListener('mousedown', onMouseClick);

      const aboutSection = document.getElementById('about-section') as HTMLDivElement;
      aboutSection.addEventListener('mousemove', moveModel);

      const clickObject = document.querySelector('#click-object') as HTMLButtonElement;
      clickObject.addEventListener('click', () => {
        if (!canZoomOut) {
          console.log('clicked on button');
          // targetPosition = new THREE.Vector3(0.5, 0.5, 1);
          targetPosition = new THREE.Vector3(0.5, 0.5, 1.5);
          // targetPosition = new THREE.Vector3(0.3, 0.3, 1.2);
          savedPosition = camera!.position;
          const tween = new TWEEN.Tween(savedPosition)
          .to(targetPosition, 750)
          .easing(TWEEN.Easing.Quadratic.Out)
          .onUpdate(() => {
            camera!.position.copy(currentPosition);
            // camera.lookAt(aquariumScreen);
          })
          .onComplete(() => {
            canZoomOut = true;
          })
          .start();
        };
      })
      
      const ambientLight = new THREE.AmbientLight(0xC18E5A, 0.05);

      const light = new THREE.SpotLight(0xC18E5A);
      const lightHelper = new THREE.SpotLightHelper( light );

      // light.position.set( 0.3, 3.2, -1.6 );
      // light.position.set( -0.8, 10.2, -1.6 );
      light.position.set( 1.5, 5, 0 );

      // light.lookAt(1.5, -100, 0) // doesn't work properly
      targetObject.position.set(1.5, 0, 0);
      light.target = targetObject;
      // light.position.y = 5;
      // light.intensity = 2;
      light.intensity = 0.75;
      light.castShadow = true;
      light.receiveShadow = true;
      // turning this on will increase shadow quality but reduce fps to 20-25 fps
      // light.shadow.mapSize.set(1024, 1024); 
      // light.shadow.mapSize.set(512, 512); // 50-60 fps
      light.shadow.mapSize.set(256, 256); // 60 fps
      light.shadow.bias = -0.001
      // adjust shadow bias carefully to remove those weird shadow stripe artifacts
      light.shadow.normalBias = 0.1;
      light.penumbra = 0.1; // how defined/shaded outer shadows are
      // light.lookAt(10, 1, 1);

      const directionalLight = new THREE.DirectionalLight(0xC18E5A, 0.1);
      // directionalLight.castShadow = true;
      // directionalLight.shadow.bias = -0.01;
      directionalLight.position.set(0, 32, 64);
      const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight)


      const aquariumLight = new THREE.RectAreaLight(0xC18E5A, 20, 0.1, 1.1);
      aquariumLight.position.set(-1.4, 1.51, -0.5); // x, z, -y
      aquariumLight.lookAt( -1.4, -100, -0.5 );

      const deskLight = new THREE.RectAreaLight(0xF2B374, 40, 1.5, 0.1);
      deskLight.position.set(-0.153, 0.76, -1.71); // x, z, -y
      deskLight.lookAt(-0.153, 0.76, 100 );

      const lampLight = new THREE.SpotLight(0xF2B374);
      const lampLightHelper = new THREE.SpotLightHelper( lampLight );
      // lampLight.receiveShadow = true;
      // lampLight.castShadow = true;
      // lampLight.intensity = 0.5;
      // lampLight.shadow.bias = -0.01;
      // light.shadow.normalBias = 0.1;
      lampLight.position.set( 1.4, 2.7, -1.4 ); // x, z, -y
      lampLight.lookAt(5, 5, 5);

      

      model.add(light, aquariumLight, deskLight, ambientLight, directionalLight)
      // model.add(light, directionalLight)

      // model.position.z = -1;
      // scene.position.set(-1.3, -1.7, 0);
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
        // if (model) {
        //   model.rotation.x += 0.01;
        //   model.rotation.y += 0.01;
        //   model.rotation.z += 0.01;
        // }
        renderer!.render( scene!, camera! );
        TWEEN.update();
        screenRenderer.render(scene!, camera!);
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
    <canvas id="myThreeJsCanvas" className="md:max-w-[800px] md:max-h-[800px] md:h-full md:w-full w-[100%] h-[100%]"></canvas>
  </>
  )

}

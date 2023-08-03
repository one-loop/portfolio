"use client"
import * as THREE from "three";
import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls, RenderTexture } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
// import { DRACOLoader } from "@loaders.gl/draco/src/draco-loader";
import { Container } from "../container"
import { Vector3 } from "three"
import classnames from "classnames";
import { Features } from "../features";
import { Button } from "../button";


// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath("@loaders.gl/draco/src/draco-loader");

const cameraTarget = new Vector3(-0.6, 3, -1.6)

const Model = () => {
  const video1 = document.getElementById( 'video1' ) as HTMLVideoElement;
  const video2 = document.getElementById( 'video2' ) as HTMLVideoElement;
  const videoTexture1 = new THREE.VideoTexture( video1 );
  const videoTexture2 = new THREE.VideoTexture( video2 );
  // // Instantiate a loader
  // const loader = new GLTFLoader();

  // // Optional: Provide a DRACOLoader instance to decode compressed mesh data
  // const dracoLoader = new DRACOLoader();
  // dracoLoader.setDecoderPath( '/examples/jsm/libs/draco/' );
  // loader.setDRACOLoader( dracoLoader );

  const gltf = useLoader(GLTFLoader, "/messy-room-model.gltf");
  // const gltf = useLoader(GLTFLoader, "/clean-room-model.gltf");
  // const gltfLoader = new GLTFLoader();


  // console.log(gltf.scene)
  const scene = gltf.scene;
  scene.position.set(1, -1.7, 0);

  // scene.position.set(0, -1.7, 0);
  
  const gridHelper = new THREE.GridHelper( 10, 10 );

  // add shadows
  //@ts-ignore
  scene.traverse((node) => {
    if (node.name == "Laptop_Screen" || node.name == "Monitor_Screen") {
      // console.log('screen found!')
      // console.log(node)
      
      node.material = new THREE.MeshBasicMaterial({ map: videoTexture1 });
      node.material.roughness =  0;

      // console.log('Material: ', node.material);
      // node.material.needsUpdate = true;
      // node.children[0].material = new THREE
    }
    if (node.name == "Computer_Screen") {
      node.material = new THREE.MeshBasicMaterial({ map: videoTexture2 });
      node.material.roughness =  0;
    }
    if (node.name === 'Aquarium_Glass001') {
      // set aquarium glass material to create glass effect
      // you can play around with these numbers
      // more here: https://threejs.org/examples/?q=materials%20physical%20tr#webgl_materials_physical_transmission
      node.material = new THREE.MeshPhysicalMaterial();
      node.material.roughness =  0;
      node.material.color.set('#17b7f1');
      node.material.ior = 1.5;
      node.material.transmission = 0.5;
      node.material.opacity = 1;
      node.material.thickness = 0.02;
    }
    if (node.isObject3D && !node.isAmbientLight) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });

  const ambientLight = new THREE.AmbientLight(0xffffff);
  ambientLight.intensity = 0.1;
  scene.add(ambientLight)

  // const light = new THREE.SpotLight(0xC18E5A, 5, 0, Math.PI / 2);
  const light = new THREE.SpotLight(0xC18E5A);
  light.position.set( -0.6, 3, -1.6 );
  light.intensity = 2;
  light.castShadow = true;
  light.receiveShadow = true;
  light.shadow.radius = 0.5;
  light.shadow.bias = -0.015;
  light.penumbra = 0.2;
  // light.target(0, 100, 0);

  light.shadow.mapSize.width = 1024;
  light.shadow.mapSize.height = 1024;
  // light.shadow.bias = 0.0001;

  // const light2 = new THREE.RectAreaLight(0xC18E5A, 0.5, 0.5);
  // light2.position.set( -0.6, 3, -1.6 );
  // light2.intensity = 3;
  // light2.lookAt( 0, 0, 0 );
  // light2.castShadow = true;
  // light2.receiveShadow = true;

  let shadowCameraHelper = new THREE.CameraHelper(light.shadow.camera);
  shadowCameraHelper.visible = true;

  const lightHelper = new THREE.SpotLightHelper( light );
  // const light2Helper = new RectAreaLightHelper( light2 );

  
  scene.add( light );
  // scene.add( lightHelper, gridHelper, shadowCameraHelper );


  
  return (
    <mesh>
      <primitive object={scene} scale={1}/>
    </mesh>
  );
};

export default function RoomModel() {
  return (
    <>
    <div className="mt-[-15rem]">
    <Features color="40,87,255" colorDark="48,58,117">
          <Features.Title title={"About"}/>
    </Features>
    <Container>
      <div className="items-center mx-auto my-auto md:mt-[-12rem]" id="about">
          <div className="flex lg:flex-row flex-col">
          <div className="lg:w-[50%] w-full my-auto relative pt-5 md:p-0 md:pr-5">
            <h3 className="mb-4 text-xl md:mb-7 md:text-4xl">Hi there 👋</h3>
              <p className="text-lg text-primary-text mb-5">My name is Saad and I’m currently a freshman majoring in Computer Science at New York University in NYU's Abu Dhabi campus. I'm passionate about bridging the gap between engineering and design — combining my keen eye for design with my technical knowledge to craft something beautiful.</p>
              <p className="text-lg text-primary-text mb-5">When I'm not in front of my computer, I'm probably reading a new book, playing video games, travelling, or learning something new. Right now I'm delving into 3D modelling, UX design, and React Development.</p>
              <p className="text-lg text-primary-text mb-5">I’m always down for hearing about new projects, so feel free to drop me a line.</p>
              <Button href="#projects" className="text-lg mt-7 z-40" variant="secondary" size="large">
                {/* <span className="animated-text !hover:text-primary-text transition-[color]">View my Projects <span className="arrow">→</span></span> */}
                <span className="text-[#717ce1 text-off-white">View my Projects <span className="arrow inline-block">→</span></span>
              </Button>
              <video muted autoPlay loop controls width="250" id="video1" src="/video.mp4" className="opacity-0 absolute"/>
              <video muted autoPlay loop controls width="250" id="video2" src="/codeScroll2.mp4" className="opacity-0 absolute"/>
          </div>
          <div className="w-[90%] min-h-[90%] mx-auto lg:w-[50%] h-[80rem] relative overflow-visible">
            {/* <span className="absolute [--grid-color:#746cf3] [--gradient-opacity:0.3] [--gradient:linear-gradient(92.88deg,#455eb5_9.16%,#5643cc_43.89%,#673fd7_64.72%)] before:absolute after:absolute before:[background-size:24px_24px] before:[background-image:var(--gradient)] h-[800px] w-[800px] before:[background-image:linear-gradient(to_right,_transparent_12px,_#746cf3_13px,_transparent_13px_),_linear-gradient(to_bottom,_transparent_12px,_#746cf3_13px,_transparent_13px))] after:[border-radius:50%] after:[opacity:0.3] after:[filter:blur(50px)] after:[background-image:linear-gradient(92.88deg,#455eb5_9.16%,#5643cc_43.89%,#673fd7_64.72%)]"></span> */}
            <span className={classnames(
              "absolute pointer-events-none [--grid-color:#f3bd6c] [z-index:-1] [--gradient-opacity:0.6] [--grid-size:24px] [--grid-size-half:12px]",
              "[background-size:var(--grid-size)_var(--grid-size)] [background-image:linear-gradient(to_right,_transparent_var(--grid-size-half),_var(--grid-color)_calc(var(--grid-size-half)+1px),_transparent_calc(var(--grid-size-half)+1px)),_linear-gradient(to_bottom,_transparent_var(--grid-size-half),_var(--grid-color)_calc(var(--grid-size-half)+1px),_transparent_calc(var(--grid-size-half)+1px)_)] md:rounded-[50%] h-[80rem] w-[80rem] overflow-clip")}>
            </span>
            <span className="absolute pointer-events-none top-[-200px] [z-index:-1] left-[-200px] h-[1100px] w-[1100px] overflow-x-clip [background:radial-gradient(transparent_0%,#000212_60%)] h-[100%] w-[100%]"></span>
            
            {/* Cool Gradient */}
            <span className="absolute pointer-events-none blur-[50px] [z-index:-1] [--gradient:linear-gradient(124.31deg,#46e3b7_0.18%,#2f7ad0_89.82%)] h-[800px] w-[800px] [background-image:var(--gradient)] md:rounded-[50%] opacity-60 h-[100%] w-[100%] overflow-clip"></span>


            {/* Warm Gradient */}
            {/* <span className="absolute pointer-events-none blur-[50px] [z-index:-1] [--gradient:linear-gradient(285.49deg,#f537f9_-14.61%,#f7c12b_106.06%)] h-[800px] w-[800px] [background-image:var(--gradient)] md:rounded-[50%] opacity-60 h-[100%] w-[100%] overflow-clip"></span> */}
            <span className="absolute pointer-events-none top-[-150px] [z-index:-1] left-[-150px] h-[1100px] w-[1100px] overflow-x-clip [background:radial-gradient(transparent_0%,#000212_60%)] h-[100%] w-[100%]"></span>
            <Canvas shadows dpr={window.devicePixelRatio} camera={{ position: [6.8, 5.4, 6.4], fov: 50, aspect: 1 }} gl={{ preserveDrawingBuffer: true } }className="md:!max-w-[800px] md:!max-h-[800px] md:!h-full md:!w-full cursor-grabbing relative">
              {/* Displays while model is loading */}
              {/* <Suspense fallback={<CanvasLoader />}> */}
              <Suspense fallback={null}>
                <OrbitControls enablePan={false} maxDistance={12} minDistance={1} maxAzimuthAngle={1.75} maxPolarAngle={1.5} minAzimuthAngle={0} enableDamping/> autoRotate
                <Model />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </Container>
    </div>
    </>
  )
}
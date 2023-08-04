import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';

export default class SceneInit {
  // Core components to initialize Three.js app.
  scene: THREE.Scene | undefined;
  camera: THREE.PerspectiveCamera | undefined;
  renderer: THREE.WebGLRenderer | undefined;

  // Camera params;
  fov: number;
  nearPlane: number;
  farPlane: number;
  canvasId: string;

  // Additional components.
  clock: THREE.Clock | undefined;
  stats: Stats | undefined;
  controls: OrbitControls | undefined;

  // Lighting is basically required.
  ambientLight: THREE.AmbientLight | undefined;
  directionalLight: THREE.DirectionalLight | undefined;

  constructor(canvasId: string) {
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;

    // Camera params;
    this.fov = 50;
    this.nearPlane = 1;
    this.farPlane = 10;
    this.canvasId = canvasId;

    // Additional components.
    this.clock = undefined;
    this.stats = undefined;
    this.controls = undefined;

    // Lighting is basically required.
    this.ambientLight = undefined;
    this.directionalLight = undefined;
  }

  initialize(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      1,
      100
    );
    this.camera.fov = window.innerHeight / window.screen.height;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.zoom = 0.020;

    // Specify a canvas which is already created in the HTML.
    const canvas = document.getElementById(this.canvasId) as HTMLCanvasElement;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      // Anti-aliasing smooths out the edges but may drop perfrormance.
      // Alpha makes the canvas background transparent
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setSize( 800, 800 )
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.camera.aspect = 800 / 800;
    this.camera.updateProjectionMatrix();
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    // document.querySelector('.canvas-div').appendChild(this.renderer.domElement);

    // controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enablePan = false;
    this.controls.maxDistance = 12;
    this.controls.minDistance = 1;
    this.controls.maxAzimuthAngle = 1.75;
    this.controls.maxPolarAngle = 1.5;
    this.controls.minAzimuthAngle = 0;
    this.controls.enableDamping = true;
    this.controls.enableZoom = false;

    this.clock = new THREE.Clock();
    this.stats = new Stats();
    // document.body.appendChild(this.stats.dom);

    // if window resizes
    window.addEventListener('resize', () => this.onWindowResize(), false);

  }

  animate(): void {
    // Window is implied.
    // requestAnimationFrame(this.animate.bind(this));
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
    this.stats?.update();
    this.controls?.update();
  }

  render(): void {
    // Update uniform data on each render.
    // this.uniforms.u_time.value += this.clock.getDelta();
    this.renderer?.render(this.scene!, this.camera!);
  }

  onWindowResize(): void {
    this.camera!.aspect = 800 / 800;
    this.renderer?.setSize(800, 800);
    this.camera!.updateProjectionMatrix();
  }
}

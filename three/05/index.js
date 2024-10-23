import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x00_00_00);
scene.fog = new THREE.Fog(0xffffff, 0.0025, 500);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;
renderer.setClearColor(0xff_ff_ff);

document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  500
);
camera.position.set(0, 0, 1);

camera.lookAt(0, 0, -5);

loadSun(scene);

const ambientLight = new THREE.AmbientLight(0x404040);
ambientLight.intensity = 50;
scene.add(ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  controls.update(0.1);
  renderer.render(scene, camera);
}
animate();

function loadSun(scene) {
  loadPlanet('Sun.glb', -0.009, scene, new THREE.Vector3(0, 0, -5), 'sun');
}

function loadPlanet(fileName, scale, scene, position, name) {
  const loader = new GLTFLoader();
  loader.load(
    fileName,
    (gltf) => {
      gltf.scene.scale.set(scale, scale, scale);
      gltf.scene.position.copy(position);
      gltf.scene.name = name;
      scene.add(gltf.scene);
    },
    undefined,
    (error) => {
      console.error(error);
    }
  );
}

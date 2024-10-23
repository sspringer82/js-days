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

const planets = ['sun', 'mercury'];
const rotationSpeed = 0.2;
const mercuryOrbitRadius = 7;
let mercuryOrbitAngle = 0;
const mercuryOrbitSpeed = 0.8;

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  500
);
camera.position.set(0, 0, 1);

camera.lookAt(0, 0, -5);

const sun = await loadSun(scene);
const mercury = await loadMercury(scene);

const ambientLight = new THREE.AmbientLight(0x404040);
ambientLight.intensity = 100;
scene.add(ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

export function rotatePlanets(scene, delta) {
  sun.rotation.y -= delta * rotationSpeed;
  mercury.rotation.y -= delta * rotationSpeed;
}
export function orbitMercury(scene, delta) {
  if (mercury && sun) {
    mercuryOrbitAngle += delta * mercuryOrbitSpeed;

    mercury.position.x =
      sun.position.x + mercuryOrbitRadius * Math.cos(mercuryOrbitAngle);
    mercury.position.z =
      sun.position.z + mercuryOrbitRadius * Math.sin(mercuryOrbitAngle);
  }
}

const clock = new THREE.Clock();
function animate() {
  const delta = clock.getDelta();

  requestAnimationFrame(animate);
  controls.update(0.1);
  renderer.render(scene, camera);
  rotatePlanets(scene, delta);
  orbitMercury(scene, delta);
}
animate();

function loadSun(scene) {
  return loadPlanet(
    'Sun.glb',
    -0.009,
    scene,
    new THREE.Vector3(0, 0, -5),
    'sun'
  );
}

export function loadMercury(scene) {
  return loadPlanet(
    'Mercury.glb',
    -0.001,
    scene,
    new THREE.Vector3(7, 0, -5),
    'mercury'
  );
}

function loadPlanet(fileName, scale, scene, position, name) {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      fileName,
      (gltf) => {
        gltf.scene.scale.set(scale, scale, scale);
        gltf.scene.position.copy(position);
        gltf.scene.name = name;
        scene.add(gltf.scene);
        resolve(gltf.scene);
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );
  });
}

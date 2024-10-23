import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Szene, Kamera und Renderer erstellen
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Würfel erstellen
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Kamera Position
camera.position.z = 5;

// OrbitControls hinzufügen
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Dämpfungseffekt für smootheres Drehen

let clock = new THREE.Clock(); // Uhr für delta time

// Animationsloop
function animate() {
  requestAnimationFrame(animate);

  let delta = clock.getDelta(); // Verstrichene Zeit seit dem letzten Frame

  // Rotation des Würfels basierend auf der verstrichenen Zeit
  cube.rotation.x += delta * 0.5; // 0.5 rad/s
  cube.rotation.y += delta * 0.5;

  controls.update(); // Update der Controls
  renderer.render(scene, camera);
}

animate();

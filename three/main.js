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

// OrbitControls hinzufügen
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Kamera-Position
camera.position.z = 5;

let clock = new THREE.Clock(); // Uhr für delta time

// Animationsloop
function animate() {
  requestAnimationFrame(animate);

  let delta = clock.getDelta(); // Verstrichene Zeit seit dem letzten Frame
  let time = clock.getElapsedTime(); // Gesamtzeit seit Start der Animation

  // Rotation des Würfels
  cube.rotation.x += delta * 0.5;
  cube.rotation.y += delta * 0.5;

  // Auf- und Abwärtsbewegung
  cube.position.y = Math.sin(time) * 2; // Würfel bewegt sich sinusförmig auf und ab

  // Controls und Rendering aktualisieren
  controls.update();
  renderer.render(scene, camera);
}

animate();

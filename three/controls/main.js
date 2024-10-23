import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';

// Szene, Kamera und Renderer erstellen
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Ambient Light hinzufügen
const ambientLight = new THREE.AmbientLight(0x404040, 10); // Weiches Umgebungslicht
scene.add(ambientLight);

// Point Light hinzufügen
const pointLight = new THREE.PointLight(0xffffff, 50, 100);
pointLight.position.set(5, 5, 5);
pointLight.castShadow = true;
scene.add(pointLight);

// Würfel erstellen
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
  metalness: 0.5,
  roughness: 0.5,
});
const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true;
scene.add(cube);

// Plane erstellen
const planeGeometry = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -1.5;
plane.receiveShadow = true;
scene.add(plane);

// Kamera-Position
camera.position.set(0, 2, 10); // Kamera etwas weiter weg setzen

// Variablen für die Controls
let controls;
const controlSelect = document.getElementById('controlSelect');

// Initialisiere OrbitControls als Standard
function initOrbitControls() {
  if (controls) controls.dispose(); // Vorherige Controls entfernen
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
}

// PointerLockControls initialisieren
function initPointerLockControls() {
  if (controls) controls.dispose();
  controls = new PointerLockControls(camera, renderer.domElement);

  // Auf Klick des Benutzers aktivieren
  document.addEventListener('click', () => {
    controls.lock();
  });
}

// FlyControls initialisieren
function initFlyControls() {
  if (controls) controls.dispose();
  controls = new FlyControls(camera, renderer.domElement);
  controls.movementSpeed = 10; // Bewegungs-Geschwindigkeit
  controls.rollSpeed = Math.PI / 24; // Rollgeschwindigkeit
  controls.dragToLook = true; // Blick mit gedrückter Maustaste
}

// TrackballControls initialisieren
function initTrackballControls() {
  if (controls) controls.dispose();
  controls = new TrackballControls(camera, renderer.domElement);
  controls.dynamicDampingFactor = 0.2; // Dämpfung der Bewegung
}

// FirstPersonControls initialisieren
function initFirstPersonControls() {
  if (controls) controls.dispose();
  controls = new FirstPersonControls(camera, renderer.domElement);
  controls.movementSpeed = 10; // Bewegungsgeschwindigkeit
  controls.lookSpeed = 0.1; // Blickgeschwindigkeit
}

// Event Listener für das Dropdown-Menü
controlSelect.addEventListener('change', (event) => {
  const selectedControl = event.target.value;
  if (selectedControl === 'OrbitControls') {
    initOrbitControls();
  } else if (selectedControl === 'PointerLockControls') {
    initPointerLockControls();
  } else if (selectedControl === 'FlyControls') {
    initFlyControls();
  } else if (selectedControl === 'TrackballControls') {
    initTrackballControls();
  } else if (selectedControl === 'FirstPersonControls') {
    initFirstPersonControls();
  }
});

// Initialisiere die Szene mit OrbitControls
initOrbitControls();

// Animationsloop
function animate() {
  requestAnimationFrame(animate);
  if (controls.update) controls.update(); // Nur bei Orbit-, Fly- und TrackballControls notwendig
  renderer.render(scene, camera);
}

animate();

// Fenstergröße anpassen
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Szene, Kamera und Renderer einrichten
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true; // Schatten aktivieren
document.body.appendChild(renderer.domElement);

// Orbit Controls hinzufügen
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

// Ambient Light hinzufügen (gleichmäßige Grundbeleuchtung)
const ambientLight = new THREE.AmbientLight(0x404040, 10); // Weiches Umgebungslicht
scene.add(ambientLight);

// Point Light hinzufügen (Hauptlichtquelle)
const pointLight = new THREE.PointLight(0xffffff, 100, 100);
pointLight.position.set(5, 5, 5);
pointLight.castShadow = true; // Point Light wirft Schatten
// Schattenkartengröße erhöhen
pointLight.shadow.mapSize.width = 2048; // Breite der Schattenkarte
pointLight.shadow.mapSize.height = 2048; // Höhe der Schattenkarte

// Schattenradius (bei PointLight) für weichere Schattenränder
pointLight.shadow.radius = 4;

// Schatten-Bias für weichere Ränder
pointLight.shadow.bias = -0.005; // Verhindert Schattenartefakte
scene.add(pointLight);

// Material erstellen: Grünes MeshStandardMaterial, leicht metallisch und rauh
const material = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
  metalness: 0.7, // Metallischer Effekt (ähnlich gebürstetem Aluminium)
  roughness: 0.5, // Rauhheit für die Oberfläche
});

// Würfel erstellen
const geometry = new THREE.BoxGeometry();
const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true; // Der Würfel wirft Schatten
cube.rotation.x = Math.PI / 4; // Leichte Rotation
cube.rotation.y = Math.PI / 4;
scene.add(cube);

// Plane unter dem Würfel
const planeGeometry = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2; // Plane liegt flach
plane.position.y = -1.5; // Unterhalb des Würfels positionieren
plane.receiveShadow = true; // Plane empfängt Schatten
scene.add(plane);

// Kamera Position
camera.position.z = 5;

// Fenster-Resize anpassen
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animationsloop für OrbitControls
function animate() {
  controls.update(); // OrbitControls updaten
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate(); // Starte den Animationsloop

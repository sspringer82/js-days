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

// Lichtquelle hinzufügen
const pointLight = new THREE.PointLight(0xffffff, 100, 100);
pointLight.position.set(5, 5, 5);
pointLight.castShadow = true; // Point Light wirft Schatten
pointLight.shadow.mapSize.width = 2048; // Breite der Schattenkarte
pointLight.shadow.mapSize.height = 2048; // Höhe der Schattenkarte

// Schattenradius (bei PointLight) für weichere Schattenränder
pointLight.shadow.radius = 4;

// Schatten-Bias für weichere Ränder
pointLight.shadow.bias = -0.005; // Verhindert Schattenartefakte
scene.add(pointLight);

// Ambient Light hinzufügen
const ambientLight = new THREE.AmbientLight(0x404040, 10); // Weiches Umgebungslicht
scene.add(ambientLight);

// Geometrie-Auswahlmöglichkeiten
const geometries = {
  BoxGeometry: () => new THREE.BoxGeometry(),
  SphereGeometry: () => new THREE.SphereGeometry(1, 32, 32),
  CylinderGeometry: () => new THREE.CylinderGeometry(1, 1, 2, 32),
  ConeGeometry: () => new THREE.ConeGeometry(1, 2, 32),
  TorusGeometry: () => new THREE.TorusGeometry(1, 0.4, 16, 100),
  DodecahedronGeometry: () => new THREE.DodecahedronGeometry(),
  TetrahedronGeometry: () => new THREE.TetrahedronGeometry(),
  IcosahedronGeometry: () => new THREE.IcosahedronGeometry(),
  OctahedronGeometry: () => new THREE.OctahedronGeometry(),
  PlaneGeometry: () => new THREE.PlaneGeometry(2, 2),
};

// Material-Auswahlmöglichkeiten
const materials = {
  MeshBasicMaterial: (params) => new THREE.MeshBasicMaterial(params),
  MeshStandardMaterial: (params) => new THREE.MeshStandardMaterial(params),
  MeshPhongMaterial: (params) => new THREE.MeshPhongMaterial(params),
  MeshLambertMaterial: (params) => new THREE.MeshLambertMaterial(params),
};

// Initiale Werte
let geometry = geometries.BoxGeometry();
let material = materials.MeshStandardMaterial({
  color: 0x00ff00,
  metalness: 0.5,
  roughness: 0.5,
});
let mesh = new THREE.Mesh(geometry, material);
mesh.castShadow = true; // Der Würfel wirft Schatten
scene.add(mesh);

// Plane für Schatten hinzufügen
const planeGeometry = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2; // Plane liegt flach
plane.position.y = -1.5; // Unterhalb des Würfels positionieren
plane.receiveShadow = true; // Plane empfängt Schatten
scene.add(plane);

// Kamera Position
camera.position.z = 5;

// Funktion zum Aktualisieren der Geometrie
function updateGeometry(selectedGeometry) {
  scene.remove(mesh); // Entferne die alte Geometrie

  geometry = geometries[selectedGeometry](); // Neue Geometrie erstellen
  mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true; // Der neue Mesh wirft ebenfalls Schatten
  scene.add(mesh);

  renderer.render(scene, camera); // Szene erneut rendern
}

// Funktion zum Aktualisieren des Materials
function updateMaterial(selectedMaterial, color, metalness, roughness) {
  scene.remove(mesh); // Entferne den alten Mesh

  const materialParams = {
    color: color ? parseInt(color) : 0x00ff00,
  };

  if (selectedMaterial === 'MeshStandardMaterial') {
    materialParams.metalness = metalness || 0.5;
    materialParams.roughness = roughness || 0.5;
  }

  material = materials[selectedMaterial](materialParams); // Neues Material anwenden
  mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true; // Der neue Mesh wirft ebenfalls Schatten
  scene.add(mesh);

  renderer.render(scene, camera); // Szene erneut rendern
}

// Event Listener für Dropdowns und Parameter
document.getElementById('geometry').addEventListener('change', (event) => {
  updateGeometry(event.target.value);
});

document.getElementById('material').addEventListener('change', (event) => {
  const color = document.getElementById('color').value;
  const metalness = parseFloat(document.getElementById('metalness').value);
  const roughness = parseFloat(document.getElementById('roughness').value);
  updateMaterial(event.target.value, color, metalness, roughness);
});

document.getElementById('color').addEventListener('input', (event) => {
  const selectedMaterial = document.getElementById('material').value;
  const metalness = parseFloat(document.getElementById('metalness').value);
  const roughness = parseFloat(document.getElementById('roughness').value);
  updateMaterial(selectedMaterial, event.target.value, metalness, roughness);
});

document.getElementById('metalness').addEventListener('input', (event) => {
  const selectedMaterial = document.getElementById('material').value;
  const color = document.getElementById('color').value;
  const roughness = parseFloat(document.getElementById('roughness').value);
  updateMaterial(
    selectedMaterial,
    color,
    parseFloat(event.target.value),
    roughness
  );
});

document.getElementById('roughness').addEventListener('input', (event) => {
  const selectedMaterial = document.getElementById('material').value;
  const color = document.getElementById('color').value;
  const metalness = parseFloat(document.getElementById('metalness').value);
  updateMaterial(
    selectedMaterial,
    color,
    metalness,
    parseFloat(event.target.value)
  );
});

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

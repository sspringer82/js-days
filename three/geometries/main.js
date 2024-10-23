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
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Orbit Controls hinzufügen
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Trägheitseffekt für ein smootheres Erlebnis
controls.dampingFactor = 0.25;
controls.enableZoom = true;

// Standardmaterial ohne Licht
let material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Standardmäßig BoxGeometry
let geometry = new THREE.BoxGeometry();
let mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Kanten hervorheben
let edges = new THREE.EdgesGeometry(geometry); // Kanten der Geometrie erstellen
let lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 }); // Schwarz für die Kanten
let lines = new THREE.LineSegments(edges, lineMaterial); // Kanten als Linien zeichnen
scene.add(lines); // Linien zur Szene hinzufügen

// Kamera Position
camera.position.z = 5;

// Funktion zum Erstellen von Geometrie basierend auf Auswahl
function createGeometry(type) {
  let newGeometry;
  switch (type) {
    case 'BoxGeometry':
      newGeometry = new THREE.BoxGeometry();
      break;
    case 'SphereGeometry':
      newGeometry = new THREE.SphereGeometry(1, 32, 32);
      break;
    case 'CylinderGeometry':
      newGeometry = new THREE.CylinderGeometry(1, 1, 2, 32);
      break;
    case 'ConeGeometry':
      newGeometry = new THREE.ConeGeometry(1, 2, 32);
      break;
    case 'TorusGeometry':
      newGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
      break;
    case 'DodecahedronGeometry':
      newGeometry = new THREE.DodecahedronGeometry();
      break;
    case 'TetrahedronGeometry':
      newGeometry = new THREE.TetrahedronGeometry();
      break;
    case 'IcosahedronGeometry':
      newGeometry = new THREE.IcosahedronGeometry();
      break;
    case 'OctahedronGeometry':
      newGeometry = new THREE.OctahedronGeometry();
      break;
    case 'PlaneGeometry':
      newGeometry = new THREE.PlaneGeometry(2, 2);
      break;
    default:
      newGeometry = new THREE.BoxGeometry(); // Fallback zu Box
  }
  return newGeometry;
}

// Funktion zum Aktualisieren der Geometrie
function updateGeometry(selectedGeometry) {
  scene.remove(mesh); // Entferne die alte Geometrie
  scene.remove(lines); // Entferne alte Kanten

  geometry = createGeometry(selectedGeometry); // Neue Geometrie erstellen
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Kanten für die neue Geometrie hinzufügen
  edges = new THREE.EdgesGeometry(geometry);
  lines = new THREE.LineSegments(edges, lineMaterial);
  scene.add(lines);

  renderer.render(scene, camera); // Szene erneut rendern
}

// Funktion zum Aktualisieren der Farbe
function updateColor(selectedColor) {
  material.color.setHex(selectedColor); // Setze die neue Farbe
  renderer.render(scene, camera); // Szene erneut rendern
}

// Dropdowns event listener
document.getElementById('geometry').addEventListener('change', (event) => {
  updateGeometry(event.target.value);
});

document.getElementById('color').addEventListener('change', (event) => {
  updateColor(parseInt(event.target.value));
});

// Fenster-Resize
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

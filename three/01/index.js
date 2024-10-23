// Import Three.js Module
import * as THREE from 'three';

// Szene erstellen
const scene = new THREE.Scene();

// Kamera erstellen (Perspektivische Kamera)
const camera = new THREE.PerspectiveCamera(
  75, // Field of View (FoV)
  window.innerWidth / window.innerHeight, // Seitenverhältnis
  0.1, // Near Clipping Plane
  1000 // Far Clipping Plane
);

// WebGLRenderer erstellen
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // Vollbildgröße setzen
document.body.appendChild(renderer.domElement); // Canvas zum DOM hinzufügen

// Geometrie und Material für den Würfel erstellen
const geometry = new THREE.BoxGeometry(); // Würfelgeometrie
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Einfaches grünes Material

// Mesh erstellen (Kombination aus Geometrie und Material)
const cube = new THREE.Mesh(geometry, material);
scene.add(cube); // Würfel zur Szene hinzufügen

// Kamera positionieren
camera.position.z = 5; // Kamera weiter weg von der Szene setzen

// Szene einmal rendern (ohne Animation)
renderer.render(scene, camera);

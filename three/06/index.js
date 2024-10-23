import * as THREE from 'three';

// Szene und Kamera erstellen
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Renderer erstellen
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometrie für die Punkte erstellen
const geometry = new THREE.BufferGeometry();
const vertices = [];

// Zufällig verteilte Punkte mit MathUtils.randFloatSpread()
for (let i = 0; i < 1000; i++) {
  vertices.push(THREE.MathUtils.randFloatSpread(10)); // Zufälliger Wert zwischen -5 und 5 für x
  vertices.push(THREE.MathUtils.randFloatSpread(10)); // Zufälliger Wert zwischen -5 und 5 für y
  vertices.push(THREE.MathUtils.randFloatSpread(10)); // Zufälliger Wert zwischen -5 und 5 für z
}
geometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(vertices, 3)
);

// Material für die Punkte erstellen
const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });

// Points-Objekt erstellen
const points = new THREE.Points(geometry, material);
scene.add(points);

// Kamera Position
camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  points.rotation.y += 0.001; // Punkte rotieren langsam
  renderer.render(scene, camera);
}

animate();

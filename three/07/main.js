import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Szene und Renderer erstellen
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 2, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Licht hinzufügen
const ambientLight = new THREE.AmbientLight(0x404040, 2); // Weiches Umgebungslicht
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Plane erstellen
const planeGeometry = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -0.5;
scene.add(plane);

// Würfel erstellen
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(0, 0.5, 0);
cube.name = 'Würfel'; // Name für den Raycaster setzen
scene.add(cube);

// Raycaster und Mauskoordinaten
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// OrbitControls hinzufügen
const controls = new OrbitControls(camera, renderer.domElement);

// HTML-Element für die Anzeige von Infos zum Würfel
const info = document.getElementById('info');

// Raycasting-Funktion, um den Würfel bei Mausbewegung zu erkennen
function onMouseMove(event) {
  // Normierte Mauskoordinaten (zwischen -1 und 1)
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Raycaster von der Kamera in Richtung der Maus setzen
  raycaster.setFromCamera(mouse, camera);

  // Überprüfen, ob der Ray den Würfel trifft
  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0 && intersects[0].object.name === 'Würfel') {
    info.style.display = 'block'; // Info anzeigen
    info.innerHTML = `Cube Info: <br> Position: ${intersects[0].object.position.x.toFixed(
      2
    )}, 
    ${intersects[0].object.position.y.toFixed(2)}, 
    ${intersects[0].object.position.z.toFixed(2)}`;
  } else {
    info.style.display = 'none'; // Info verstecken, wenn der Würfel nicht getroffen wird
  }
}

// Eventlistener für die Mausbewegung
window.addEventListener('mousemove', onMouseMove);

// Animationsloop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();

// Fenster-Resize anpassen
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

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

loadSun(scene);
loadMercury(scene);
addStars(scene);

const ambientLight = new THREE.AmbientLight(0x404040);
ambientLight.intensity = 100;
scene.add(ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

const info = document.getElementById('info');

// Raycaster und Mauskoordinaten
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Planeteninformationen
const planetsData = {
  sun: { name: 'Sonne', diameter: '1,391,000 km', mass: '1.989 × 10^30 kg' },
  mercury: { name: 'Merkur', diameter: '4,880 km', mass: '3.3011 × 10^23 kg' },
};

window.addEventListener('mousemove', onMouseMove);

// Raycasting-Funktion
function onMouseMove(event) {
  // Normierte Mauskoordinaten (zwischen -1 und 1)
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Raycaster von der Kamera in Richtung der Maus setzen
  raycaster.setFromCamera(mouse, camera);

  // Überprüfen, ob der Ray einen Planeten trifft
  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    const planet = intersects[0].object;

    // Planeteninformationen abrufen
    const planetData = planetsData[planet.parent.name];

    if (planetData) {
      // Infos in HTML-Overlay anzeigen
      info.style.display = 'block'; // Info anzeigen
      info.innerHTML = `
        <strong>${planetData.name}</strong><br>
        Durchmesser: ${planetData.diameter}<br>
        Masse: ${planetData.mass}
      `;
    }

    // Overlay an die Mausposition setzen
    info.style.left = `${event.clientX + 15}px`; // 15px Versatz von der Maus
    info.style.top = `${event.clientY + 15}px`;
  } else {
    info.style.display = 'none'; // Info verstecken, wenn kein Planet getroffen wird
  }
}

export function rotatePlanets(scene, delta) {
  planets
    .map((planet) => scene.getObjectByName(planet))
    .filter((planet) => planet !== undefined)
    .forEach((planet) => {
      planet.rotation.y -= delta * rotationSpeed;
    });
}
export function orbitMercury(scene, delta) {
  const mercury = scene.getObjectByName('mercury');
  const sun = scene.getObjectByName('sun');

  if (mercury && sun) {
    mercuryOrbitAngle += delta * mercuryOrbitSpeed;

    mercury.position.x =
      sun.position.x + mercuryOrbitRadius * Math.cos(mercuryOrbitAngle);
    mercury.position.z =
      sun.position.z + mercuryOrbitRadius * Math.sin(mercuryOrbitAngle);
  }
}

function addStars(scene) {
  const starGeometry = new THREE.BufferGeometry();
  const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });

  const starVertices = [];
  for (let i = 0; i < 10_000; i++) {
    const x = THREE.MathUtils.randFloatSpread(1000); // Zufällige Position der Sterne
    const y = THREE.MathUtils.randFloatSpread(1000);
    const z = THREE.MathUtils.randFloatSpread(1000);
    starVertices.push(x, y, z);
  }

  starGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(starVertices, 3)
  );

  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);
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
  loadPlanet('Sun.glb', -0.009, scene, new THREE.Vector3(0, 0, -5), 'sun');
}

export function loadMercury(scene) {
  loadPlanet(
    'Mercury.glb',
    -0.001,
    scene,
    new THREE.Vector3(7, 0, -5),
    'mercury'
  );
}

function loadPlanet(fileName, scale, scene, position, name) {
  const loader = new GLTFLoader();
  loader.load(
    fileName,
    (gltf) => {
      gltf.scene.scale.set(scale, scale, scale);
      gltf.scene.position.copy(position);
      gltf.scene.name = name;
      scene.add(gltf.scene);
    },
    undefined,
    (error) => {
      console.error(error);
    }
  );
}

// Fenstergröße anpassen
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

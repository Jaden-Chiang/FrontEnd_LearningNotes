import * as THREE from "three";

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

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// create  a line
const rendererLine = new THREE.WebGLRenderer();
rendererLine.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(rendererLine.domElement);
const cameraLine = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
cameraLine.position.set(0, 0, 100);
cameraLine.lookAt(0, 0, 0);
const sceneLine = new THREE.Scene();
const materialLine = new THREE.LineBasicMaterial({ color: 0x0000ff });

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  renderer.render(scene, camera);
}

animate();



// console.log("hello hell boys");

import * as THREE from 'three';

const w = window.innerWidth
const h = window.innerHeight;
// const scene = new THREE.Scene();
const render = new THREE.WebGLRenderer({ antialias: true });
render.setSize(w, h);

const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
const scene = new THREE.Scene();
const geo = new THREE.SphereGeometry(1, 32, 32);
const mat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mash = new THREE.Mesh(geo, mat);
scene.add(mash);


// render.render(scene, camera);
document.appendChild(render.domElement);

// camera.position.z = 5;
// camera.position.y = 2;
// camera.position.x = 2;
// camera.lookAt(0, 0, 0);
// const geometry = new THREE.BoxGeometry(1, 1, 1);

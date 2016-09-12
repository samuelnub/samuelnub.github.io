var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(16, window.innerWidth / window.innerHeight, 0.1, 1000);
// Give it the alpha param, to allow a transparent canvas/background
var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.TorusKnotGeometry(1, 0.4, 128, 32);
var material = new THREE.MeshLambertMaterial({color: 0x99ccff});
var object = new THREE.Mesh(geometry, material);

var pointLight = new THREE.PointLight(0xffffff, 2, 32);
var dirLight = new THREE.HemisphereLight(0xffffff, 0.6);
pointLight.position.set(0,0,0);
scene.add(object);
scene.add(pointLight);
scene.add(dirLight);

camera.position.z = 16;

var render = function()
{
    requestAnimationFrame(render);

    renderer.setClearColor(0x000000, 0);

    object.rotation.y += 0.01;

    renderer.render(scene, camera);
};

render();

window.addEventListener('resize', onWindowResize, false);

function onWindowResize()
{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
};
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(4, window.innerWidth / window.innerHeight, 0.1, 1000);
// Give it the alpha param, to allow a transparent canvas/background
var renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.TorusKnotGeometry(1, 0.32, 256, 32);
var material = new THREE.MeshLambertMaterial({color: 0xffffff, wireframe: false});
var object = new THREE.Mesh(geometry, material);
var object2 = new THREE.Mesh(geometry, material);
var object3 = new THREE.Mesh(geometry, material);

var pointLight = new THREE.PointLight(0x9cb5d4, 2, 0.5);
var dirLight = new THREE.HemisphereLight(0xfefeff, 0.01);
var dirLight2 = new THREE.HemisphereLight(0x9cb5d4, 1);

pointLight.position.set(0,0,0);

dirLight2.position.set(0,-10,0);

scene.add(object);
scene.add(object2);
scene.add(object3);

scene.add(pointLight);
scene.add(dirLight);
scene.add(dirLight2);

camera.position.z = 56;

object.rotation.x = Math.random() * (360 - 0) + 0;
object2.rotation.y = Math.random() * (360 - 0) + 0;
object3.rotation.z = Math.random() * (360 - 0) + 0;

var render = function()
{
    requestAnimationFrame(render);

    renderer.setClearColor(0x000000, 0);

    object.rotation.x += 0.005;
    object.rotation.y += 0.0005;

    object2.rotation.x += 0.0005;
    object2.rotation.y += -0.005;

    object3.rotation.x += 0.0005;
    object3.rotation.y += 0.005;

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
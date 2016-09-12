var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(8, window.innerWidth / window.innerHeight, 0.1, 1000);
// Give it the alpha param, to allow a transparent canvas/background
var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.TorusKnotGeometry(1, 0.32, 256, 16);
var material = new THREE.MeshLambertMaterial({color: 0x80bfee, wireframe: false});
var object = new THREE.Mesh(geometry, material);
var object2 = new THREE.Mesh(geometry, material);

var pointLight = new THREE.PointLight(0xffffff, 2, 2);
var dirLight = new THREE.HemisphereLight(0xffffff, 0.8);
pointLight.position.set(0,0,0);

scene.add(object);
scene.add(object2);
scene.add(pointLight);
scene.add(dirLight);

camera.position.z = 30;

var render = function()
{
    requestAnimationFrame(render);

    renderer.setClearColor(0x000000, 0);

    object.rotation.x += 0.005;
    object.rotation.y += 0.0005;

    object2.rotation.x += 0.0005;
    object2.rotation.y += -0.005;

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
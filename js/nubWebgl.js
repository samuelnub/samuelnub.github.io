var scene = new THREE.Scene();
var camFOV = 4;
var camera = new THREE.PerspectiveCamera(camFOV, window.innerWidth / window.innerHeight, 0.1, 1000);
// Give it the alpha param, to allow a transparent canvas/background
var renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var blueColor = 0x9cb5d4;

var geometry = new THREE.TorusKnotGeometry(1, 0.32, 256, 32);
var material = new THREE.MeshLambertMaterial({color: 0xffffff, wireframe: false});
var object = new THREE.Mesh(geometry, material);
var object2 = new THREE.Mesh(geometry, material);
var object3 = new THREE.Mesh(geometry, material);

var pointLight = new THREE.PointLight(blueColor, 2, 0.5);
var dirLight = new THREE.HemisphereLight(0xfefeff, 0.01);
var dirLight2 = new THREE.HemisphereLight(blueColor, 1);

pointLight.position.set(0,0,0);

dirLight2.position.set(0,-10,0);

scene.add(object);
scene.add(object2);
scene.add(object3);

scene.add(pointLight);
scene.add(dirLight);
scene.add(dirLight2);

var camPosZ = 56;
camera.position.z = camPosZ;

object.rotation.x = Math.random() * (360 - 0) + 0;
object2.rotation.y = Math.random() * (360 - 0) + 0;
object3.rotation.z = Math.random() * (360 - 0) + 0;

//lol
var spongeGeo = new THREE.BoxGeometry(1.8,1.8,1.8);
var spongeMat = new THREE.MeshLambertMaterial();

var loader = new THREE.TextureLoader();
loader.load(
    'http://i.imgur.com/nOmT05Y.jpg?2',
    function(texture)
    {
        spongeMat.map = texture;
        console.log("succ loaded in texture");
    },
    function(xhr) //during download of texture
    {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    },
    function(xhr) //if error
    {
        console.log( 'An error happened' );
    }
);

var spongeObj = new THREE.Mesh(spongeGeo, spongeMat);
spongeObj.name = "spongeObj";

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

    if(showWhatObject == true)
    {
        //behold, the jittering box of doom...?
        spongeObj.rotation.x += Math.random() * (0.05 - -0.03) + -0.03;
        spongeObj.rotation.y += Math.random() * (0.05 - -0.03) + -0.03;

        var rand = Math.random() * (1.01 - 0.99) + 0.99;
        spongeObj.scale.set(rand,rand,rand);
        object.scale.set(rand,rand,rand);
        object2.scale.set(rand,rand,rand);
        object3.scale.set(rand,rand,rand);

        camera.rotation.z += rand * 0.01;
        camera.fov -= camera.fov * (0.001 * rand);
        camera.updateProjectionMatrix();
    }

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

//oh ok, so instead of the other file doing "#include" or some shiz, you selectively export the variables/functions within the file, cool
var showWhatObject = false;
exports.showWhatObject = showWhatObject;
exports.spongeObj = spongeObj;
exports.dirLight2 = dirLight2;
exports.blueColor = blueColor;
exports.camFOV = camFOV;
exports.camPosZ = camPosZ;
exports.camera = camera;
exports.scene = scene;

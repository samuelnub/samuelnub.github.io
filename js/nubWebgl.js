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

//lol
var spongeGeo = new THREE.BoxGeometry(1.5,1.5,1.5);
var spongeMat = new THREE.MeshLambertMaterial();

var loader = new THREE.TextureLoader();
loader.load(
    'https://lh3.googleusercontent.com/8IQD57mrllhx-wwrENCcBS0BnLvAZmfAUCHAiJho4vDGJ9sKIC-EOIzUSgXeRq6J9aIYwb2NPlMCShCD3jYVv_tmF0WV6-J-VY8PW13My4jP5m-9pU_OpTJVqyGtNbun9lYg-TTSvlWemLMvhdXmU8nnqPr7mkL-D3pAC0kVC4XYQIwbMvJ5AUvhYZdZ6VhOK2ffCAGHPWeKRB21qfdUMsmiSY-F8sjBmrJ-_GWvW3K5r89E68cDMnax2MO7mQ3jYb1UhgqjQnLzTgGbED5IvsyRJJ4LnrTLHwMe728vG2CWGLAaoT7llZVjKA6dpf7CTWeH8_We3Vac5J3t45c-0SWI-2epAwT10SHovsl20XTiqQ6I2oYt738ZsYw5XviKcOpsEhLI5oGRdTnmnALw_KGu7_L1-3YuZa6mYuwz3LLDyx7085uEpnZZjI0GuC3BqddvEcEKs11Ti1kRkhF1VhWZK6G0BzGrQExU0d7kfb7q8Fwwdz1GwLPiRjY8ibFz8yAICCUja-jRieu4Xsw4TPBvUfNLQE5_QXFguYdq2DFUd_Ak6C3siw_uGrGAHdBFSUdjz5jcnEN9YOq6g3XhOJvIGy7TP7LJEHe7d0c_A9JDrZY_=s880-no',
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
exports.scene = scene;
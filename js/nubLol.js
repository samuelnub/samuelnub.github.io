var clickCount = 0;

function onImgClick()
{
    clickCount++;
    if(clickCount >= 5)
    {
        var newPage = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        clickCount = 0;
    }
};

function onGithubClick()
{
    window.open("https://github.com/samuelnub");
};

var imgElement = document.getElementById("samnubImg");
var originalImgSrc = document.getElementById("samnubImg").getAttribute("src");

var titleElement = document.getElementById("title");
var originalTitleText = document.getElementById("title").innerHTML;

var backgroundElement = document.getElementById("background");
var originalBackgroundSrc = document.getElementById("background").style.backgroundImage;

function onWhatClick()
{
    if(showWhatObject == true)
    {
        scene.remove(spongeObj);
        showWhatObject = false;
        dirLight2.color.setHex(blueColor);

        camera.fov = camFOV;
        camera.updateProjectionMatrix();
        camera.rotation.z = 0;

        imgElement.setAttribute("src", originalImgSrc);
        titleElement.innerHTML = originalTitleText;
        backgroundElement.style.backgroundImage = originalBackgroundSrc;
    }
    else
    {
        scene.add(spongeObj);
        showWhatObject = true;
        //in the meantime, since i cant load a picture of primitive sponge, i'll just make the lights black'
        dirLight2.color.setHex(0x000000);

        //*sigh* this'll do'
        imgElement.setAttribute("src", "http://i.imgur.com/LO6Ky8V.png");
        titleElement.innerHTML = "THEY'RE SELLING CHOCOLATES";
        backgroundElement.style.backgroundImage = "url('http://i.imgur.com/LHoDYS5.jpg')";
    }
};
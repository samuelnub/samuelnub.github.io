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

function onWhatClick()
{
    if(showWhatObject == true)
    {
        scene.remove(spongeObj);
        showWhatObject = false;
        dirLight2.color.setHex(blueColor);
    }
    else
    {
        scene.add(spongeObj);
        showWhatObject = true;
        //in the meantime, since i cant load a picture of primitive sponge, i'll just make the lights black'
        dirLight2.color.setHex(0x000000);
    }
};
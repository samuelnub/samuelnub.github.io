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
    }
    else
    {
        scene.add(spongeObj);
        showWhatObject = true;
    }
};
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
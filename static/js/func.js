'use strict';
//needs an img_src that is an object with key = image name, and value = image source
//returns loaded image
function loadImages(img_src) {
    var img = {};
    for (var i = 0; i < Object.keys(img_src).length; i++) {
        console.log(Object.keys(img_src)[i])
        img[Object.keys(img_src)[i]] = new Image();
        img[Object.keys(img_src)[i]].src = Object.values(img_src)[i];
    }
    return img;
}

function waitImgLoad(img) { //DOES NOT WORK BECAUSE JS IS ASYNCHRONOUS SO IT WILL NOT WAIT
    //maybe try to:
    //add event listener here
    //then in loadImages() func there would be a var called imgLoaded starting at 0
    //then the setTimeout below would check if image has complete until it has which is when it would increment the var
    //when var reached length of total images, the function would start game
    console.log(img)
    if (!img.complete) {
        console.log("waiting")
        setTimeout(waitImgLoad, 20, img); //checks if image is loaded 50x per sec
    }
}

function changeMouse(mouseType) {
    if (document.body.style.cursor != mouseType) {
        document.body.style.cursor = mouseType;
    }
}



/* GAME FUNCTIONS */
function btnHoverCheck(x, y, w, h) {
    if (mouse[0] > x &&
        mouse[0] < x + w &&
        mouse[1] > y &&
        mouse[1] < y + h) 
    {
        return true;
    } else {
        return false;
    }
}

function drawEllipse(ctx) {
    
}

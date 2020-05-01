'use strict';
const inputBox = document.getElementById('input');
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var mouse = [0,0]; //coordinate of mouse

//what screen is currently open, can be:
//loading, menu, game
var screen = "game";

//what panel is currently open, can be:
//none, portfolio, players, stocks, custom, settings
var panel = "none";

var img_src = {
    logo: 'static/assets/logo.png',
    floor: 'static/assets/browntexture.png',
    table: 'static/assets/pokertable.jpg'

}
var img = loadImages(img_src);

//variable for which canvas buttons are hovered
var btnHover = {
    portfolio: false,
    players: false,
    stocks: false,
    custom: false
}

var skip = 1; //this is temp cuz it has to come from servers

//main game loop
function loop() {
    //set mouse to default
    changeMouse("default");

    // set the canvas size to window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //turn off all btn hover
    Object.keys(btnHover).forEach(function(key) {
        return btnHover[key] = false;
    })

    if (screen == "game") {
        game(skip); //skip has to come from server
    } else if (screen == "menu") {

    } else if (screen == "loading") {

    }

    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);

//detect keydown
document.addEventListener("keydown", function(event) {
    
});

// detect keyup
document.addEventListener("keyup", function(event) {
    
});

document.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        console.log(document.activeElement == inputBox);
        if (document.activeElement == inputBox) {
            console.log("hey");
            document.getElementById("body").focus();
        } else {
            inputBox.focus();
        }
    }
});

// mouse coord
document.addEventListener('mousemove', function(e){
    mouse = [e.clientX, e.clientY];
});

// mouse click
document.addEventListener('click', function(e) {
    if (btnHover['portfolio'] == true) {
        if (panel != "portfolio") {
            panel = "portfolio";
        } else {
            panel = "none";
        }
    } else if (btnHover['players'] == true) {
        if (panel != "players") {
            panel = "players";
        } else {
            panel = "none";
        }
    } else if (btnHover['stocks'] == true) {
        if (panel != "stocks") {
            panel = "stocks";
        } else {
            panel = "none";
        }
    } else if (btnHover['custom'] == true) {
        if (panel != "custom") {
            panel = "custom";
        } else {
            panel = "none";
        }
    }
});
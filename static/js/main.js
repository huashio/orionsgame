'use strict';
const usernameInput = document.getElementById('usernameInput');
const chatInput = document.getElementById('chatInput');
const stockInput = document.getElementById('stockInput');
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const socket = io();

socket.on('connect', function () {
    console.log("connected");
    //socket.emit("new_player");
});

socket.on('serverMessage', function (message) {
    console.log(message);
})

var mouse = [0,0]; //coordinate of mouse

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
    custom: false,
    skip: false,
    buy: false,
    sell: false
}

//what SCREEN is currently open, can be:
//loading, menu, game
var SCREEN = "menu";

//what PANEL is currently open, can be:
//none, portfolio, players, stocks, custom, settings
var PANEL = "none";

//further option that can be opened inside each PANEL
var PANEL_OPTION = "none";



/*SERVER DATA*/
//array with player objects
var players = [];
//object that will have the current players
var me;

var sid;

var stocks = [];

var r = 0;

var timeLeft = 60;

//update info from server data
socket.on('serverData', function(serverPlayers, serverStocks, serverRound, serverTime) { //THIS WHOLE LINE JUST CHANGED
    players = serverPlayers;
    stocks = serverStocks;
    r = serverRound;
    timeLeft = serverTime;
    for (var i = 0; i < players.length; i++) {
        if (players[i].sid == sid) {
            me = players[i];
        }
    }
});

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

    if (SCREEN == "game") {
        socket.emit("requestData")
        if (me != undefined) {
            gameLoop(); //skip has to come from server
        }
    } else if (SCREEN == "menu") {
        menu();
    } else if (SCREEN == "loading") {

    }

    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);

//detect keydown
document.addEventListener("keydown", function(event) {
    if (SCREEN == "menu") {
        if (event.keyCode == 13) {
            socket.emit("new_player", usernameInput.value);
            socket.on("new_player", function(server_sid) {
                sid = server_sid;
            });
            usernameInput.style.display = "none";
            SCREEN = "game";
        }
    }
});

// detect keyup
document.addEventListener("keyup", function(event) {
    
});

document.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) { //watchout cuz this activates when first entering room when it should not
        if (SCREEN == "game") {
            console.log(document.activeElement == usernameInput);
            if (document.activeElement == usernameInput) {
                document.getElementById("body").focus(); 
            } else {
                usernameInput.focus();
            }
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
        if (PANEL != "portfolio") {
            PANEL = "portfolio";
            PANEL_OPTION = "none";
        } else {
            PANEL = "none";
            PANEL_OPTION = "none";
        }
    } else if (btnHover['players'] == true) {
        if (PANEL != "players") {
            PANEL = "players";
            PANEL_OPTION = "none";
        } else {
            PANEL = "none";
            PANEL_OPTION = "none";
        }
    } else if (btnHover['stocks'] == true) {
        if (PANEL != "stocks") {
            PANEL = "stocks";
            PANEL_OPTION = "none";
        } else {
            PANEL = "none";
            PANEL_OPTION = "none";
        }
    } else if (btnHover['custom'] == true) {
        if (PANEL != "custom") {
            PANEL = "custom";
            PANEL_OPTION = "none";
        } else {
            PANEL = "none";
            PANEL_OPTION = "none";
        }
    } else if (btnHover['skip'] == true) {
        socket.emit("skip");
    } else if (btnHover['buy'] == true) {
        console.log("BUYY")
        socket.emit("buy", PANEL_OPTION, stockInput.value);
    } else if (btnHover['sell'] == true) {
        socket.emit("sell", PANEL_OPTION, stockInput.value);
    }
});
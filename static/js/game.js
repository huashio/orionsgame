function game(skip) {
    /*BACKGROUND*/
    ctx.fillStyle = ctx.createPattern(img.floor, 'repeat');;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    /*TABLE*/
    ctx.lineWidth = 5;
    ctx.fillStyle = ctx.createPattern(img.table, 'repeat');
    var tblX = window.innerWidth/2;
    var tblY = window.innerHeight/2;
    var tblW = 400;
    var tblH = 140;
    ctx.beginPath();
    ctx.ellipse(tblX,tblY,tblW,tblH,0,0,Math.PI*2);
    ctx.stroke();
    ctx.fill();

    /*LOGO*/
    var logoW = 880/4;
    var logoH = 566/4;
    var logoX = canvas.width/2 - logoW/2;
    var logoY = canvas.height/2 - logoH/2;
    ctx.drawImage(img.logo, logoX, logoY, logoW, logoH);

    /*BOTTOM BUTTONS*/
    ctx.textAlign = "center";
    ctx.lineWidth = 4;
    ctx.fillStyle = ctx.createPattern(img.table, 'repeat');
    var btnH = 80; //box height
    var midBtnW = 240; //mid box width
    var sideBtnW = 140; //side box width
    var midBtnX = canvas.width/2 - midBtnW/2;
    //fill in box
    ctx.fillRect(midBtnX, canvas.height - btnH, midBtnW, btnH); //money
    ctx.fillRect(midBtnX - sideBtnW, canvas.height - btnH, sideBtnW, btnH); //player
    ctx.fillRect(midBtnX + midBtnW, canvas.height - btnH, sideBtnW, btnH); //stocks
    ctx.fillRect(midBtnX - 2*sideBtnW, canvas.height - btnH, sideBtnW, btnH); //portfolio
    ctx.fillRect(midBtnX + midBtnW + sideBtnW, canvas.height - btnH, sideBtnW, btnH); //custom
    //outline of box
    ctx.strokeRect(midBtnX, canvas.height - btnH, midBtnW, btnH); //money
    ctx.strokeRect(midBtnX - sideBtnW, canvas.height - btnH, sideBtnW, btnH); //players
    ctx.strokeRect(midBtnX + midBtnW, canvas.height - btnH, sideBtnW, btnH); //stocks
    ctx.strokeRect(midBtnX - 2*sideBtnW, canvas.height - btnH, sideBtnW, btnH); //portfolio
    ctx.strokeRect(midBtnX + midBtnW + sideBtnW, canvas.height - btnH, sideBtnW, btnH); //custom
    //text of box
    ctx.fillStyle = "#000000";
    ctx.font = 'bold 24px times serif';
    var txtH = canvas.height - 30;
    if (panel != "portfolio") {
        ctx.fillText('Portfolio', window.innerWidth/2 - midBtnW/2 - sideBtnW*1.5, txtH);
    } else {
        ctx.fillText('Back', window.innerWidth/2 - midBtnW/2 - sideBtnW*1.5, txtH);
    }
    if (panel != "players") {
        ctx.fillText('Players', window.innerWidth/2 - midBtnW/2 - sideBtnW/2, txtH);
    } else {
        ctx.fillText('Back', window.innerWidth/2 - midBtnW/2 - sideBtnW/2, txtH);
    }
    ctx.fillText('$$$', window.innerWidth/2, txtH);
    if (panel != "stocks") {
        ctx.fillText('Stocks', window.innerWidth/2 + midBtnW/2 + sideBtnW/2, txtH);
    } else {
        ctx.fillText('Back', window.innerWidth/2 + midBtnW/2 + sideBtnW/2, txtH);
    }
    if (panel != "custom") {
        ctx.fillText('Custom', window.innerWidth/2 + midBtnW/2 + sideBtnW*1.5, txtH);
    } else {
        ctx.fillText('Back', window.innerWidth/2 + midBtnW/2 + sideBtnW*1.5, txtH);
    }

    ctx.fillStyle = "#ffffff20"
    if (btnHoverCheck(midBtnX - 2*sideBtnW, canvas.height - btnH, sideBtnW, btnH)) {   
        ctx.fillRect(midBtnX - 2*sideBtnW, canvas.height - btnH, sideBtnW, btnH); //portfolio
        changeMouse("pointer");
        btnHover['portfolio'] = true;
    }
    if (btnHoverCheck(midBtnX - sideBtnW, canvas.height - btnH, sideBtnW, btnH)) {
        ctx.fillRect(midBtnX - sideBtnW, canvas.height - btnH, sideBtnW, btnH); //players
        changeMouse("pointer");
        btnHover['players'] = true;
    }
    if (btnHoverCheck(midBtnX + midBtnW, canvas.height - btnH, sideBtnW, btnH)) {
        ctx.fillRect(midBtnX + midBtnW, canvas.height - btnH, sideBtnW, btnH); //stocks
        changeMouse("pointer");
        btnHover['stocks'] = true;
    }
    if (btnHoverCheck(midBtnX + midBtnW + sideBtnW, canvas.height - btnH, sideBtnW, btnH)) {
        ctx.fillRect(midBtnX + midBtnW + sideBtnW, canvas.height - btnH, sideBtnW, btnH); //custom
        changeMouse("pointer");
        btnHover['custom'] = true;
    }

    /*PANELS*/
    if (panel == "portfolio") {
        portfolio(btnH); //btnH is height of bottom buttons defined above
    } else if (panel == "players") {
        players(btnH);
    } else if (panel == "stocks") {
        stocks(btnH);
    } else if (panel == "custom") {
        custom(btnH);
    }

    /*TOP BORDERS*/
    ctx.fillStyle = "#ffffff40";
    var menuW = canvas.width/5;
    var trW = canvas.width/10;
    var trH = canvas.height/5;
    ctx.fillRect(0, 0, menuW, canvas.height/20); //left menu
    ctx.fillRect(canvas.width - trW, 0, trW, canvas.height/4); //right menu

    /*ROUND NUMBER*/
    ctx.fillStyle = "#DDDDDD";  
    ctx.font = 'bold 48px times serif';
    ctx.textAlign = "center";
    ctx.fillText('Round: ', window.innerWidth/2, 40);

    /*TIME*/
    ctx.fillStyle = "#000000";  
    ctx.font = 'bold 20px times serif';
    ctx.textAlign = "right";
    ctx.fillText('Time:', window.innerWidth - 15, 20);

    /*SKIP BUTTON*/
    ctx.lineWidth = 5;
    if (skip == 0) {
        ctx.fillStyle = "red";
    } else {
        ctx.fillStyle = "green";
    }
    ctx.beginPath();
    ctx.ellipse(window.innerWidth/2, window.innerHeight/2 + window.innerHeight/3, 70, 20, 0, 0,Math.PI*2);
    ctx.stroke();
    ctx.fill();
    
    ctx.fillStyle = "#000000";  
    ctx.font = 'bold 24px arial';
    ctx.textAlign = "center";
    ctx.fillText('SKIP', canvas.width/2, canvas.height/2 + canvas.height/2.9); 

    /*CHATBOX*/
    // ctx.lineWidth = 4;
    // ctx.fillStyle = "#00000060";
    // var chatBoxW = canvas.width/5;
    // var inputBoxH = 30;
    // //input part
    // ctx.strokeRect(0, canvas.height - inputBoxH, chatBoxW, inputBoxH);
    // ctx.fillRect(0, canvas.height - inputBoxH, chatBoxW, inputBoxH)
    // //text part
    // ctx.strokeRect(0, canvas.height/2, chatBoxW, canvas.height - inputBoxH);
    // ctx.fillRect(0, canvas.height/2, chatBoxW, canvas.height - inputBoxH)

    /*EXPERIMENTS*/
    //mouse
    ctx.fillText('mouse: ' + mouse[0].toString() + ", " + mouse[1].toString(), canvas.width/2, 60);
}


/*PANEL FUNCTIONS*/
function portfolio(btnH) {
    //background
    ctx.fillStyle = "#000000d0"
    ctx.lineWidth = 8;
    ctx.fillRect(0, 0, canvas.width, canvas.height - btnH);
    ctx.strokeRect(0, 0, canvas.width, canvas.height - btnH);
}

function players(btnH) {
    //background
    ctx.fillStyle = "#000000d0"
    ctx.lineWidth = 8;
    ctx.fillRect(0, 0, canvas.width, canvas.height - btnH);
    ctx.strokeRect(0, 0, canvas.width, canvas.height - btnH);
}

function stocks(btnH) {
    //background
    ctx.fillStyle = "#000000d0"
    ctx.lineWidth = 8;
    ctx.fillRect(0, 0, canvas.width, canvas.height - btnH);
    ctx.strokeRect(0, 0, canvas.width, canvas.height - btnH);
}

function custom(btnH) {
    //background
    ctx.fillStyle = "#000000d0"
    ctx.lineWidth = 8;
    ctx.fillRect(0, 0, canvas.width, canvas.height - btnH);
    ctx.strokeRect(0, 0, canvas.width, canvas.height - btnH);
}
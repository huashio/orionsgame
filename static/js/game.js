function gameLoop() {
    var obj = new function () { 
        var that = [this]; //used to make outer objects accessible to inner ones
        this.table = new function () {
            this.x = canvas.width/2;
            this.y = canvas.height/2;
            this.w = 400*(canvas.width/1366);
            this.h = 140*(canvas.height/689);
        }
        this.logo = new function () {
            this.w = 880/4*(canvas.width/1366);
            this.h = 566/4*(canvas.height/689);
            this.x = canvas.width/2 - this.w/2;
            this.y = canvas.height/2 - this.h/2;
        }
        this.botBtns = new function () {
            that[1] = this;
            this.h = 80;
            this.y = canvas.height - this.h;
            this.w = new function () {
                this.mid = 240;
                this.side = 140;
            }
            this.x = new function () {
                this.money = canvas.width/2 - that[1].w.mid/2;
                this.stocks = this.money - that[1].w.side*2;
                this.players = this.money - that[1].w.side;
                this.portfolio = this.money + that[1].w.mid;
                this.custom =  this.money + that[1].w.mid + that[1].w.side;
            }
            this.txts = new function () {
                this.txt = new function () {
                    this.stocks = "Stocks";
                    this.players = "Players";
                    this.portfolio = "Portfolio";
                    this.custom = "Custom";
                }
                this.x = new function () {
                    this.money = that[1].x.money + that[1].w.mid/2;
                    this.stocks = that[1].x.stocks + that[1].w.side/2;
                    this.players = that[1].x.players + that[1].w.side/2;
                    this.portfolio = that[1].x.portfolio + that[1].w.side/2;
                    this.custom = that[1].x.custom + that[1].w.side/2;
                }
                this.y = canvas.height - that[1].h/2;
            }
        }
        this.settings = new function () {
            this.x = 0;
            this.y = 0;
            this.w = canvas.width/5;
            this.h = canvas.height/20;
        }
        this.lb = new function () {
            that[1] = this;
            this.w = 200;
            this.h = 250;
            this.x = canvas.width - this.w;
            this.y = 0;
            this.txt = new function () {
                this.x = that[1].x + that[1].w/2;
                this.y = that[1].y + 15 //+ i*30 
            }
        }
        this.round = new function () {
            this.x = canvas.width/2;
            this.y = 40;
        }
        this.time = new function () {
            this.x = that[0].lb.x; 
            this.y = that[0].lb.h + 15;
        }
        this.skip = new function () {
            this.x = canvas.width/2;
            this.y = canvas.height*(5/6);
            this.w = 70;
            this.h = 20;
        }
        this.panel = new function () {
            that[1] = this;
            this.x = new function () {
                this.left = that[0].botBtns.x.stocks;
                this.portfolio = that[0].botBtns.x.portfolio;
                this.custom = 0;
            }
            this.y = new function () {
                this.reg = canvas.height/6;
                this.custom = 0;
            }
            this.w = new function () {
                this.reg = that[0].botBtns.w.side*2;
                this.custom = canvas.width;
            }
            this.h = new function () {
                this.reg = canvas.height - that[0].botBtns.h - that[1].y.reg;
                this.custom = canvas.height - that[0].botBtns.h;
            }
            this.title = new function () {
                this.x = new function () {
                    this.left = that[0].botBtns.x.players;
                    this.portfolio = that[0].botBtns.x.custom;
                }
                this.y = new function () {
                    this.reg = that[1].y.reg - 15;
                }
            }
            this.stocks = new function () {
                that[2] = this;
                this.num = 10;
                this.x = that[1].x.left;
                this.w = that[1].w.reg;
                this.h = that[1].h.reg/this.num;
                this.y = function (i) { 
                    return obj.panel.y.reg + obj.panel.stocks.h*i;
                }
                this.txt = new function () {
                    this.x = new function () {
                        this.name = that[2].x + 5;
                        this.price = that[2].x + (3/4)*that[0].botBtns.w.side;
                        this.arrow = that[0].botBtns.x.money - 20;
                    }
                    this.y = function (i) {
                        return obj.panel.stocks.y(i) + obj.panel.stocks.h/2;
                    } 
                }
                this.trade = new function () {
                    that[3] = this;
                    this.x = that[0].botBtns.x.money;
                    this.y = function (i) {
                        return obj.panel.stocks.y(i);
                    }
                    this.w = that[2].w;
                    this.h = that[2].h*2;
                    this.txt = new function () {
                        this.x = that[3].x + 10;
                        this.y = new function () {
                            this.name = function (i) {
                                return obj.panel.stocks.trade.y(i) + 15;
                            }
                            this.price = function (i) {
                                return this.name(i) + obj.panel.stocks.trade.h/4;
                            }
                            this.amount = function (i) {
                                return this.name(i) + obj.panel.stocks.trade.h/2;
                            }
                        }
                    }
                    this.input = new function () {
                        this.x = that[3].x + that[3].w/2;
                        this.y = function (i) {
                            return obj.panel.stocks.trade.y(i) + obj.panel.stocks.trade.h/10;
                        }
                        this.w = that[3].w*(3/8); 
                        this.h = that[3].h*(1/5);
                        this.r = 15;
                        this.border = 2;
                    }
                    this.btns = new function () {
                        that[4] = this;
                        this.y = function (i) {
                            return obj.panel.stocks.trade.y(i) + obj.panel.stocks.trade.h/2;
                        }
                        this.w = that[3].input.w*(7/16)
                        this.x = new function () {
                            this.buy = that[3].input.x + that[3].input.w*(1/32) + that[3].input.border;
                            this.sell = this.buy + that[4].w + that[3].input.w*(1/16)
                        }
                        this.h = that[3].input.h/2
                        this.txt = new function () {
                            this.y = function (i) {
                                return obj.panel.stocks.trade.btns.y(i) + obj.panel.stocks.trade.btns.h/2;
                            }
                            this.x = new function () {
                                this.buy = that[4].x.buy + that[4].w/2;
                                this.sell = that[4].x.sell + that[4].w/2;
                            }
                        }
                    }
                }
            }
            this.players = new function () {
                that[2] = this;
                this.num = 8;
                this.x = that[1].x.left;
                this.w = that[1].w.reg;
                this.h = that[1].h.reg/this.num;
                this.y = function (i) {
                    return obj.panel.y.reg + obj.panel.players.h*i;
                }
                this.txt = new function () {
                    this.x = new function () {
                        this.name = that[2].x + 5;
                        this.arrow = that[0].botBtns.x.money - 20;
                    }
                    this.y = function (i) {
                        return obj.panel.players.y(i) + obj.panel.players.h/2;
                    } 
                }
                this.pfs = new function () {
                    that[3] = this;
                    this.x = that[2].x + that[2].w;
                    this.w = that[2].w;
                    this.y = that[1].y.reg;
                    this.h = that[1].h.reg;
                    this.stocks = new function () {
                        that[4] = this;
                        this.num = that[1].stocks.num + 2; //2 is for money and networth
                        this.x = that[3].x;
                        this.w = that[3].w;
                        this.h = that[3].h/this.num;
                        this.y = function (i) {
                            return obj.panel.players.pfs.y + obj.panel.players.pfs.stocks.h*i;
                        }
                        this.txt = new function () {
                            this.x = new function () {
                                this.name = that[4].x + 5;
                                this.amount = that[4].x + (1/2)*that[4].w;
                                this.money = that[4].x + that[4].w - 20;
                            }
                            this.y = function (i) {
                                return obj.panel.players.pfs.stocks.y(i) + obj.panel.players.pfs.stocks.h/2;
                            } 
                        }
                    }
                }
            }
            this.portfolio = new function () {
                that[2] = this;
                this.num = 10;
                this.x = that[1].x.portfolio;
                this.w = that[1].w.reg;
                this.h = that[1].h.reg/this.num;
                this.y = function (i) {
                    return obj.panel.y.reg + obj.panel.portfolio.h*i;
                }
                this.txt = new function () {
                    this.x = new function () {
                        this.name = that[2].x + 5;
                        this.money = that[2].x + (3/8)*that[2].w;
                        this.amount = that[2].x + that[2].w - 20;
                    }
                    this.y = function (i) {
                        return obj.panel.portfolio.y(i) + obj.panel.portfolio.h/2;
                    } 
                }
            }
        }
    }   

    stockInput.style.display = "none";

    /*BACKGROUND*/
    background();

    /*TABLE*/
    (function () {
        ctx.lineWidth = 5;
        ctx.fillStyle = ctx.createPattern(img.table, 'repeat');
        ctx.beginPath();
        ctx.ellipse(obj.table.x,obj.table.y,obj.table.w,obj.table.h,0,0,Math.PI*2);
        ctx.stroke();
        ctx.fill();
    }());

    /*LOGO*/
    ctx.drawImage(img.logo, obj.logo.x, obj.logo.y, obj.logo.w, obj.logo.h);

    /*NAMES*/
    (function () {
        ctx.font = 'bold 24px arial';

        for (i in players) {
            ctx.fillStyle = players[i].sid != me.sid ? "#000000" : "#FFFFFF"; // changes current player to white
            if (i == 0) {
                ctx.textAlign = "center";
                ctx.textBaseline = "top";
                ctx.fillText(players[i].username, canvas.width/2, canvas.height/2 + obj.table.h)
            } else if (i == 1) {
                ctx.textAlign = "left";
                ctx.textBaseline = "top";
                ctx.fillText(players[i].username, canvas.width/2 + obj.table.w/2, canvas.height/2 + Math.sqrt((1-(obj.table.w/2)**2/obj.table.w**2)*obj.table.h**2));
            } else if (i == 2) {
                ctx.textAlign = "left";
                ctx.textBaseline = "middle";
                ctx.fillText(players[i].username, canvas.width/2 + obj.table.w, canvas.height/2)
            } else if (i == 3) {
                ctx.textAlign = "left";
                ctx.textBaseline = "bottom";
                ctx.fillText(players[i].username, canvas.width/2 + obj.table.w/2, canvas.height/2 - Math.sqrt((1-(obj.table.w/2)**2/obj.table.w**2)*obj.table.h**2))
            } else if (i == 4) {
                ctx.textAlign = "center";
                ctx.textBaseline = "bottom";
                ctx.fillText(players[i].username, canvas.width/2, canvas.height/2 - obj.table.h)
            } else if (i == 5) {
                ctx.textAlign = "right";
                ctx.textBaseline = "bottom";
                ctx.fillText(players[i].username, canvas.width/2 - obj.table.w/2, canvas.height/2 - Math.sqrt((1-(obj.table.w/2)**2/obj.table.w**2)*obj.table.h**2))
            } else if (i == 6) {
                ctx.textAlign = "right";
                ctx.textBaseline = "middle";
                ctx.fillText(players[i].username, canvas.width/2 - obj.table.w, canvas.height/2)
            } else if (i == 7) {
                ctx.textAlign = "right";
                ctx.textBaseline = "top";
                ctx.fillText(players[i].username, canvas.width/2 - obj.table.w/2, canvas.height/2 + Math.sqrt((1-(obj.table.w/2)**2/obj.table.w**2)*obj.table.h**2))
            }
        }
    }());

    /*BOTTOM BUTTONS*/
   (function () {
        /*BACKGROUND & BORDER*/ 
        (function (){
            ctx.textAlign = "center";
            ctx.lineWidth = 4;
            ctx.strokeStyle = "black";
            ctx.fillStyle = ctx.createPattern(img.table, 'repeat');
            //money
            ctx.fillRect(obj.botBtns.x.money, obj.botBtns.y, obj.botBtns.w.mid, obj.botBtns.h); 
            ctx.strokeRect(obj.botBtns.x.money, obj.botBtns.y, obj.botBtns.w.mid, obj.botBtns.h);
            //stocks
            ctx.fillRect(obj.botBtns.x.stocks, obj.botBtns.y, obj.botBtns.w.side, obj.botBtns.h); 
            ctx.strokeRect(obj.botBtns.x.stocks, obj.botBtns.y, obj.botBtns.w.side, obj.botBtns.h);
            //players
            ctx.fillRect(obj.botBtns.x.players, obj.botBtns.y, obj.botBtns.w.side, obj.botBtns.h); 
            ctx.strokeRect(obj.botBtns.x.players, obj.botBtns.y, obj.botBtns.w.side, obj.botBtns.h);
            //portfolio
            ctx.fillRect(obj.botBtns.x.portfolio, obj.botBtns.y, obj.botBtns.w.side, obj.botBtns.h); 
            ctx.strokeRect(obj.botBtns.x.portfolio, obj.botBtns.y, obj.botBtns.w.side, obj.botBtns.h);
            //custom
            ctx.fillRect(obj.botBtns.x.custom, obj.botBtns.y, obj.botBtns.w.side, obj.botBtns.h); 
            ctx.strokeRect(obj.botBtns.x.custom, obj.botBtns.y, obj.botBtns.w.side, obj.botBtns.h);
        }());
        /*TEXT*/
        (function (){
            ctx.fillStyle = "#000000";
            ctx.font = 'bold 24px times serif';
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("$" + me.money.toFixed(2), obj.botBtns.txts.x.money, obj.botBtns.txts.y);
            for (var i in obj.botBtns.txts.txt) {
                if (i != PANEL) {
                    ctx.fillText(obj.botBtns.txts.txt[i], obj.botBtns.txts.x[i], obj.botBtns.txts.y)
                } else {
                    ctx.fillText("Back", obj.botBtns.txts.x[i], obj.botBtns.txts.y)
                }
            }
        }());
        /*HOVER*/
        (function (){
            ctx.fillStyle = "#ffffff20"
            for (i in obj.botBtns.x) {
                if (i != "money") {
                    if (btnHoverCheck(obj.botBtns.x[i], obj.botBtns.y, obj.botBtns.w.side, obj.botBtns.h)) {
                        ctx.fillRect(obj.botBtns.x[i], obj.botBtns.y, obj.botBtns.w.side, obj.botBtns.h); //stocks
                        changeMouse("pointer");
                        btnHover[i] = true;
                    }
                }
            }
        }());
   }());

    /*SETTINGS*/
    (function () {
        ctx.fillStyle = "#ffffff40";
        ctx.fillRect(obj.settings.x, obj.settings.y, obj.settings.w, obj.settings.h);
    }());

    /*LEADERBOARD*/
    (function () {
        ctx.fillStyle = "#ffffff40";
        ctx.fillRect(obj.lb.x, obj.lb.y, obj.lb.w, obj.lb.h);
        ctx.strokeRect(obj.lb.x, obj.lb.y, obj.lb.w, obj.lb.h);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle"; 
        ctx.font = 'bold 12px arial';
        for (i in players) {
            ctx.fillStyle = players[i].sid != me.sid ? "#000000" : "#FFFFFF"; //changes current player to white
            ctx.fillText(players[i].username + " - $" + players[i].networth.toFixed(2), obj.lb.txt.x, obj.lb.txt.y + i*30)
        }
    }());

    /*ROUND NUMBER*/
    (function () {
        ctx.fillStyle = "#DDDDDD";  
        ctx.font = 'bold 48px times serif';
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        if (r != 0) {
            ctx.fillText('Round: ' + r.toString(), obj.round.x, obj.round.y);
        }
    }());

    /*TIME*/
    (function (){
        ctx.fillStyle = "#DDDDDDD";  
        ctx.font = 'bold 20px times serif';
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        if (r != 0) {
            ctx.fillText('Time:' + timeLeft.toString(), obj.time.x, obj.time.y);
        }
    }());

    /*SKIP BUTTON*/
    (function (){
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000000";
        if (me.done == true) {
            ctx.fillStyle = "red";
        } else {
            ctx.fillStyle = "green";
        }
        ctx.beginPath();
        ctx.ellipse(obj.skip.x, obj.skip.y, obj.skip.w, obj.skip.h, 0, 0,Math.PI*2);
        ctx.stroke();
        ctx.fill();

        ctx.fillStyle = "#000000";
        ctx.font = 'bold 24px arial';
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText('SKIP', obj.skip.x, obj.skip.y);

        /*HOVER*/
        (function (){
            //make sure stock panel is not on covering
            if (PANEL == "stocks" && PANEL_OPTION != "none") {
                var po = PANEL_OPTION;
                //if mouse is on one of the panels, then it cant be on the skip button
                if (btnHoverCheck(obj.panel.stocks.trade.x, obj.panel.stocks.trade.y(po), obj.panel.stocks.trade.w, obj.panel.stocks.trade.h)) {
                    return
                }
            } else if (PANEL == "players" && PANEL_OPTION != "none") {
                return
            }
            //check for skip button
            if (btnHoverCheck(obj.skip.x, obj.skip.y, obj.skip.w, obj.skip.h, "ellipse")) {
                changeMouse("pointer");
                btnHover["skip"] = true;
            }
        }());
    }());

    /*PANELS*/
    (function(){
        if (PANEL == "stocks") {
            /*BACKGROUND*/
            (function (){
                ctx.fillStyle = "#66666680";
                ctx.lineWidth = 5;
                ctx.fillRect(obj.panel.x.left, obj.panel.y.reg, obj.panel.w.reg, obj.panel.h.reg);
                ctx.strokeRect(obj.panel.x.left, obj.panel.y.reg, obj.panel.w.reg, obj.panel.h.reg);
            }());

            /*TITLE */
            (function (){
                ctx.fillStyle = "#000000";  
                ctx.font = 'bold 24px arial';
                ctx.textAlign = "center";
                ctx.fillText('STOCKS', obj.panel.title.x.left, obj.panel.title.y.reg); 
            }());

            /*STOCK BOX*/
            for (var i in stocks) {
                ctx.lineWidth = 2;
                ctx.strokeStyle = "#a0a0a0";
                ctx.font = 'bold 18px arial';
                ctx.textAlign = "left";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "#000000";
                ctx.strokeRect(obj.panel.stocks.x, obj.panel.stocks.y(i), obj.panel.stocks.w, obj.panel.stocks.h);
                ctx.fillText(stocks[i].name, obj.panel.stocks.txt.x.name, obj.panel.stocks.txt.y(i));
                ctx.fillText("$"+stocks[i].price.toFixed(2), obj.panel.stocks.txt.x.price, obj.panel.stocks.txt.y(i));
                ctx.fillText("\u25B8", obj.panel.stocks.txt.x.arrow, obj.panel.stocks.txt.y(i));
                if (btnHoverCheck(obj.panel.stocks.x, obj.panel.stocks.y(i), obj.panel.stocks.w, obj.panel.stocks.h)) {
                    PANEL_OPTION = i;
                }

            }

            /*STOCK OPTIONS*/
            if (PANEL_OPTION != "none") {
                var po = PANEL_OPTION;
                var stockAmount = me.portfolio[stocks[po].name] || 0;

                /*HIGHLIGHT*/
                (function (){
                    ctx.fillStyle = "#ffffff50";
                    ctx.fillRect(obj.panel.stocks.x, obj.panel.stocks.y(po), obj.panel.stocks.w, obj.panel.stocks.h);
                }());

                /*BACKGROUND*/
                (function (){
                    /*BACKGROUND*/
                    ctx.fillStyle = "#66666680";
                    ctx.fillRect(obj.panel.stocks.trade.x, obj.panel.stocks.trade.y(po), obj.panel.stocks.trade.w, obj.panel.stocks.trade.h);
                    /*BORDERS*/
                    ctx.strokeStyle = "#66666680";
                    ctx.lineWidth = 5;
                    ctx.strokeRect(obj.panel.stocks.trade.x, obj.panel.stocks.trade.y(po), obj.panel.stocks.trade.w, obj.panel.stocks.trade.h);
                    ctx.strokeStyle = "#a0a0a0";
                    ctx.lineWidth = 2;
                    ctx.strokeRect(obj.panel.stocks.trade.x, obj.panel.stocks.trade.y(po), obj.panel.stocks.trade.w, obj.panel.stocks.trade.h);
                }());

                /*STOCK INFO*/
                (function (){
                    ctx.fillStyle = "#000000";
                    ctx.fillText(stocks[po].name, obj.panel.stocks.trade.txt.x, obj.panel.stocks.trade.txt.y.name(po));
                    ctx.fillText("$"+stocks[po].price.toFixed(2), obj.panel.stocks.trade.txt.x, obj.panel.stocks.trade.txt.y.price(po));
                    ctx.fillText("Amount: " + stockAmount.toString(), obj.panel.stocks.trade.txt.x, obj.panel.stocks.trade.txt.y.amount(po));
                }());

                /*STOCK INPUT*/
                (function (){
                    stockInput.style.borderWidth = (obj.panel.stocks.trade.input.border).toString() + "px";
                    stockInput.style.borderRadius = (obj.panel.stocks.trade.input.r).toString() + "px";
                    stockInput.style.left = (obj.panel.stocks.trade.input.x).toString() + "px";
                    stockInput.style.top = (obj.panel.stocks.trade.input.y(po)).toString() + "px";
                    stockInput.style.width = (obj.panel.stocks.trade.input.w).toString() + "px";
                    stockInput.style.height = (obj.panel.stocks.trade.input.h).toString() + "px";
                    stockInput.style.display = "inline";
                }());

                /*BUY/SELL BTNS*/
                (function (){
                    // make the curved rectangle with bezier curve
                    ctx.fillStyle = "green";
                    ctx.fillRect(obj.panel.stocks.trade.btns.x.buy, obj.panel.stocks.trade.btns.y(po), obj.panel.stocks.trade.btns.w, obj.panel.stocks.trade.btns.h);
                    ctx.fillStyle = "red";
                    ctx.fillRect(obj.panel.stocks.trade.btns.x.sell, obj.panel.stocks.trade.btns.y(po), obj.panel.stocks.trade.btns.w, obj.panel.stocks.trade.btns.h);
                    ctx.font = 'bold 10px arial';
                    ctx.fillStyle = "#FFFFFF";
                    ctx.textAlign = "center";
                    ctx.fillText("Buy", obj.panel.stocks.trade.btns.txt.x.buy, obj.panel.stocks.trade.btns.txt.y(po));
                    ctx.fillText("Sell", obj.panel.stocks.trade.btns.txt.x.sell, obj.panel.stocks.trade.btns.txt.y(po));

                    /*HOVER*/
                    (function (){
                        //buy
                        if (btnHoverCheck(obj.panel.stocks.trade.btns.x.buy, obj.panel.stocks.trade.btns.y(po), obj.panel.stocks.trade.btns.w, obj.panel.stocks.trade.btns.h)) {
                            changeMouse("pointer");
                            btnHover["buy"] = true;
                        }
                        //sell
                        else if (btnHoverCheck(obj.panel.stocks.trade.btns.x.sell, obj.panel.stocks.trade.btns.y(po), obj.panel.stocks.trade.btns.w, obj.panel.stocks.trade.btns.h)) {
                            changeMouse("pointer");
                            btnHover["sell"] = true;
                        }
                    }());

                }());
            }
        } else if (PANEL == "players") {
            /*BACKGROUND*/
            (function (){
                ctx.fillStyle = "#66666680";
                ctx.strokeStyle = "#000000";
                ctx.lineWidth = 5;
                ctx.fillRect(obj.panel.x.left, obj.panel.y.reg, obj.panel.w.reg, obj.panel.h.reg);
                ctx.strokeRect(obj.panel.x.left, obj.panel.y.reg, obj.panel.w.reg, obj.panel.h.reg);
            }());

            /*TITLE*/
            (function (){
                ctx.fillStyle = "#000000";  
                ctx.font = 'bold 24px arial';
                ctx.textAlign = "center";
                ctx.fillText('PLAYERS', obj.panel.title.x.left, obj.panel.title.y.reg); 
            }());

            /*PLAYER BOX*/
            (function (){
                for (var i in players) {
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = "#a0a0a0";
                    ctx.font = 'bold 18px arial';
                    ctx.textAlign = "left";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "#000000";
                    ctx.strokeRect(obj.panel.players.x, obj.panel.players.y(i), obj.panel.players.w, obj.panel.players.h);
                    ctx.fillText(players[i].username, obj.panel.players.txt.x.name, obj.panel.players.txt.y(i));
                    ctx.fillText("\u25B8", obj.panel.players.txt.x.arrow, obj.panel.players.txt.y(i));
                    if (btnHoverCheck(obj.panel.players.x, obj.panel.players.y(i), obj.panel.players.w, obj.panel.players.h)) {
                        PANEL_OPTION = i;
                    }
                }
            }());
            /*PLAYER PORTFOLIO*/
            if (PANEL_OPTION != "none") {
                var po = PANEL_OPTION;

                /*HIGHLIGHT*/
                (function (){
                    ctx.fillStyle = "#ffffff50";
                    ctx.fillRect(obj.panel.players.x, obj.panel.players.y(po), obj.panel.players.w, obj.panel.players.h);
                }());


                /*BACKGROUND*/
                (function (){
                    ctx.fillStyle = "#66666680";
                    ctx.strokeStyle = "#000000";
                    ctx.lineWidth = 5;
                    ctx.fillRect(obj.panel.players.pfs.x, obj.panel.players.pfs.y, obj.panel.players.pfs.w, obj.panel.players.pfs.h);
                    ctx.strokeRect(obj.panel.players.pfs.x, obj.panel.players.pfs.y, obj.panel.players.pfs.w, obj.panel.players.pfs.h);
                }());

                /*MONEY*/
                (function (){
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = "#a0a0a0";
                    ctx.font = 'bold 18px arial';
                    ctx.textAlign = "left";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "#000000";
                    ctx.strokeRect(obj.panel.players.pfs.stocks.x, obj.panel.players.pfs.stocks.y(0), obj.panel.players.pfs.stocks.w, obj.panel.players.pfs.stocks.h);
                    ctx.fillText("Money:", obj.panel.players.pfs.stocks.txt.x.name, obj.panel.players.pfs.stocks.txt.y(0));
                    //ctx.fillText("$"+stocks[i].price.toFixed(2), obj.panel.players.pfs.stocks.txt.x.price, obj.panel.players.pfs.stocks.txt.y(0));
                    ctx.textAlign = "right";
                    ctx.fillText("$"+players[po].money.toFixed(2), obj.panel.players.pfs.stocks.txt.x.money, obj.panel.players.pfs.stocks.txt.y(0));
                }());

                /*STOCKS*/
                (function (){
                    var i = 0;
                    for (j in players[po].portfolio) {
                        var currentStock;
                        for (k in stocks) {
                            if (stocks[k].name == j) {
                                currentStock = stocks[k];
                            }
                        }
                        ctx.lineWidth = 2;
                        ctx.strokeStyle = "#a0a0a0";
                        ctx.font = 'bold 18px arial';
                        ctx.textAlign = "left";
                        ctx.textBaseline = "middle";
                        ctx.fillStyle = "#000000";
                        ctx.strokeRect(obj.panel.players.pfs.stocks.x, obj.panel.players.pfs.stocks.y(i+1), obj.panel.players.pfs.stocks.w, obj.panel.players.pfs.stocks.h);
                        ctx.fillText(j + " - " + players[po].portfolio[j], obj.panel.players.pfs.stocks.txt.x.name, obj.panel.players.pfs.stocks.txt.y(i+1));
                        //ctx.fillText(players[po].portfolio[j], obj.panel.players.pfs.stocks.txt.x.amount, obj.panel.players.pfs.stocks.txt.y(i+1));
                        ctx.textAlign = "right";
                        ctx.fillText("$"+(currentStock.price*players[po].portfolio[j]).toFixed(2), obj.panel.players.pfs.stocks.txt.x.money, obj.panel.players.pfs.stocks.txt.y(i+1));
                        i++;
                    }
                }());

                /*NET WORTH*/
                (function (){
                    var pfLen = Object.keys(players[po].portfolio).length;
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = "#a0a0a0";
                    ctx.font = 'bold 18px arial';
                    ctx.textAlign = "left";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "#000000";
                    ctx.strokeRect(obj.panel.players.pfs.stocks.x, obj.panel.players.pfs.stocks.y(pfLen+1), obj.panel.players.pfs.stocks.w, obj.panel.players.pfs.stocks.h);
                    ctx.fillText("Net Worth:", obj.panel.players.pfs.stocks.txt.x.name, obj.panel.players.pfs.stocks.txt.y(pfLen+1));
                    ctx.textAlign = "right";
                    ctx.fillText("$"+players[po].networth.toFixed(2), obj.panel.players.pfs.stocks.txt.x.money, obj.panel.players.pfs.stocks.txt.y(pfLen+1));
                }());
            }

        } else if (PANEL == "portfolio") {
            /*BACKGROUND*/
            (function (){
                ctx.fillStyle = "#66666680";
                ctx.lineWidth = 5;
                ctx.fillRect(obj.panel.x.portfolio, obj.panel.y.reg, obj.panel.w.reg, obj.panel.h.reg);
                ctx.strokeRect(obj.panel.x.portfolio, obj.panel.y.reg, obj.panel.w.reg, obj.panel.h.reg);
            }());

            /*TITLE*/
            (function (){
                ctx.fillStyle = "#000000";  
                ctx.font = 'bold 24px arial';
                ctx.textAlign = "center";
                ctx.fillText('PORTFOLIO', obj.panel.title.x.portfolio, obj.panel.title.y.reg); 
            }());

            /*PORTFOLIO BOX*/
            (function (){
                //i keeps track of loop
                var i = 0;
                for (var j in me.portfolio) {
                    var currentStock;
                    for (k in stocks) {
                        if (j == stocks[k].name) {
                            currentStock = stocks[k];
                        }
                    }
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = "#a0a0a0";
                    ctx.font = 'bold 18px arial';
                    ctx.textAlign = "left";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "#000000";
                    ctx.strokeRect(obj.panel.portfolio.x, obj.panel.portfolio.y(i), obj.panel.portfolio.w, obj.panel.portfolio.h);
                    ctx.fillText(j, obj.panel.portfolio.txt.x.name, obj.panel.portfolio.txt.y(i));
                    ctx.fillText("$"+(currentStock.price*me.portfolio[j]).toFixed(2), obj.panel.portfolio.txt.x.money, obj.panel.portfolio.txt.y(i));
                    ctx.textAlign = "right";
                    ctx.fillText(me.portfolio[j], obj.panel.portfolio.txt.x.amount, obj.panel.portfolio.txt.y(i));
                    i++;
                }
            }());
        } else if (PANEL == "custom") {
            //background
            ctx.fillStyle = "#000000d0"
            ctx.lineWidth = 8;
            ctx.fillRect(obj.panel.x.custom, obj.panel.y.custom, obj.panel.w.custom, obj.panel.h.custom);
            ctx.strokeRect(obj.panel.x.custom, obj.panel.y.custom, obj.panel.w.custom, obj.panel.h.custom);
        }
    }());

    /*CHAT*/
    // ctx.lineWidth = 4;
    // ctx.fillStyle = "#00000060";
    // var chatInputW = canvas.width/5;
    // var chatInputH = 30;
    //input part
    // ctx.strokeRect(0, canvas.height - chatInputH, chatInputW, chatInputH);
    // ctx.fillRect(0, canvas.height - chatInputH, chatInputW, chatInputH);
    // //text part
    // ctx.strokeRect(0, canvas.height/2, chatInputW, canvas.height - chatInputH);
    // ctx.fillRect(0, canvas.height/2, chatInputW, canvas.height - chatInputH);

    /*EXPERIMENTS OR TEMP*/
    //mouse
    //make input none before implementing chat
    chatInput.style.display = "none";
}

function menu() {
    /*BACKGROUND*/
    background()

    /*USERNAME*/ //MAKE A FUNCTION LATER WHERE INPUT ONLY CHANGES ONCE
    var inputH = 30;
    var inputW = 300;
    usernameInput.style.display = "inline";
    usernameInput.style.bottom = (canvas.height/2 - inputH/2).toString() + "px";
    usernameInput.style.left = (canvas.width/2 - inputW/2).toString() + "px";
    usernameInput.style.backgroundColor = "#FFFFFF";
    usernameInput.style.color = "#000000";
    usernameInput.style.width = inputW.toString() + "px";
    usernameInput.style.height = inputH.toString() + "px";
    usernameInput.style.textAlign = "center";
    usernameInput.maxLength = "14"
    usernameInput.style.font = 'bold 20px times serif';
    usernameInput.placeholder = "What's your name, Investor?";
    usernameInput.focus();

    var logoW = 880/3;
    var logoH = 566/3;
    var logoX = canvas.width/2 - logoW/2;
    var logoY = canvas.height/3 - logoH/1.5;
    ctx.drawImage(img.logo, logoX, logoY, logoW, logoH);

    var enterY = canvas.height/2 - inputH/2;
    ctx.fillStyle = "#000000";  
    ctx.font = 'bold 15px times serif';
    ctx.textAlign = "center";
    ctx.fillText('(press enter to begin) ', window.innerWidth/2, enterY + 45);
}

/*BACKGROUND*/
function background() {
    if (SCREEN == "game") {
        ctx.fillStyle = ctx.createPattern(img.floor, 'repeat');;
    } else if (SCREEN == "menu") {
        ctx.fillStyle = ctx.createPattern(img.table, "repeat");
    }
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

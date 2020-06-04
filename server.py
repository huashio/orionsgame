import time
import threading
from flask import Flask, render_template, url_for, request
from flask_socketio import SocketIO, emit
import game
import main

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route('/favicon.ico')
def favicon():
    return redirect(url_for('static', filename='favicon.ico'))

@socketio.on('message')
def handle_message(message):
    print('received message: ' + message)

def new_player(username, sid):
    for i in main.players:
        if i.username == username:
            i.sid = sid
            return
    main.players.append(game.player(request.sid, username, main.players))

@socketio.on('new_player')
def handle_my_custom_event(username):
    new_player(username, request.sid)
    emit("new_player", request.sid)
    print(request.sid)
    print("current player count: " + str(len(main.players)))

# @socketio.on('disconnect')
# def handle_my_custom_event():
#     for i in main.players:
#         if i.sid == request.sid:
#             main.players.remove(i)


@socketio.on("requestData")
def handle_my_custom_event():
    # for i in players:
    #     playersJSON.append(i.toJSON())
    player_obj = []
    stock_obj = []
    for i in main.players:
        player_obj.append(vars(i))
    for i in main.stocks:
        stock_obj.append(vars(i))
    emit("serverData", (player_obj, stock_obj, main.r, main.timeLeft))

@socketio.on("skip")
def handle_my_custom_event():
    for i in main.players:
        if i.sid == request.sid:
            emit("serverMessage", i.finish())

@socketio.on("buy")
def handle_my_custom_event(stock_num, value):
    for i, p in enumerate(main.players):
        if p.sid == request.sid:
            emit("serverMessage", main.players[i].buy(main.stocks[int(stock_num)], int(value)))

@socketio.on("sell")
def handle_my_custom_event(stock_num, value):
    for i, p in enumerate(main.players):
        if p.sid == request.sid:
            emit("serverMessage", main.players[i].sell(main.stocks[int(stock_num)], int(value)))

# @socketio.on("playerUpdate")
# def handle_my_custom_event(sid):
#     pass

#create player class with sid and append it to players
#if len(players) < 8, then display "waiting for x more players..."
#when game starts, generate 20 different stocks and send it to all players
#

def loop():
    while True:
        if main.checkDone():
            main.next_round()
        if main.r > 0:
            main.countDown()
        time.sleep(1)



if __name__ == '__main__':
    p = threading.Thread(target=loop)
    p.start()
    socketio.run(app, host="192.168.0.6", port="5000")
    p.join()
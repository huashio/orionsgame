import game
import time
import sys
import random
import math

players = []#figure out a way to get players from an actauly list of players that plays
stocks = [] #stock objects
maxPlayer = 8 #max number of players that can join a session
stockNum = 10 #the user will be able to choose the amount he wants later
rounds = 25 #the user will be able to choose the amount he wants later
r = 0 #current round
roundTime = 60 #player should be able to choose this later one too
timeLeft = roundTime


def countDown():
    global timeLeft
    timeLeft -= 1
    if timeLeft == 0:
        next_round()


def checkDone(): #checks every second if all players have selected done
    global players
    global timeLeft
    if timeLeft == 0:
        return True
    if len(players) == 0:
        return False
    for i in players:
        if i.done == False:
            return False
    return True

def next_round():
    global players
    global r
    global timeLeft
    r += 1
    for i in players:
        i.done = False
    if r == 1: #round 1
        startGame()
    elif r > rounds: #end of last round
        endGame()
    else: #all rounds except 1
        for i in stocks:
            i.calcPrice()
            if i.price < 0:
                for j in players:
                    j.del_stock(i)
                stocks.remove(i)
        if r % 5 == 0:
            for i in stocks:
                i.ceo = i.chooseCeo()
        for i in players:
            i.calc_networth(stocks)
        timeLeft = roundTime
            

    
def startGame():
    global stocks
    for i in range(stockNum):
        stocks.append(game.stock(random.choice(["low", "medium", "high"]), stocks))

def endGame():
    pass


#check when all players have clicked the skip button
#after that, round will 


# # Timer for each round
# for i in range(rounds):
#     uin = roundTime #round length, players might choose that
#     bin = 10 #time between rounds
#     print("Round: " + str(i+1), end="\n\n")
#     for j in players:
#         j.done = False
#     while uin > 0:
#         m, s= divmod(uin, 60)
#         time_left = str(m).zfill(2) + ":" + str(s).zfill(2)
#         print(time_left, end="\n")
#         time.sleep(1)
#         uin -= 1
#         if checkDone() == True:
#             break
            


#     print("ROUND OVER", end="\n")
#     time.sleep(2)  
    
#     while bin > 0:
#         m, s= divmod(bin, 10)
#         time_left = str(m).zfill(2) + ":" + str(s).zfill(2)
#         print("NEXT ROUND IN: " + time_left, end="\n")
#         time.sleep(1)
#         bin -= 1
        
# def stocks() :
#     while True:
#         print()
#         print(
# '''
# Select the number for the action that you would like to do?
# 1. View Stocks
# 2. Get Stocks 
# 3. Remove stock
# 4. Stocks selected
# 5. Clear all stocks
# 6. Exit
# ''')
#         selection = input ("Make your selection: ")
#         if selection == "1":
#             showStocks()
#         elif selection == "2":
#             addItem ()
#         elif selection == "3":  
#             removeItem ()
#         elif selection == "4":
#              allList ()
#         elif selection == "5":
#              clearItem ()
#         elif selection == "6":
#             sys.exit()     
#         else:
#             print ("invalid selection! ")
# stock_list = ["TEL", "AVB", "AC", "JEP", "IPH", "SAM", "XON", "BER", "FUR", "DEN"]

# def showStocks () :
#     print()
#     print("--- STOCKS ---")
#     for i in stock_list:
#         print("* " + i)

# def addItem () :
#     item = input("Enter stocks you want to add: ")    
#     if item in stock_list:
#         players.buy() #this part is gonna change
#         print(item + " has been added to your stocks. ")
#     else:    
#         print("Stock not available. ")


# def removeItem () :
#     item = input("What stocks do you want removed from your stock shopping list: ")
#     if item in stock_list:
#         buy_list.remove(item)
#         print(item + " has been removed from your shoppin list")

#     else:    
#         print("Stock not in your buying list. ")
        
# def allList () :
#     print (" There are", len(buy_list), "stocks on your buying list.")
#     print()
#     print("--- STOCKS SELECTED ---")
#     for i in buy_list:
#         print("* " + i)

# def clearList () :
#     buy_list.clear ()
#     print ("Your stock list is empty. ")

# stocks ()
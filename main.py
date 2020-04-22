import game
import time
import sys

# players = [0,0,0]#figure out a way to get players from an actauly list of players that plays
# stockNum = 10 #the user will be able to choose the amount he wants later
# rounds = 25 #the user will be able to choose the amount he wants later
# roundTime = 60 #player should be able to choose this later one too

# for i in range(len(players)):
#     players[i] = game.player()

# def checkDone(): #checks every second if all players have selected done
#     for i in players:
#         if i.done == False:
#             return False
#     return True

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
        
def stocks() :
    while True:
        print()
        print(
'''
Select the number for the action that you would like to do?
1. View Stocks
2. Get Stocks 
3. Remove stock
4. Stocks selected
5. Clear all stocks
6. Exit
''')
        selection = input ("Make your selection: ")
        if selection == "1":
            showStocks()
        elif selection == "2":
            addItem ()
        elif selection == "3":  
            removeItem ()
        elif selection == "4":
             allList ()
        elif selection == "5":
             clearItem ()
        elif selection == "6":
            sys.exit()     
        else:
            print ("invalid selection! ")
stock_list = ["TEL", "AVB", "AC", "JEP", "IPH", "SAM", "XON", "BER", "FUR", "DEN"]
buy_list = []

def showStocks () :
    print()
    print("--- STOCKS ---")
    for i in stock_list:
        print("* " + i)

def addItem () :
    item = input("Enter stocks you want to add: ")    
    if item in stock_list:
        buy_list.append (item)
        print(item + " has been added to your stocks. ")
    else:    
        print("Stock not available. ")


def removeItem () :
    item = input("What stocks do you want removed from your stock shopping list: ")
    if item in stock_list:
        buy_list.remove(item)
    print(item + " has been removed from your shoppin list")

    else:    
        print("Stock not in your buying list. ")
        
def allList () :
    print (" There are", len(buy_list), "stocks on your buying list.")
    print()
    print("--- STOCKS SELECTED ---")
    for i in buy_list:
        print("* " + i)

def clearList () :
    buy_list.clear ()
    print ("Your stock list is empty. ")

stocks ()
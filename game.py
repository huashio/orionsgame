import random

class player:
    def __init__(self):
        self.money = 1000
        self.portfolio = {}
    
    def buy(self, stock, shares):
        if self.money - stock.price*shares >= 0:
            self.money -= stock.price*shares
            portfolio.setdefault(stock, 0) #makes sure that the stock exists before adding shares to it
            self.portfolio[stock] += shares
            return "Succesful Transaction!"
        else:
            return "Not Enough Money!"
    
    def sell(self, stock, shares):
        if self.portfolio[stock] >= shares:
            self.money += stock.price*shares
            self.portfolio[stock] -= shares
            return "Succesful Transaction!"
        else:
            return "Too Many Stocks!"


class stock:
    def __init__(self, divident):
        self.price = 100 + random.random()*50 - 25
        if divident == low:
            self.divident = 0.01
        if divident == medium:
            self.divident = 0.05
        if divident == high:
            self.divident = 0.1

    def calcPrice(self, risk):
        if risk == low:
            self.price = self.price + random.random()*10 - 5
        if risk == medium:
            self.price = self.price + random.random()*30 - 15
        if risk == high:
            self.price = self.price + random.random()*50 - 25
    


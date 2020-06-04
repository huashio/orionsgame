import random

class player:
    def __init__(self, sid, username, players):
        self.sid = sid
        self.username = username or self.namer(players)
        self.money = 10000
        self.portfolio = {}
        self.networth = self.money
        self.done = False
            

    def namer(self, players):
        names = ["Warren Buffet", "Rockefeller", "Carnegie", "Zuckerberg", "Bill Gates", "Elon Musk",
                "Jeff Bezos", "JP Morgan", "Larry Page", "Sergey Brin", "Steve Jobs", "Steve Ballmer"]
        name = ""
        while name == "": #loops until a different name is picked than already exists
            name = random.choice(names)
            for i in players:
                print(players)
                if i.username == name:
                    name = ""
        return name
    
    def buy(self, stock, shares):
        if self.money - stock.price*shares >= 0 and shares > 0:
            self.money -= stock.price*shares
            self.portfolio.setdefault(stock.name, 0) #makes sure that the stock exists before adding shares to it
            self.portfolio[stock.name] += shares
            return "Succesful Transaction!"
        else:
            return "Not Enough Money!"
    
    def sell(self, stock, shares):
        if self.portfolio[stock.name] >= shares and shares > 0:
            self.money += stock.price*shares
            self.portfolio[stock.name] -= shares
            if self.portfolio[stock.name] == 0:
                self.portfolio.pop(stock.name)
            return "Succesful Transaction!"
        else:
            return "Too Many Shares Entered!"
    
    def calc_networth(self, stocks):
        self.networth = self.money
        for i in self.portfolio:
            for j in stocks:
                if j.name == i:
                    self.networth += self.portfolio[i]*j.price

    def del_stock(self, stock):
        if stock.name in self.portfolio:
            self.portfolio.pop(stock.name)

    def finish(self):
        self.done = True
        return "Finished"


class stock:
    def __init__(self, divident, stockList):
        self.name = self.nameGenerator(stockList)
        self.price = round(100 + random.random()*50 - 25, 2)
        self.ceo = self.chooseCeo()
        self.risk = self.calcRisk()
        if divident == "low":
            self.divident = 0.01
        if divident == "medium":
            self.divident = 0.05
        if divident == "high":
            self.divident = 0.1

    def calcPrice(self):
        if self.risk == "low":
            self.price = self.price + random.random()*30 - 10 + self.ceo*(1/2)
        if self.risk == "med":
            self.price = self.price + random.random()*50 - 20 + self.ceo #-40-10, -30-20, -20-30, -10-40,
        if self.risk == "high":
            self.price = self.price + random.random()*70 - 30 + self.ceo*1.5

    def nameGenerator(self, stockList):
        letters = "QWERTYUIOPASDFGHJKLZXCVBNM"
        name = ""
        nameLen = random.randint(1, 5)
        for i in range(nameLen):
            name += random.choice(letters)
        for i in stockList: #loops through stockList to check for repeated name, if yes, then run this again
            if i.name == name:
                return self.nameGenerator(stockList)
        return name
    
    def calcRisk(self):
        if random.randint(1,5) == 1:
            return "low"
        if random.randint(1,3) == 1:
            return "med"
        else:
            return "high"

    def chooseCeo(self):
        return random.choice([-15, -5, 5, 15])


 

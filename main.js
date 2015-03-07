var MoneyDisplayTimer;
var MoneyIncTimer;

MoneyIncTimer = setInterval(function(){MoneyInc()}, 10);
MoneyDisplayTimer = setInterval(function(){MoneyDisplay(Money)}, 10);

var PennyHelpersIniCost = 10;
var friendinitialcost = 100;
var expgrowthconst = 1.1;
var MoneyIncRate = 0; //increment rate in dollars/second

var Money = 0;

function MoneyInc(){
    Money = Money + MoneyIncRate*0.01;
};

function MoneyDisplay(){
    document.getElementById("Money").innerHTML = Math.floor(Money);
};

function PennyClick(number){
	Money = Money + number;
}

var PennyHelpers = 0;

function buyPennyHelpers(){
    var PennyHelperCost = Math.floor(PennyHelpersIniCost * Math.pow(expgrowthconst,PennyHelpers));     //works out the cost of this cursor
    if(Money >= PennyHelperCost){                                   //checks that the player can afford the cursor
        PennyHelpers = PennyHelpers + 1;                                   //increases number of PennyHelpers
    	Money = Money - PennyHelperCost;                          //removes the Money spent
        document.getElementById('PennyHelpers').innerHTML = PennyHelpers;  //updates the number of PennyHelpers for the user
		MoneyIncRate = MoneyIncRate + 1;
    };
    var nextCost = Math.floor(PennyHelpersIniCost * Math.pow(expgrowthconst,PennyHelpers));       //works out the cost of the next cursor
    document.getElementById('PennyHelperCost').innerHTML = nextCost;  //updates the cursor cost for the user	
};

var friends = 0;

function buyFriend(){

    var friendCost = Math.floor(friendinitialcost * Math.pow(expgrowthconst,friends));     //works out the cost of this cursor
    if(Money >= friendCost){                                   //checks that the player can afford the cursor
        friends = friends + 1;                                   //increases number of PennyHelpers
    	Money = Money - friendCost;                          //removes the Money spent
        document.getElementById('friends').innerHTML = friends;  //updates the number of PennyHelpers for the user
		MoneyIncRate = MoneyIncRate + 10;
    };
    var nextCost = Math.floor(friendinitialcost * Math.pow(expgrowthconst,friends));       //works out the cost of the next cursor
    document.getElementById('friendCost').innerHTML = nextCost;  //updates the cursor cost for the user	
};

var RateIncArray = {};
RateIncArray["PennyHelper"] = 1;
RateIncArray["SausageSizzle"] = 10;

function BuyRateIncrease(Item){

}
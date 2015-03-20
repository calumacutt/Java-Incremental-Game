var MoneyDisplayTimer;
var MoneyIncTimer;

MoneyIncTimer = setInterval(function(){MoneyInc()}, 10);
MoneyDisplayTimer = setInterval(function(){MoneyDisplay();MoneyRateDisplay();}, 10);

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

function MoneyRateDisplay(){
    document.getElementById("MoneyIncRate").innerHTML = Math.floor(MoneyIncRate);
};

function PennyClick(number){
	Money = Money + number;
}

var ItemRateArray = {};
ItemRateArray["PennyHelper"] = 1;
ItemRateArray["SausageSizzle"] = 10;
ItemRateArray["Banker"] = 100;

var ItemCostArray = {};
ItemCostArray["PennyHelper"] = 10;
ItemCostArray["SausageSizzle"] = 100;
ItemCostArray["Banker"] = 1000;

var ItemCountArray = {};
ItemCountArray["PennyHelper"] = 0;
ItemCountArray["SausageSizzle"] = 0;
ItemCountArray["Banker"] = 0;

var ItemLabelArray = {};
ItemLabelArray["PennyHelper"] = 'PennyHelperCost';
ItemLabelArray["SausageSizzle"] = 'SausageSizzleCost';
ItemLabelArray["Banker"] = 'BankerCost';

function BuyItem(Item){
	var ItemCost = Math.floor(ItemCostArray[Item] * Math.pow(expgrowthconst, ItemCountArray[Item]));
	if(Money >= ItemCost){
		ItemCountArray[Item] = ItemCountArray[Item] + 1;
		Money = Money - ItemCost;
		document.getElementById(Item).innerHTML = ItemCountArray[Item];
		MoneyIncRate = MoneyIncRate + ItemRateArray[Item];
	};
	var nextCost = Math.floor(ItemCostArray[Item] * Math.pow(expgrowthconst, ItemCountArray[Item]));
	document.getElementById(ItemLabelArray[Item]).innerHTML = nextCost;		
}

//Opens and closes the 'donate' tab//
function donate(){
	if (document.getElementById('donate').style.display == 'block'){
		document.getElementById('donate').style.display = 'none';
	} else {
		document.getElementById('donate').style.display = 'block';
	}
}

//Reveals and hides the different canvases. For the menu system.
function toggletab(id){
	var divs = document.getElementsByClassName("canvas");
	for (var i=1 ; i<divs.length ; i+=1){
		if (divs[i].id == id){
			console.log(id);
			divs[i].style.display = 'block';
		} else {
			divs[i].style.display = 'none';
		}
	}
}
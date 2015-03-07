var MoneyDisplayTimer;
var MoneyIncTimer;

MoneyIncTimer = setInterval(function(){cookieIncrement()}, 10);
MoneyDisplayTimer = setInterval(function(){cookieDisplay(cookies)}, 10);

var cursorinitialcost = 10;
var friendinitialcost = 100;
var expgrowthconst = 1.1;
var cookieincrementrate = 0; //increment rate in cookies/second



var cookies = 0;

function cookieIncrement(){
    cookies = cookies + cookieincrementrate*0.01;
};

function cookieDisplay(){
    document.getElementById("cookies").innerHTML = Math.floor(cookies);
};

function cookieClick(number){
	cookies = cookies + number;
}

var cursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(cursorinitialcost * Math.pow(expgrowthconst,cursors));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
		cookieincrementrate = cookieincrementrate + 1;
    };
    var nextCost = Math.floor(cursorinitialcost * Math.pow(expgrowthconst,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user	
};

var friends = 0;

function buyFriend(){
    var friendCost = Math.floor(friendinitialcost * Math.pow(expgrowthconst,friends));     //works out the cost of this cursor
    if(cookies >= friendCost){                                   //checks that the player can afford the cursor
        friends = friends + 1;                                   //increases number of cursors
    	cookies = cookies - friendCost;                          //removes the cookies spent
        document.getElementById('friends').innerHTML = friends;  //updates the number of cursors for the user
		cookieincrementrate = cookieincrementrate + 10;
    };
    var nextCost = Math.floor(friendinitialcost * Math.pow(expgrowthconst,friends));       //works out the cost of the next cursor
    document.getElementById('friendCost').innerHTML = nextCost;  //updates the cursor cost for the user	
};

function save(){
	var save = {
		cookies: cookies,
		cursors: cursors,
		prestige: prestige
	}
	localStorage.setItem("save",JSON.stringify(save));
}
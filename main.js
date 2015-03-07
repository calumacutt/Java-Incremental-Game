var cookies = 0;
var cursors = 0;

function cookieClick(number){
	cookies = cookies + number;
	document.getElementById("cookies").innerHTML = cookies;
};

function buyCursor(){
	var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));
	if (cookies >= cursorCost){
		cursors = cursors + 1;
		cookies = cookies - cursorCost;
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};		
	
window.setInterval(function(){
	cookieClick(cursors);
}, 1000);
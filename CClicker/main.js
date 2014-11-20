var clicking = false;
var golden = false;
var popWrinklers = false;
var popSeasonal = false;
var randomCM = false;
var timer = 0;
var frenzypower = 1000000;
var frenzy = false;
function AutoClick() {
    clicking = !clicking;
	if(clicking){
		Autoclicker = setInterval(function(){
			Game.ClickCookie();
		},1);
		Game.Notify('Cheat','AutoClicker enabled','',6);
	}else{
		clearInterval(Autoclicker);
		Game.Notify('Cheat','AutoClicker disabled','',6);
	}

}
function AutoGolden(){
	golden = !golden; 
	if(golden){
		GoldenClicker = setInterval(function() {
			if (Game.goldenCookie.life > 0){ 
				Game.goldenCookie.click();
			};
			if(popWrinklers){Game.CollectWrinklers();}
			if(popSeasonal){Game.seasonPopup.click();}
		}, 100);
		Game.Notify('Gold!' ,'AutoGolden enabled','',6);
		}else{
			clearInterval(GoldenClicker);
			Game.Notify('Lead!' ,'AutoGolden disabled','',6);
		}
}
function superfrenzy(){
	Game.frenzy=Game.fps*120;
	Game.frenzyPower=1000000;
	Game.recalculateGains=1;
	Game.Notify('Those darn Cheaters','1000000x Frenzy activated','',6);
}
function addCookieMonster(){
	var CookieMonster = document.createElement('img');
	CookieMonster.id = 'Cookiemonster';
	document.body.appendChild(CookieMonster);
	document.getElementById('Cookiemonster').src = 'http://i.imgur.com/mapEKNh.png';
}
function startCM(){
	var timer = (Math.random()*100000);
    console.log(timer);
    randomVisit = setInterval(function(){
		setTimeout(function(){
			if(randomCM){
				document.getElementById('Cookiemonster').style.display = 'block';
				setTimeout("document.getElementById('Cookiemonster').style.display = 'none'",2000);
			}
		},timer);
        timer = (Math.random()*100000);
        if(!randomCM){
            clearInterval(randomVisit);
        }
	},timer);
}
function toggleCM(){
	randomCM = !randomCM;
	if(randomCM){
		startCM();
	}else{
		clearInterval(randomVisit);
	}
}
function toggleFrenzy(){
	frenzy = !frenzy;
	if(frenzy){
	frenzyTimer = setInterval(function(){
		Game.frenzy=Game.fps*1;
		Game.frenzyPower=frenzypower;
		Game.recalculateGains=1;
	},900);
	Game.Notify('Those darn Cheaters',frenzypower + 'x Frenzy activated','',6);
	}else{
	clearInterval(frenzyTimer);
	}
}
function addFrenzyClick() {	
	var MenuButton = document.createElement('div');
    MenuButton.id = 'MenuButton';
    MenuButton.innerHTML = 'Cheats';
	MenuButton.onclick = function(){
	if(document.getElementById('Menu').style.display == 'block'){
		document.getElementById('Menu').style.display = 'none';
		document.getElementById('sectionMiddle').classList.remove("menus");
		document.getElementById('rows').classList.remove("rowhidden");
	}else{
		document.getElementById('Menu').style.display = 'block';
		document.getElementById('sectionMiddle').classList.add("menus");
		document.getElementById('rows').classList.add("rowhidden");
	}
	};
	document.getElementById('comments').appendChild(MenuButton);
	document.getElementById("MenuButton").className = "button";
	var Menu = document.createElement('div');
	Menu.id = 'Menu';
	Menu.style.cssText = 'display:none';
	Menu.innerHTML = '<div style="position:absolute;top:8px;left:8px;cursor:pointer;font-size:16px;" onclick="toggleMenu();">X</div><div class="section">Cheats</div>';
	document.getElementById('sectionMiddle').appendChild(Menu);
	var subsection = document.createElement('div');
	subsection.id = "SubSection";
	
	subsection.innerHTML = 
	'<div class="title">Automatic Clicking</div>'+
	'<div class="listing">'+Game.WriteButton("autoclick","AutoClick","AutoClick ON","AutoClick OFF","AutoClick();")+'</div>'+
	'<div class="listing">'+Game.WriteButton("autogolden","AutoGolden","AutoGolden ON","AutoGolden OFF","AutoGolden();")+'<input type="checkbox" name="goldenmode" value="Wrinklers" onclick="popWrinklers = this.checked;">Pop Wrinklers<input type="checkbox" name="goldenmode" value="Seasonal" onclick="popSeasonal = this.checked;">Pop seasonal specials</div>'+
	'<div class="title">Frenzy</div>'+
	'<div class="listing">'+Game.WriteButton("frenzybutton","frenzybutton","Frenzy ON","Frenzy OFF","toggleFrenzy();")+'Frenzy Multiplier:<input type="text" size="8" maxlength="11" value="1000000" onkeydown="frenzypower = this.value;">'+'</div>'+
	'<div class="title">Special</div>'+
	'<div class="listing">'+Game.WriteButton("toggleCM","CM","Random visits ON","Random visits OFF","toggleCM();")+'</div>'+
	'<div class="listing"><a class="option" onclick="Game.seasonPopup.time = Game.seasonPopup.maxTime;">Spawn Seasonal Special</a></div>';
	
	document.getElementById('Menu').appendChild(subsection);
	document.getElementById('SubSection').className="subsection";
	
	var SuperFrenzy = document.createElement('div');
	SuperFrenzy.id = 'Superfrenzy';
	SuperFrenzy.onclick = function(){superfrenzy();};
	document.getElementById('game').appendChild(SuperFrenzy);
}
function toggleMenu(){
	if(document.getElementById('Menu').style.display == 'block'){
		document.getElementById('Menu').style.display = 'none';
		document.getElementById('sectionMiddle').classList.remove("menus");
		document.getElementById('rows').classList.remove("rowhidden");
	}else{
		document.getElementById('Menu').style.display = 'block';
		document.getElementById('sectionMiddle').classList.add("menus");
		document.getElementById('rows').classList.add("rowhidden");
	}
}

function styling(){
var FrenzyClickstyle = document.styleSheets[0];
FrenzyClickstyle.addRule('#MenuButton','padding:14px 16px 10px 0px;top:0px;right:-16px;z-index:3000;');
FrenzyClickstyle.addRule('#Menu','color:#fff;background:#000 url(http://orteil.dashnet.org/cookieclicker/img/darkNoise.png);z-index:1000000;position:absolute;left:16px;right:0px;top:112px;bottom:0px;');
FrenzyClickstyle.addRule('#SubSection','padding:8px 0px;font-size:14px;');
FrenzyClickstyle.addRule('#Superfrenzy','z-index:100000000000000;position:absolute;left:0px;bottom:0px;width:74px;height:22px;margin:8px;');
FrenzyClickstyle.addRule('#Superfrenzy:hover','cursor:text');
FrenzyClickstyle.addRule('#Cookiemonster','z-index:200000000000000;position:absolute;overflow-x:hidden;overflow-y:hidden;width:100%;height:100%;display:none;');
FrenzyClickstyle.addRule('.menus','background:#000 url(http://orteil.dashnet.org/cookieclicker/img/darkNoise.png)');
FrenzyClickstyle.addRule('.rowhidden','visibility:hidden');
}



Startup = setInterval(function() {
	addFrenzyClick();
	addCookieMonster();
	styling();
	clearInterval(Startup);
}, 1);

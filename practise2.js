
//Challenge 1
function calculation(){
	var year=prompt("wats your year of birth?");
	var age=2020-year;
	var h2=document.createElement('h2');
	var text=document.createTextNode('you are'+age+'years old');
	h2.setAttribute('id','newage');
	h2.appendChild(text);	
	document.getElementById('result').appendChild(h2);
	
}
function reset(){
	document.getElementById('newage').remove();
}

//Challenge 2
function generate(){
	var imgg=document.createElement('img');
	document.getElementById('flex').appendChild(imgg);
	imgg.src='painting-2.jpg';
	imgg.width=210;
imgg.height=110;	
}

//Challenge 3
function rpsGame(yourChoice){
	var humanchoice, botchoice;
	humanchoice=yourChoice.id;
	botchoice=numbertochoice(randomnumber());
	var results= decidewinner(humanchoice,botchoice);
	var message = finalmessage(results);
	rpsFrontEnd(humanchoice,botchoice,message);
}

function randomnumber(){
	return Math.floor(Math.random()*3);
}


function numbertochoice(number){
	return['rock','paper','scissors'][number];
}
	
function decidewinner(yourChoice,computerChoice){
		var rpsdatabase={
			'rock':{'scissors':1,'rock':0.5,'paper':0},
			'paper':{'scissors':0,'rock':1,'paper':0.5},
			'scissors':{'scissors':0.5,'rock':0,'paper':1}
		}
		var yourScore=rpsdatabase[yourChoice][computerChoice]
		
		var computerScore=rpsdatabase[computerChoice][yourChoice];
		
		return [yourScore,computerScore];
	}
	
function finalmessage([yourScore, computerScore]){
		if(yourScore===0){
			return {'message':'You Lost','color':'red'}
		}
			else if(yourScore===0.5){
			return{'message':'You Tied','color':'black'}
			}
			else {
			return{'message':'You Won','color':'green'}
			}
	}
function rpsFrontEnd(human,bot,msgg){	
	document.getElementById('winner').innerHTML= '<h1 style=color:'+msgg.color+'>'+msgg.message+'</h1>&nbsp;<h2>'+'You choose '+human+" and the bot choose "+bot+'</h2>';	
}

//Challenge4


	var allbuttons=document.getElementsByTagName('button');	
	var copyallbtns=[];
	for(let i=0; i<allbuttons.length; i++){
		copyallbtns.push(allbuttons[i].classList[1]);
	}
	console.log(copyallbtns);
	function colorChange(cont){	
		if(cont.value==="red"){	
		btnred();	
		}
		else if(cont.value==="green"){
		btngreen();	
		}
		else if(cont.value==="yellow"){
		btnyellow();	
		}
		else if(cont.value==="reset"){
			btnreset();
		}
		else if(cont.value==="random"){
			randomn();
		}
	}
	
	function btnred(){
		
		for(let i=0; i<allbuttons.length; i++){
		allbuttons[i].classList.remove(allbuttons[i].classList[1]);
		allbuttons[i].classList.add('btn-danger');
	}
	}
	function btngreen(){
		
		for(let i=0; i<allbuttons.length; i++){
		allbuttons[i].classList.remove(allbuttons[i].classList[1]);
		allbuttons[i].classList.add('btn-success');
	}
	}
	function btnyellow(){
		
		for(let i=0; i<allbuttons.length; i++){
		allbuttons[i].classList.remove(allbuttons[i].classList[1]);
		allbuttons[i].classList.add('btn-warning');
	}
	}
	function btnreset(){
		for(let i=0; i<allbuttons.length; i++){
		allbuttons[i].classList.remove(allbuttons[i].classList[1]);
		allbuttons[i].classList.add(copyallbtns[i]);
	}
	}
	function randomn(){
		var choices=['btn-primary','btn-danger','btn-warning','btn-success'];
		for(let i=0; i<allbuttons.length; i++){
		let randnum=Math.floor(Math.random()*4);
		allbuttons[i].classList.remove(allbuttons[i].classList[1]);
		allbuttons[i].classList.add(choices[randnum]);
		
		
		}
		
	}
	/*Component 5 Blackjack game*/
	let blackgame={
		'you':{'scorespan':'#yourresult', 'div':'#yourbox','score':0},
		'dealer':{'scorespan':'#dealerresult', 'div':'#dealerbox','score':0},
		'cards':['2','3','4','5','6','7','8','9','10','k','q','j','A'],
		'cardsmap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'k':10,'j':10,'q':10,'A':[1,11]},
		'wins':0,
		'loss':0,
		'draws':0,
		'isStand':false,
		'turnOver':false
	}
	const YOU=blackgame['you'];
	const DEALER=blackgame['dealer'];
	const hitsound= new Audio('sounds/swish.m4a');
	const winsound= new Audio('sounds/cash.mp3');
	const lossound= new Audio('sounds/aww.mp3');
	
	//const cardchosen=blackgame['cards'];
	
	document.querySelector('#btnhit').addEventListener('click',blackjackhit);
	function blackjackhit(){
		if (blackgame['isStand']===false){
		let card=randcards();		
		showcard(card,YOU);
		updatescore(card,YOU)
		showscore(YOU);
		}
	}
	function randcards(){
		let cardnumber=Math.floor(Math.random()*13);
		return blackgame['cards'][cardnumber];
	}
	function showcard(card,activeplayer){
		if(activeplayer['score']<=21){
		let cardimage=document.createElement('img');
		cardimage.src=`images/${card}.png`;
		document.querySelector(activeplayer['div']).appendChild(cardimage);
		hitsound.play();
		}
	}
	document.querySelector('#btndeal').addEventListener('click',blackjackdeal);
	document.querySelector('#btnstand').addEventListener('click',dealerlogic);
	function blackjackdeal(){
		//computewinner();
		if (blackgame['turnOver']==true){
			blackgame['isStand']==false;
		//showresult(computewinner());
		let yourimages=document.querySelector('#yourbox').querySelectorAll('img');
		let dealerimages=document.querySelector('#dealerbox').querySelectorAll('img');
		let imglength=yourimages.length;
		let imgdlength=dealerimages.length;
		for(let i=0; i<imglength; i++){
		yourimages[i].remove();
		}
		for(let i=0; i<imgdlength; i++){
		dealerimages[i].remove();
		}
		YOU['score']=0;
		DEALER['score']=0;
		document.querySelector('#yourresult').textContent=0;
		document.querySelector('#dealerresult').textContent=0;
		document.querySelector('#yourresult').style.color="white";
		document.querySelector('#dealerresult').style.color="white";
		document.querySelector('#blackjack').textContent="Lets Play";
		document.querySelector('#blackjack').style.color="black";
		blackgame['turnOver']==true;
		}
		
	}
	function updatescore(card,activeplayer){
		if(card==="A"){
			if(activeplayer['score']+blackgame['cardsmap'][card][1]<=21){
				activeplayer['score']+=blackgame['cardsmap'][card][1];
			}
			else{
				activeplayer['score']+=blackgame['cardsmap'][card][0];
			}
		}
		else{
		activeplayer['score']+=blackgame['cardsmap'][card];
		}
	}
	function showscore(activeplayer){
		if(activeplayer['score']>21){
			document.querySelector(activeplayer['scorespan']).textContent='Bust!';
			document.querySelector(activeplayer['scorespan']).style.color='red';
		}
		else{
		document.querySelector(activeplayer['scorespan']).textContent=activeplayer['score'];
		}
		}
		function sleep(ms){
			return new Promise(resolve =>setTimeout(resolve,ms))
		}
	async function dealerlogic(){
		blackgame ['isStand']=true;
		while(DEALER['score']<16 && blackgame['isStand']===true){
		let card=randcards();		
		showcard(card,DEALER);
		updatescore(card,DEALER)
		showscore(DEALER);
		await sleep(1000);
		}
		if(DEALER['score']>15){
			blackgame ['turnOver']=true;
			showresult(computewinner());
		
		}
	}
	//computte winner and return whojust win
	function computewinner(){
		let winner;
		
		if(YOU['score']<=21){
			if (YOU['score']>DEALER['score']||DEALER['score']>21){
				blackgame['wins']++;
				winner=YOU;
				
			}
			else if (YOU['score']<DEALER['score']){
				blackgame['loss']++;
				winner=DEALER;
				
			}
			else if (YOU['score']==DEALER['score']){
				blackgame['draws']++;
				
			}
		}
		else if(YOU['score']>21&&DEALER['score']<=21){
			winner=DEALER;
			blackgame['loss']++;
		}
		else if(YOU['score']>21&&DEALER['score']>21){
			blackgame['draws']++;
		}
		
		console.log(winner);
		return winner;
	}
	function showresult(winner){
		let message,msgcolor;
		if(blackgame['turnOver']===true){
		if(winner===YOU){
			document.querySelector('#win').textContent=blackgame['wins'];
			message="You won";
			msgcolor="green";
			winsound.play();
		}
		else if(winner===DEALER){
			document.querySelector('#loss').textContent=blackgame['loss'];
			message="You lost";
			msgcolor="red";
			lossound.play();
		}
		else {
			
		document.querySelector('#draws').textContent=blackgame['draws'];
			message="You drew";
			msgcolor="black";			
		}
		document.querySelector('#blackjack').textContent=message;
		document.querySelector('#blackjack').style.color=msgcolor;
		
		
		}
		blackgame['turnOver']==false;
		blackgame ['isStand']=false;
	}
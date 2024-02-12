
let correctNumber= getrandomNumber();
let guessArray=[];
window.onload =function(){
    document.getElementById("checkbtn").addEventListener("click",playGame)
    document.getElementById("resetbtn").addEventListener("click",newGame)
}


function playGame(){
    let guessValue = document.getElementById('EnteredNumber').value;
    console.log(correctNumber)
    console.log(typeof(guessValue));
    if(guessValue>0 & guessValue<100){
    if(guessValue > correctNumber)
    toohigh();
    else if(guessValue < correctNumber)
    toolow();
    else if(guessValue == correctNumber)
   youwon();
    }
    else{
        newGame();
    }
 
   guesshistory(guessValue);
   displayhistory();

}
getrandomNumber();
function getrandomNumber(){
    let randomNumber = Math.random();
    let wholeNumber= Math.floor(randomNumber*100);
    return wholeNumber;
}

function toohigh() {

      document.getElementById('result').innerHTML="Your Number is too high"
      document.getElementById('EnteredNumber').style.backgroundColor="red";
}

function toolow() {
   
    document.getElementById('result').innerHTML="Your Number is too low"
    document.getElementById('EnteredNumber').style.backgroundColor="red";
}

function youwon() {
  
    document.getElementById('result').innerHTML="Hurray!! You guessed the number correct..It took you "+(guessArray.length+1)+" tries"
    
    document.getElementById('result').style.color= 'green';
    document.getElementById('EnteredNumber').style.backgroundColor="green";   
    document.getElementById('result').style.fontWeight=800;
}

function guesshistory(guessValue) {
    guessArray.push(guessValue);
    
}

function displayhistory() {
    let index=guessArray.length-1;
    let list ="<ul class='list-group'>";
    while(index>=0)
    {
        list += "<li class ='list-group-item'>"+"Your recent guess was "+guessArray[index]+"</li>";
        index=index-1;
    }
    list +='</ul>';
    document.getElementById('resultArray').innerHTML=list;
    
}

function newGame(){
    correctNumber= getrandomNumber();
    document.getElementById('result').innerHTML="";
    guessArray=[];
    displayhistory();
    document.getElementById('EnteredNumber').style.backgroundColor="rgb(63, 62, 62)";
    

}
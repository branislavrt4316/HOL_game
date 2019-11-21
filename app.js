var levelOfGame = 100; //user lvl of game
var compRandomNum; //random number from computer
var userNumber; //user number
var attemptCount = 1; //user attempt count

/* Function witch call two functions and run them after clicking on the button START GAME */
function callTwo(){
    getLvlValue();
    startGame();
}

/* This function GET A USER LEVEL and MAKE COMP RANDOM NUMBER */
function getLvlValue(){
    
    levelOfGame = document.getElementById("selectLevel").value;
    console.log(levelOfGame);

    if(levelOfGame == "10000"){
        compRandomNum = Math.floor(Math.random() * 10000);
        console.log(compRandomNum); 
    }else if(levelOfGame == "1000"){
        compRandomNum = Math.floor(Math.random() * 1000);
        console.log(compRandomNum);
    }else if(levelOfGame == "100"){
        compRandomNum = Math.floor(Math.random() * 100);
        console.log(compRandomNum);
    }
}

/* This function start a Game */
function startGame(){
    document.getElementById("startDiv").classList.add("hidden");
    document.getElementById("afterStartsDiv").classList.remove("hidden");
}

/* This function GET A USER NUMBER and show that number in the list*/
function getUserNum(){
    userNumber = document.getElementById("userNum").value;
    console.log("korisnikov br je: ",userNumber);
    console.log("Broj pokusaja je: ",attemptCount);
    checkNumbers();
    attemptCount += 1;
    showUserNumber(); //calling function for showing user number
}

function showUserNumber(){
    var div = document.createElement("div");
    var node = document.createTextNode("Try to guess the number: " + userNumber);
    div.appendChild(node);
    var element = document.getElementById("userListTryID");
    element.appendChild(div);
    var attribute = document.createAttribute("class");
    attribute.value = "triesList";
    div.setAttributeNode(attribute);
}

/* This function check if user number is equal with comp rand number */
function checkNumbers(){
    if(userNumber > compRandomNum){
        console.log("korisnikov broj je veci");
        putAttemptsNum(attemptCount);
    }else if (userNumber < compRandomNum){
        console.log("korisnikov broj je manji");
        putAttemptsNum(attemptCount);
    }else if( userNumber == compRandomNum){
        console.log("Cestitamo, pogodili ste broj!");
        putAttemptsNum(attemptCount);
    }
}

/* This function change ATTEMPT NUMBER */
function putAttemptsNum(attc){
    var numberTried = attc;
    document.getElementById("attemptNumber").innerHTML = numberTried;
}
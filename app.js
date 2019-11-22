var levelOfGame = 100; //user lvl of game
var compRandomNum; //random number from computer
var userNumber; //user number
var attemptCount = 0; //user attempt count

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
    attemptCount += 1;
    showUserNumber(); //calling function for showing user number
    checkNumbers();
}

/* This function ADD DIV-S WITH USER NUMBER*/
function showUserNumber(){
    var div = document.createElement("div");
    var br = document.createElement("br");
    var node = document.createTextNode("Your number is: " + userNumber);
    div.appendChild(node);
    var element = document.getElementById("userListTryID");
    element.appendChild(div);
    element.appendChild(br);//insert break after adding a div element
    var attribute = document.createAttribute("class");
    attribute.value = "triesList";
    div.setAttributeNode(attribute);
}

/* This function check if user number is equal with comp rand number */
function checkNumbers(){
    if(userNumber > compRandomNum){
        console.log("korisnikov broj je veci");
        putAttemptsNum(attemptCount);
        sendMessage("Higher!")
    }else if (userNumber < compRandomNum){
        console.log("korisnikov broj je manji");
        putAttemptsNum(attemptCount);
        sendMessage("Lower!")
    }else if( userNumber == compRandomNum){
        console.log("Cestitamo, pogodili ste broj!");
        putAttemptsNum(attemptCount);
        sendMessage("You WIN!")
    }
}

function sendMessage(compMessage){
    var message = compMessage;

    var div = document.createElement("div");
    var br = document.createElement("br");
    var node = document.createTextNode("" + message);
    div.appendChild(node);
    var element = document.getElementById("userListTryID");
    element.appendChild(div);
    element.appendChild(br);//insert break after adding a div element
    var attribute = document.createAttribute("class");
    attribute.value = "triesList";
    div.setAttributeNode(attribute);
}

/* This function change ATTEMPT NUMBER */
function putAttemptsNum(attc){
    var numberTried = attc;
    document.getElementById("attemptNumber").innerHTML = numberTried;
}
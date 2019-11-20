
/* Function witch call two functions and run them after clicking on the button START GAME */
function callTwo(){
    getLvlValue();
    startGame();
}

/* Function witch get a Level of playing */
function getLvlValue(){
    var value = document.getElementById("selectLevel").value;
    console.log(value);
}

/* This function start a Game */
function startGame(){
    document.getElementById("startDiv").classList.add("hidden");
    document.getElementById("afterStartsDiv").classList.remove("hidden");
}
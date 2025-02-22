let gameSeq =[];
let userSeq =[];

let btns = ["yellow","red","purple","green"]

let start = false;
let level =0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(start ==false)
    {
        console.log("game is started");
        start = true;
    }

    levelUp();
});



function gameflash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq = [];// it is done so for next level it is restart to again press all button
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randCol = btns[randIdx];
    let randbtn = document.querySelector(`.${randCol}`);
    // console.log(randIdx);
    // console.log(randCol)
    gameSeq.push(randCol);
    console.log(gameSeq);
    gameflash(randbtn);
}

function checkAns(idx){
    // console.log("current level:", level)
    //  idx = level-1;

    if(userSeq[idx]===gameSeq[idx])
    {
        if(userSeq.length === gameSeq.length)
        {
            setTimeout(levelUp, 1000)
        }
    }
    else{
        h2.innerHTML =  `GAME OVER!!! Your score is <b>${level}</b> <br>Please press any key to restart the game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        },300)
        reset();
    }
}

function btnPress(){
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length -1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click", btnPress)
}

function reset(){
    start = false;
    gameSeq =[];
    userSeq =[];
    level =0; 
}
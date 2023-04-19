/* alextade.me | All Rights Reserved. */

var runBut = document.getElementById("run");
var zariaSelect = document.getElementById("zariaselect");
var dicePlace = document.querySelector(".diceplace span");
var shootsKadran = document.getElementById("shoots");
var zariOne = document.getElementById("zarione");
var zariTwo = document.getElementById("zaritwo");
var zariThree = document.getElementById("zarithree");
var zariFour = document.getElementById("zarifour");
var sum = document.getElementById("sum");
var total = document.getElementById("total");
var restart= document.getElementById("restart");

runBut.addEventListener("click", runDice);

zariaSelect.addEventListener("change", changeZaria);

var zariaNum = 2;
var shootsNum = 0;
var zariaSum = 0;
var zariaTotal = 0;

var randomNumOne;
var randomNumTwo;
var randomNumThree;
var randomNumFour;

var zariOneClass;
var zariTwoClass;
var zariThreeClass;
var zariFourClass;

var zariaClassArray = ["zarone", "zartwo", "zarthree", "zarfour"];

var zariValue = ["zone", "ztwo", "zthree", "zfour", "zfive", "zsix"];

function changeZaria(){
    zariaNum = parseInt(zariaSelect.value);
    zariaClass = zariaClassArray[zariaNum-1];
    dicePlace.setAttribute("class", "");
    dicePlace.classList.add(zariaClass);
}

function runDice(){

    if( zariaNum == 1){

        randomNumOne = Math.floor(Math.random()*6 ) + 1;
        zariOneClass = zariValue[randomNumOne-1];
        zariOne.setAttribute("class", "");
        zariOne.classList.add(zariOneClass);

        zariaSum = randomNumOne;
        sum.innerHTML = zariaSum;
        zariaTotal += randomNumOne;
        total.innerHTML = zariaTotal;

    }else if(zariaNum == 2){

        randomNumOne = Math.floor(Math.random()*6 ) + 1;
        zariOneClass = zariValue[randomNumOne-1];
        zariOne.setAttribute("class", "");
        zariOne.classList.add(zariOneClass);

        randomNumTwo = Math.floor(Math.random()*6 ) + 1;
        zariTwoClass = zariValue[randomNumTwo-1];
        zariTwo.setAttribute("class", "");
        zariTwo.classList.add(zariTwoClass);

        zariaSum = randomNumOne + randomNumTwo;
        sum.innerHTML = zariaSum;
        zariaTotal += randomNumOne;
        zariaTotal += randomNumTwo;
        total.innerHTML = zariaTotal;

    }else if(zariaNum == 3){

        randomNumOne = Math.floor(Math.random()*6 ) + 1;
        zariOneClass = zariValue[randomNumOne-1];
        zariOne.setAttribute("class", "");
        zariOne.classList.add(zariOneClass);

        randomNumTwo = Math.floor(Math.random()*6 ) + 1;
        zariTwoClass = zariValue[randomNumTwo-1];
        zariTwo.setAttribute("class", "");
        zariTwo.classList.add(zariTwoClass);

        randomNumThree = Math.floor(Math.random()*6 ) + 1;
        zariThreeClass = zariValue[randomNumThree-1];
        zariThree.setAttribute("class", "");
        zariThree.classList.add(zariThreeClass);

        zariaSum = randomNumOne + randomNumTwo + randomNumThree;
        sum.innerHTML = zariaSum;
        zariaTotal += randomNumOne;
        zariaTotal += randomNumTwo;
        zariaTotal += randomNumThree;
        total.innerHTML = zariaTotal;
        
    }else if(zariaNum == 4){
        
        randomNumOne = Math.floor(Math.random()*6 ) + 1;
        zariOneClass = zariValue[randomNumOne-1];
        zariOne.setAttribute("class", "");
        zariOne.classList.add(zariOneClass);

        randomNumTwo = Math.floor(Math.random()*6 ) + 1;
        zariTwoClass = zariValue[randomNumTwo-1];
        zariTwo.setAttribute("class", "");
        zariTwo.classList.add(zariTwoClass);

        randomNumThree = Math.floor(Math.random()*6 ) + 1;
        zariThreeClass = zariValue[randomNumThree-1];
        zariThree.setAttribute("class", "");
        zariThree.classList.add(zariThreeClass);

        randomNumFour = Math.floor(Math.random()*6 ) + 1;
        zariFourClass = zariValue[randomNumFour-1];
        zariFour.setAttribute("class", "");
        zariFour.classList.add(zariFourClass);

        zariaSum = randomNumOne + randomNumTwo + randomNumThree + randomNumFour;
        sum.innerHTML = zariaSum;
        zariaTotal += randomNumOne;
        zariaTotal += randomNumTwo;
        zariaTotal += randomNumThree;
        zariaTotal += randomNumFour;
        total.innerHTML = zariaTotal;

    }

    shootsNum ++;

    shootsKadran.innerHTML = shootsNum;
}

restart.addEventListener("click",function(){zariaSum=0,sum.innerHTML=zariaSum,zariaTotal=0,total.innerHTML=zariaTotal,shootsNum=0,shootsKadran.innerHTML=shootsNum});
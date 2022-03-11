// import {
//     spawnSpinningDonut,
// } from "./particle.js";
import {
    ClickCounter
} from "./ClickCounter.js";

let autoClick =0 ;
let multiplierClick = 0;
let multiplier = 1.2;
let power = 0;
let autoClickerCost = 100;
let multiplierCost = 10;
let priceMultiplier = .10;
let donutCount = Math.pow(multiplier,power)
let value = 0;

let autoClickerCostTotal = autoClickerCost%priceMultiplier;
console.log(ClickCounter)

const clickerEl = document.querySelector('.clicker');
const autoClickerEl=document.querySelector('#purchaseAutoClicker');
const multiplierEl = document.querySelector('#purchaseMultipliers');
const resetEl = document.querySelector('.resetbtn');

resetEl.addEventListener('click', ()=>{
    autoClick = 0;
    autoClickerCost = 100;
    multiplierCost = 10;
    multiplierClick =0;
    donutCount = 0;
    power=0
    priceMultiplier=.10
    multiplier =1.2
    

    updateDash();
})

clickerEl.addEventListener('click', ()=>{
    donutCount += Math.pow(multiplier,power)
    // spawnSpinningDonut;
    updateDash();
})

autoClickerEl.addEventListener('click',()=>{
    if(donutCount >= autoClickerCost){
        donutCount = donutCount-autoClickerCost;
        autoClick = autoClick +1;
        autoClickerCost += Math.floor((autoClickerCost * 0.10));
        updateDash();
    }
})
multiplierEl.addEventListener('click', () =>{
    if(donutCount >= multiplierCost){
        donutCount = donutCount - multiplierCost;
        multiplierClick = multiplierClick+1;
        multiplierCost += Math.round(multiplierCost*priceMultiplier);
        power++;
        donutCount+=value;
        priceMultiplier+=.10;
        updateDash()
    }
})
function timer() {
    donutCount = donutCount + autoClick;
    donutCount = donutCount + multiplierClick;
    updateDash()
};

setInterval(timer, 1000)


function updateDash() {

    document.querySelector('.donut').value = Math.floor(donutCount)
    document.querySelector('.donut').innerHTML = Math.floor(donutCount);
    
    document.title = Math.floor(donutCount) + "  Donuts";

    document.querySelector('.numberOfAutoClicker').innerHTML = "You Have " + autoClick + " Auto Clickers.";

    document.querySelector('.costOfAutoClicker').innerHTML = "Cost: " + autoClickerCost + " Donuts";

    document.querySelector('.priceMultiplier').innerHTML = "Cost: " + multiplierCost + " Donuts";

    document.querySelector('.numberOfMultipliers').innerHTML = "You Have " + multiplierClick + " Multipliers.";
   

    document.querySelector("#purchaseAutoClicker").style.backgroundColor = (donutCount < 100) ? "gray" : "white";
    document.querySelector("#purchaseMultipliers").style.backgroundColor = (donutCount < 10) ? "gray" : "white";

    document.querySelector('.donutsPerSecond').innerHTML = Math.floor((autoClick+multiplierClick)) + " donuts per second";
}
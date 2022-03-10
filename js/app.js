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
let autoClickerCost = 10;
let multiplierCost = 15;
let priceMultiplier = .10;
let donutCount = Math.pow(multiplier,power)
let value = 0;

let autoClickerCostTotal = autoClickerCost%priceMultiplier;
console.log(ClickCounter)

const clickerEl = document.querySelector('.clicker');
const autoClickerEl=document.querySelector('#purchaseAutoClicker');
const multiplierEl = document.querySelector('#purchaseMultipliers');


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
   

    document.querySelector("#purchaseAutoClicker").innerHTML = (donutCount < 100) ? "Buy Auto Clicker" : "Buy Auto Clicker";
    document.querySelector("#purchaseMultipliers").innerHTML = (donutCount < 25)? "Buy Auto Multiplier" : "Buy Auto Multiplier";

    document.querySelector('.donutsPerSecond').innerHTML = Math.floor(((autoClick+multiplierClick) * multiplier)) + " donuts per second";
}
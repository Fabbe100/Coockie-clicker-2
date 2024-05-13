let countCookies = document.getElementById('coockies'); // Corrected ID name
let btnCookie = document.getElementById('cclicker'); // Corrected ID name
let upgradeBtn = document.getElementById('doubble');
let myuppgrade = document.getElementById('uppgrade');
let upgradeCostSpan = document.getElementById('upgradeCost');
let coursorBtn = document.getElementById('coursor');
let uccoursorSpan = document.getElementById('uccoursor');

let count = 0;
let doubleEnabled = false;
let cursorRate = 0.2;
let coockiesPerSecond = 0;

btnCookie.addEventListener('click', cookieIncrement);
let upgradeLevel = 1;

btnCookie.addEventListener('click', cookieIncrement);
upgradeBtn.addEventListener('click', upgradeIncrement);
coursorBtn.addEventListener('click', cursorAdd)

function cookieIncrement() {
    count += upgradeLevel;
    count = parseFloat(count.toFixed(1)); // Round the count to 1 decimal place
    countCookies.innerHTML = "Kakor : " + count;
}

function upgradeIncrement() {
    let upgradeCost = parseInt(upgradeCostSpan.textContent);
    let newUpgradeCost = upgradeCost * 1.5; // Calculate the new upgrade cost

    if (count >= upgradeCost) {
        upgradeLevel++; 
        myuppgrade.innerHTML = "Coockies per click : " + upgradeLevel;
        count -= upgradeCost; 
        countCookies.innerHTML = "Kakor : " + count;
        upgradeCostSpan.textContent = newUpgradeCost; 
        
    }
}

function cursorAdd() {
    let cursorCost = parseInt(uccoursorSpan.textContent);
    let newCursorCost = cursorCost * 1.5; 

    if (count >= cursorCost) {
        count -= cursorCost;
        countCookies.innerHTML = "Kakor: " + count.toFixed(1); 

        
        setInterval(function() {
            count += cursorRate;
            count = Math.round(count * 10) / 10; 
            countCookies.innerHTML = "Kakor: " + count.toFixed(1);
        }, 1000);
        
        uccoursorSpan.textContent = newCursorCost;
        coockiesPerSecond += cursorRate; 
        document.getElementById("coockiespsek").textContent = "Coockies per Second : " + coockiesPerSecond.toFixed(1);
    }
}
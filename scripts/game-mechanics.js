let upgradeCost = 100;
let upgradeAutoclickerCost = 50;
let upgradeWorkerCost = 1000;
let score = 0;
let pointsPerClick = 1;
let interval;
let addPerInterval = 0;
let workers = 0;
let otroku = 0;


const scoreElement = document.getElementById('score');
const clickerButton = document.getElementById('clicker');
const upgradeButton = document.getElementById('upgrade');
const upgradeLabel = document.getElementById('upgrade-p');
const upgradeButtonAutoclicker = document.getElementById('autoclicker-upgrade');
const upgradeLabelAutoclicker = document.getElementById('autoclicker-upgrade-p');
const upgradeButtonWorker = document.getElementById('worker-upgrade');
const upgradeLabelWorker = document.getElementById('worker-upgrade-p');

upgradeButton.textContent = upgradeCost;
upgradeButtonAutoclicker.textContent = upgradeAutoclickerCost;
upgradeButtonWorker.textContent = upgradeWorkerCost;

clickerButton.addEventListener('click', () => {
    score += pointsPerClick;
    scoreElement.textContent = score;
    checkupgrades();
});

upgradeButton.addEventListener('click', () => {
    score -= upgradeCost;
    pointsPerClick *= 2;
    upgradeCost *= 2;
    upgradeLabel.textContent = 'NÁSOBIČ (' + pointsPerClick + 'x)';
    upgradeButton.textContent = upgradeCost;
    scoreElement.textContent = score;
    checkupgrades();
});

upgradeButtonAutoclicker.addEventListener('click', () => {
    score -= upgradeAutoclickerCost;
    otroku += 1;
    upgradeAutoclickerCost *= 2;
    upgradeLabelAutoclicker.textContent = 'OTROCI (' + otroku + ')';
    upgradeButtonAutoclicker.textContent = upgradeAutoclickerCost;
    scoreElement.textContent = score;
    checkupgrades();
    intervalupdate(3);
});

upgradeButtonWorker.addEventListener('click', () => {
    score -= upgradeWorkerCost;
    workers += 1;
    upgradeWorkerCost *= 2;
    upgradeLabelWorker.textContent = 'BRIGÁDNÍCI (' + workers + ')';
    upgradeButtonWorker.textContent = upgradeWorkerCost;
    scoreElement.textContent = score;
    checkupgrades();
    intervalupdate(15);
});

function checkupgrades(){
    if (score >= upgradeCost) {
        upgradeButton.disabled = false;
    }
    else {
        upgradeButton.disabled = true;
    }

    if (score >= upgradeAutoclickerCost) {
        upgradeButtonAutoclicker.disabled = false;
    }
    else {
        upgradeButtonAutoclicker.disabled = true;
    }

    if (score >= upgradeWorkerCost) {
        upgradeButtonWorker.disabled = false;
    }
    else {
        upgradeButtonWorker.disabled = true;
    }
}

function intervalupdate(addToInterval) {
    addPerInterval += addToInterval;
    if (interval != null) {}
    else {
        interval = setInterval (() => {
            score += addPerInterval;
            scoreElement.textContent = score;
            checkupgrades();
        }, 1000);
    }
}
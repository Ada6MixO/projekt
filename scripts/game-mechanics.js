let score = 0;
let pointsPerClick = 1;
let upgradeCost = 100;
let upgradeAutoclickerCost = 50;
let otroku = 0;
let intervalOtroci;
let upgradeWorkerCost = 1000;
let workers = 0;
let intervalWorkers;

const scoreElement = document.getElementById('score');
const clickerButton = document.getElementById('clicker');
const upgradeButton = document.getElementById('upgrade');
const upgradeLabel = document.getElementById('upgrade-p');
const upgradeButtonAutoclicker = document.getElementById('autoclicker-upgrade');
const upgradeLabelAutoclicker = document.getElementById('autoclicker-upgrade-p');
const upgradeButtonWorker = document.getElementById('worker-upgrade');
const upgradeLabelWorker = document.getElementById('worker-upgrade-p');

clickerButton.addEventListener('click', () => {
    score += pointsPerClick;
    scoreElement.textContent = score;
    checkupgrades();
});

upgradeButton.addEventListener('click', () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        pointsPerClick *= 2;
        upgradeCost *= 5;
        upgradeLabel.textContent = 'NÁSOBIČ (' + pointsPerClick + 'x)';
        upgradeButton.textContent = upgradeCost;
        scoreElement.textContent = score;
        checkupgrades();
    }
});

upgradeButtonAutoclicker.addEventListener('click', () => {
    if (score >= upgradeAutoclickerCost) {
        score -= upgradeAutoclickerCost;
        otroku += 1;
        upgradeAutoclickerCost += 50;
        upgradeLabelAutoclicker.textContent = 'OTROCI (' + otroku + ')';
        upgradeButtonAutoclicker.textContent = upgradeAutoclickerCost;
        scoreElement.textContent = score;
        checkupgrades();
        if (intervalOtroci) {
            clearInterval(intervalOtroci);
            intervalOtroci = null;
        }
        intervalOtroci = setInterval(() => {
            score += otroku;
            scoreElement.textContent = score;
            checkupgrades();
        }, 1000);
    }
});

upgradeButtonWorker.addEventListener('click', () => {
    score -= upgradeWorkerCost;
    workers += 1;
    upgradeWorkerCost *= 1.5;
    upgradeLabelWorker.textContent = 'BRIGÁDNÍCI (' + workers + ')';
    upgradeButtonWorker.textContent = upgradeWorkerCost;
    scoreElement.textContent = score;
    checkupgrades();
    if (intervalWorkers) {
        clearInterval(intervalWorkers);
        intervalWorkers = null;
    }
    intervalWorkers = setInterval(() => {
        score += workers*15;
        scoreElement.textContent = score;
        checkupgrades();
    }, 1000);
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
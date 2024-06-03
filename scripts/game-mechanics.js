let score = 0;
let pointsPerClick = 1;
let upgradeCost = 100;
let upgradeAutoclickerCost = 100;
let otroku = 0;

const scoreElement = document.getElementById('score');
const clickerButton = document.getElementById('clicker');
const upgradeButton = document.getElementById('upgrade');
const upgradeButtonContent = document.getElementById('upgrade-button-content');
const upgradeButtonAutoclicker = document.getElementById('autoclicker-upgrade');
const upgradeButtonAutoclickerContent = document.getElementById('upgrade-autoclicker-button-content');

clickerButton.addEventListener('click', () => {
    score += pointsPerClick;
    scoreElement.textContent = score;
});

upgradeButton.addEventListener('click', () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        pointsPerClick *= 2;
        upgradeCost *= 5;
        upgradeButtonContent.textContent = '(' + pointsPerClick + 'x) NÁSOBIČ ' + upgradeCost;
        scoreElement.textContent = score;
    }
});

upgradeButtonAutoclicker.addEventListener('click', () => {
    if (score >= upgradeAutoclickerCost) {
        score -= upgradeAutoclickerCost;
        scoreElement.textContent = score;
        otroku += 1;
        upgradeAutoclickerCost += 100;
        upgradeButtonAutoclickerContent.textContent = '(' + otroku + ') OTROK ' + upgradeAutoclickerCost;
        setInterval(() => {
            score += otroku;
            scoreElement.textContent = score;
        }, 1000);
    }
});
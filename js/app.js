document.addEventListener('DOMContentLoaded', function() {
    let tg = window.Telegram?.WebApp;
    if (tg) {
        tg.expand();
    }
    initChart();
    calculateReturns(0.01);
});

let returnsChart;
let currentCurrency = 'BNB';
let bnbPrice = 500;

/* Rest of the JavaScript from the script tag in staking.html */
let h1 = document.getElementById('h1');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
let hun = 25;
let byou = 0;
let timerId = null;
let TimerPos = false;

button1.addEventListener('click', function() {

    timerId = setInterval(updateTimer, 1000);


});

function updateTimer() {

    if(byou === 0) {

        hun--;
        byou = 59;
    } else{
        byou--;
    };
   
    let Disbyou = byou < 10 ? "0" = byou : byou;
    let Dishun = hun < 10 ? "0" = hun : hun;
    h1.innerText = Disbyou + ":" + Dishun;

    if(hun ===0 && byou === 0) {

        alert('終了です！！');
        stopTimer();
        return;
    }
};

function stopTimer() {

    timerPos = false;
    //timerId = clearInterval(updateTimer);
    clearInterval(timerId);
};




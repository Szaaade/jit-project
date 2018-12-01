const time = {
    sec: 0,
    min: 0
}

let startButton = document.querySelector('.startButton');
let resetButton = document.querySelector('.resetButton');
let x = 1;



function startTime() {

    if (x) interval = setInterval(updateTime, 1000)
    else 
    {
        clearInterval(interval);
    }
    let selector = document.querySelector('.startButton');
    if (x) {
        selector.innerHTML = "Stop";
        x = !x;
    }
    else {
        selector.innerHTML = "Start";
        x = !x;
    }
}

function resetTime() {
    time.min = 0;
    time.sec = 0;
    clearInterval(interval);
    let selector = document.querySelector('.time');
    selector.innerHTML = time.min + ":0" + time.sec;
}

function updateTime() {

    time.sec++;
    let selector = document.querySelector('.time')
    if (time.sec < 10) selector.innerHTML = time.min + ':0' + time.sec;
    else selector.innerHTML = time.min + ':' + time.sec;
    if (time.sec == 60) {
        time.sec = 0;
        time.min++;
    }

}

startButton.addEventListener('click', startTime);
resetButton.addEventListener('click', resetTime);
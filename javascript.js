let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];     //Initilized values

let timeRef = document.querySelector(".timer-display");
let int = null;

// Clearing-time-intervels
document.getElementById("start").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000";
});


// display_timer_function
function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
            seconds++
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;               //for hours
    let m = minutes < 10 ? "0" + minutes : minutes;         //for minutes
    let s = seconds < 10 ? "0" + seconds : seconds;         //for seconds
    let ms =
        milliseconds < 10
            ? "00" + milliseconds
            : milliseconds < 100
            ? "0" + milliseconds
            : milliseconds;

    // for hours minutes secounds milliseconds change
    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;      
}

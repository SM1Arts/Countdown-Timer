let endDate = new Date("1 Jan, 2025 15:45:00").getTime();
let startDate = new Date().getTime();


let x = setInterval(function updateTime() {
    let now = new Date().getTime();
    let distanceCovered = now - startDate;
    let distancePending = endDate - now;

    // calculate days,hrs,mins,secs
    // 1 day = 24 * 60 * 60 * 1000 ms

    // oneDayInMillis = 24 * 60 * 60 * 1000 
    // oneHourInMillis = 60 * 60 * 1000
    // oneMinuteInMillis = 60 * 1000
    // oneSecondInMillis = 1000

    const days = Math.floor(distancePending/(24 * 60 * 60 * 1000));
    const hrs = Math.floor(distancePending%(24 * 60 * 60 * 1000) / (60 * 60 * 1000));
    const mins = Math.floor(distancePending%(60 * 60 * 1000) / (60 * 1000));
    const secs = Math.floor(distancePending%(60 * 1000) / (1000));

    // populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    // calculating width percentage for progress bar
    let totalDistance = endDate - startDate;
    let widthPercentage = Math.ceil((distanceCovered/totalDistance) * 100);

    // set width for progress bar
    document.getElementById("progress-bar").style.width = widthPercentage + "%";

    if(distancePending < 0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED....";
        document.getElementById("progress-bar").style.width = "100%";
    }

},1000);
////////////////////////////////////////////////////
//// Project Name: StopWatch in gradient color  ////
//// Developer Name: Danish Kamal               ////
//// Date : 04/12/2021 time-taken: 2hour        ////
////////////////////////////////////////////////////

var hour = 0, minute = 0, second = 0, count = 0, timer = false;
// fucntion for start button
function start(){
    timer = true;
    stopwatch();
}
// fucntion for stop button
function stop(){
    timer = false;
}
// fucntion for reset button
function reset(){
    // when click reset then all value will be zero
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}
function stopwatch(){
    if(timer == true){
        count = count + 1;

        if(count == 100){
            second = second + 1;
            count = 0;
        }

        if(second == 60){
            minute = minute + 1;
            second = 0;
        }

        if(minute == 60){
            hour = hour + 1;
            minute = 0;
            second = 0;
        }
        
        // add zero string when value less than < 10
        var hrStr = hour;
        var minStr = minute;
        var secStr = second;
        var countStr = count;
        if(hour < 10){
            hrStr = "0" + hrStr;
        }
        if(minute < 10){
            minStr = "0" + minStr;
        }
        if(second < 10){
            secStr = "0" + secStr;
        }
        if(count < 10){
            countStr = "0" + countStr;
        }
        

        document.getElementById("hr").innerHTML = hrStr;
        document.getElementById("min").innerHTML = minStr;
        document.getElementById("sec").innerHTML = secStr;
        document.getElementById("count").innerHTML = countStr;
        setTimeout("stopwatch()", 10);
    }
}
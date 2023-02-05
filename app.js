

var Dmin = document.getElementById('Dmin');
var Dsec = document.getElementById('Dsec');
var Dmsec = document.getElementById('Dmsec');
var startbt = document.getElementById('start');
var pausebt = document.getElementById('pause');
var resetbt = document.getElementById('reset');
var min = 0;
var sec = 0;
var msec = 0;
var interval;
function timer(){
    msec++
    Dmsec.innerHTML = msec;
    if(msec === 9){
        sec++
        msec=0
        Dsec.innerHTML= sec;
    }
    if(sec == 59){
        min++
        sec=0
        msec=0
        Dmin.innerHTML = min;
    }
}
function start(){
    interval = setInterval(timer,100) 
    startbt.setAttribute('disabled','disabled')
    pausebt.disabled = false;
    resetbt.disabled = false;
}
function pause(){
    clearInterval(interval)
    pausebt.setAttribute('disabled','disabled')
    startbt.disabled = false;
    resetbt.disabled = false;
}
function reset(){
    pause()
    startbt.disabled = false;
    pausebt.setAttribute('disabled','disabled')
    resetbt.setAttribute('disabled','disabled')
    min=00
    sec=00
    msec=00
    Dmin.innerHTML = min;
    Dsec.innerHTML= sec;
    Dmsec.innerHTML = msec;
}
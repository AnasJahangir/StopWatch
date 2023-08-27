
var getMin = document.getElementById("min");
var getSec = document.getElementById("sec");
var getMilisec = document.getElementById("milisec");

var btnStart =  document.getElementById("btnStart");
var btnStop =  document.getElementById("btnStop");
var btnReset =  document.getElementById("btnReset");

var colorSame = "#f3ca20";
var colorActiv = "#d2a216"


var mint = 0;
var sec = 0;
var milisec = 0;
var timeStop;


function start() {
    timeStop = setInterval(function () {
    milisec++


    if(milisec >= 10 ){
    getMilisec.innerHTML =  milisec
    }else{
    getMilisec.innerHTML = '0'+ milisec
    }

    if (milisec >= 60) {
        milisec = "0"+0;
        getMilisec.innerHTML = milisec
        sec++
       
    }

    if(sec > 9 ){
        getSec.innerHTML =  sec
    }else{
        getSec.innerHTML = "0" +sec
    }

    
    if (sec > 60) {
        sec = 0;
        getSec.innerHTML = sec
        mint++
    }

    if(mint >= 10 ){
        getMin.innerHTML =  mint
    }else{
        getMin.innerHTML = "0"+mint
    }
     
    if (mint > 60) {
        mint = 0;
        getMin.innerHTML = mint

        
    }
   
},16.66666666)
btnStart.disabled = true
btnStart.style.background = colorActiv;
btnStop.style.background = colorSame;
btnReset.style.background = colorSame;

}

function stop() {
    clearInterval(timeStop)
    btnStart.disabled = false
    btnStart.style.background = colorSame;
    btnStop.style.background = colorActiv;
    btnReset.style.background = colorSame;
}

function reset() {
    clearInterval(timeStop)
    mint =0;
    sec =0;
    milisec =0;

    getMilisec.innerHTML = "00"
    getSec.innerHTML = "00"
    getMin.innerHTML = "00"
    btnStart.disabled = false
    btnStart.style.background = colorSame;
    btnStop.style.background = colorSame;
    btnReset.style.background = colorActiv;
}

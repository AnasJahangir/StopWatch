
var getMin = document.getElementById("min");
var getSec = document.getElementById("sec");
var getMilisec = document.getElementById("milisec");

var btnStart =  document.getElementById("btnStart");

var mint =0;
var sec =0;
var milisec =0;
var timeStop;


function start() {
    timeStop = setInterval(function () {
    milisec++


    if(milisec > 10 ){
    getMilisec.innerHTML =  milisec
    }else{
    getMilisec.innerHTML = '0'+ milisec
    }

    
    

    if (milisec >= 100) {
        milisec = 0;
        getMilisec.innerHTML = milisec
        sec++
       
    }

    if(sec > '9' ){
        getSec.innerHTML =  sec
    }else{
    getSec.innerHTML = "0" +sec
    }

    
    if (sec >= 60) {
        sec = 0;
        getSec.innerHTML = sec
        mint++
    }

    if(mint > 9 ){
        getMin.innerHTML =  mint
    }else{
        getMin.innerHTML = "0" +mint
    }

   
},10)
btnStart.disabled = true
}

function stop() {
    clearInterval(timeStop)
    btnStart.disabled = false
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
}

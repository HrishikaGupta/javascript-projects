// var d=new Date();
// var newDate=d.toLocaleTimeString();
var newDate;
const extractHour=()=>{
    var onlyHour=newDate.replace(/:\d+:\d+/,'').replace("PM",'').replace("AM",''); 
    
    return onlyHour;
}

const extractMin=()=>{
    var noHour=newDate.replace(/\d+:/,'');
    var noHourNoSec=noHour.replace(/:\d+/,'').replace("PM",'').replace("AM",'');
    return noHourNoSec;
}

const extractSec=()=>{
    var onlySec=newDate.replace(/\d+:\d+:/,'').replace("PM",'').replace("AM",'');
    return onlySec;
}

const extractAMPM=()=>{
    var ampm=newDate.replace(/\d+:\d+:\d+/,'');
    return ampm;
}

const setclock=()=>{ 
    var d=new Date();
    newDate=d.toLocaleTimeString();  
    document.getElementById("showHour").innerHTML=extractHour();
    document.getElementById("showMin").innerHTML=extractMin();
    document.getElementById("showSec").innerHTML=extractSec();
    document.getElementById("showAMPM").innerHTML=extractAMPM();
}

const stop=()=>{
    clearInterval(time)
}

const reload=()=>{
    location.reload();
}
document.getElementById("stopClock").addEventListener('click',stop)
document.getElementById("startClock").addEventListener('click',reload)

var time=setInterval(setclock,1000)

//return localeSpecificTime.replace(/:\d+ /, ' ');
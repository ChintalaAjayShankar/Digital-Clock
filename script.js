let Hours = document.getElementById("hours");
let Minutes = document.getElementById("minutes");
let Seconds = document.getElementById("seconds");
let Format = document.getElementById("format");

function update_TimeRanges(){
    let hours1 = new Date().getHours();
    let minutes1 = new Date().getMinutes();
    let seconds1 = new Date().getSeconds();
    
    if(hours1>=12){
        hours1=hours1-12;
        Format.innerHTML="PM";
    }else{
        Format.innerHTML="AM";
    }
    if(hours1<10){
        hours1="0"+hours1;
    }
    if(minutes1<10){
       minutes1 ="0"+minutes1;
    }
    if(seconds1<10){
        seconds1="0"+seconds1;
    }

    Hours.innerText=hours1;
    Minutes.innerHTML=minutes1;
    Seconds.textContent=seconds1;
}
update_TimeRanges();
setInterval(function(){
    update_TimeRanges()
},1000);



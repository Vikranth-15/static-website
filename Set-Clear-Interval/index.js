let setIntervalBtn=document.getElementById("setIntervalBtn");

let clearIntervalBtn=document.getElementById("clearIntervalBtn");

let uniqueId=null;
setIntervalBtn.onclick =function(){
    let counter=0;
    uniqueId=setInterval(function(){
        console.log(counter)
        counter++;
    },1000);
}

clearIntervalBtn.onclick = function(){
    clearInterval(uniqueId);
}
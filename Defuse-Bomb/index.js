let timerEl=document.getElementById("timer");
let countDown=10;

let defuserEl=document.getElementById("defuser");


let interValId=setInterval(function(){
    countDown=countDown-1;
    timerEl.textContent=countDown;
    if(countDown==0){
        timerEl.textContent="Boom ";
        clearInterval(interValId);
    }
},1000);

defuserEl.addEventListener("keydown",function(event){
    let bombDefuserText=defuserEl.value;
   if(event.key==="Enter" && bombDefuserText==="defuse" && countDown!==0){
    timerEl.textContent="You Did it!";
    clearInterval(interValId);
   }
})
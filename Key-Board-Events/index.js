let inputEl = document.createElement("input");

function printKeyDown(event) {
    console.log("Key pressed");
    console.log(event.type);   //Event Type ---Key Pressed 
      console.log(event.target);        //Event target --- on which element 
        console.log(event.key);
}

inputEl.addEventListener("keydown", printKeyDown);

document.body.appendChild(inputEl);

let inputEl = document.createElement("input");

function printKeyDown() {
    console.log("Key pressed");
}

inputEl.addEventListener("keydown", printKeyDown);

document.body.appendChild(inputEl);

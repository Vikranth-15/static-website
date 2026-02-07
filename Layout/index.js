const bgContainer = document.querySelector(".bg-container");

const images = [
    "https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?s=2048x2048&w=is&k=20&c=ag2x3CMXKVCYmLMNYy_EoD5QMd5HUyotfzx4BgXhaGQ=",
    ""
];

let currIndex=0;


function changeImage() {
currIndex=(currIndex+1)%images.length;

  bgContainer.style.backgroundImage = `url("${images[currIndex]}")`;
}
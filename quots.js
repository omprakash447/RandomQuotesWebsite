let container = document.getElementById("container");
let navbar = document.getElementById("navbar");
let dots = document.getElementById("dots");
let dots1 = document.getAnimations("dots1");
let dotx = document.getElementById("dotsx");
let container2 = document.getElementById("container2");
let btn = document.getElementById("btn");
let body = document.querySelector("body");
let container3 = document.getElementById("container3");
let btnclick = document.getElementById("btnclick");
let container4 = document.getElementById("container4");
let box = document.getElementById("box");
let main = document.getElementById("main");








dots.addEventListener("click", function() {
    navbar.classList.add("navbaractive");
    dots.style.display = "none";
    dotx.style.display = "block";
    container2.style.display = "none";


})
dotx.addEventListener("click", function() {
    navbar.classList.remove("navbaractive");
    dotx.style.display = "none";
    dots.style.display = "block";
    container2.style.display = "block"
})
btn.addEventListener("click", function() {
    container3.style.display = "block";
    container.classList.add("container1");
    container2.style.display = "none";
    dots.style.display = "none";


})
btnclick.addEventListener("click", function() {
    container4.style.display = "block";
    container4.style.position = "absolute";
    container4.style.top = "50%";
    container4.style.left = "50%";
    main.style.display = "flex";
    main.style.justifyContent = "center";
    main.style.alignItems = "center";
    box.style.marginLeft = "20%";
    box.style.marginTop = "100px";
    btn4.style.marginTop = "50px"
    dots.style.display = "none"



})







let arrobj = [{
    photo: "https://th.bing.com/th/id/OIP.S-c58EfAVuxTs_TWqw62-gAAAA?rs=1&pid=ImgDetMain",
    text: "Generate"
}, ];


function displaythings() {
    let divstring = ``;
    for (var i = 0; i < arrobj.length; i++) {
        divstring = divstring + `

    <div class="quotbox">
        <img src="${arrobj[i].photo}" alt="">
        <button id="btnclick">${arrobj[i].text}</button>
    </div>
    `
    }
    document.getElementById("container3").innerHTML = divstring;
}
// displaythings();







// jokes api

let space = document.getElementById("space");
let btn4 = document.getElementById("btn4");







btn4.addEventListener("click", function() {


    let api = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";





    fetch(api)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            space.textContent = `${data.joke}`
        })
        .catch(function(error) {
            console.log("New error...");
        });

})
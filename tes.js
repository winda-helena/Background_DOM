const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");

color1.addEventListener("change", event => {
    document.body.style.backgroundColor = color1.value;
});

color2.addEventListener("change", event =>{
    document.body.style.color = color2.value;
});
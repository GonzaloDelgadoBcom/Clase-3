function pintar(elemento) {
    elemento.style.backgroundColor = 'yellow';
}

const ele1 = document.getElementById("ele1");
ele1.addEventListener("click", function() {
    pintar(ele1);
});
const coloresDivs = {
    'a': 'Rosado',
    's': 'Naranjo',
    'd': 'Celeste',
    'q': 'Morado',
    'w': 'Gris',
    'e': 'Café'
};

const divColores = document.querySelectorAll('.divColor');
const divKey = document.getElementById('key');

divColores.forEach(div => {
    div.addEventListener('click', () => {
        div.style.backgroundColor = 'black';
    });
});

document.addEventListener('keydown', (event) => {
    const tecla = event.key.toLowerCase();
    if (coloresDivs.hasOwnProperty(tecla)) {
        divKey.style.backgroundColor = coloresDivs[tecla];
    } else if (tecla === ' ') {
        crearDivNuevo();
    }
});

function crearDivNuevo() {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.classList.add('divColor');
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.margin = '10px';
    nuevoDiv.style.border = '1px solid black';
    nuevoDiv.style.backgroundColor = getRandomColor();

    const contenedor = document.getElementById('contenedor');
    contenedor.appendChild(nuevoDiv);

    nuevoDiv.addEventListener('click', () => {
        nuevoDiv.style.backgroundColor = 'black';
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
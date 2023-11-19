// Sección N°1: Modificación de borde de imagen
const imagen = document.querySelector('#image-sec-1');
const secImagen = document.querySelector('.image-border-main');

imagen.addEventListener('click', () => {
    imagen.classList.toggle('image-click');
    secImagen.classList.toggle('image-border-main-2');
})

// Sección N°2: Stickers
const parrafo = document.querySelector('#p-output');
const btn = document.querySelector('#button-sticker');
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const input3 = document.getElementById('input-3');


btn.addEventListener('click', function () {

    if (input1.value == '' || input2.value == '' || input3.value == '') {
        parrafo.innerHTML = 'Debes seleccionar una cantidad para cada Sticker';
    }

    else {
        const suma = parseInt(input1.value) + parseInt(input2.value) + parseInt(input3.value);

        if (suma <= 10 && suma > 0) {
            parrafo.innerHTML = 'Buena elección, llevas ' + suma + ' stickers.';
        }
        else if (suma > 10) {
            parrafo.innerHTML = 'Te estás excediendo!, tienes que elegir máximo 10 stickers.';
        }
        else {
            parrafo.innerHTML = 'Has ingreasdo 0 stickers';
        }
    }
})

// Sección N°3: 
const btnPass = document.querySelector('#button-pass');
const parrafoPass = document.querySelector('#p-pass');
const digit1 = document.getElementById('digit-1');
const digit2 = document.getElementById('digit-2');
const digit3 = document.getElementById('digit-3');

btnPass.addEventListener('click', function () {
    const passEnter = parseInt(digit1.value + digit2.value + digit3.value);

    if (passEnter === 911) {
        parrafoPass.innerHTML = 'Password 1 es correcta';
    }

    else if (passEnter === 714) {
        parrafoPass.innerHTML = 'Password 2 es correcta';
    }

    else {
        parrafoPass.innerHTML = 'Password incorrecta';
    }
})


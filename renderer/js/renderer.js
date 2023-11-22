const form = document.querySelector('#img-form');
const img = document.querySelector('#img');
const outputPath = document.querySelector('#output-path');
const filename = document.querySelector('#filename');
const heightInput = document.querySelector('#height');
const widthInput = document.querySelector('#width');

function loadImage(e) {
    const file = e.target.files[0];
}

//Make sure file is Image
function isFileImage(file) {
    const acceptedImage = ['image/gif' , 'image/png' , 'image ']
}
img.addEventListener('change', loadImage);
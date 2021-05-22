//llame todos los id de header y main
//con getelementby llamo a los elementos del id
//con queryselector extraigo la info del body
const btnOscuro = document.getElementById('button-dark-appearance');
const textTheme = document.getElementById('text-theme');
const appName = document.getElementById('app-name');
const btnsContainer = document.getElementById('btns-container');
const btnImg = document.getElementById('btn-img');
const btnTxt = document.getElementById('btn-txt');
const myMain = document.getElementById('my-main');
const panelAsideImg = document.getElementById('panel-aside-img');
const panelAsideTxt = document.getElementById('panel-aside-txt');
const body = document.querySelector('body');
const imgMeme = document.getElementById('imgMeme'); //esto esta en el main

btnOscuro.addEventListener('click', () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  if (body.classList.contains("dark")) {
    textTheme.innerText = "Modo Claro"
  } else {
    textTheme.innerText = "Modo Oscuro"
  }
})


// ESTA FUNCIÓN ES PARA QUE EL ASIDE TEXTO APAREZCA
const panelAsideTexto = document.getElementById('panel-aside-txt')
panelAsideTexto.style = 'display: none'
btnTxt.addEventListener('click', () => {
  panelAsideTexto.style = 'display: inline'
  panelAsideImg.style = 'display: none'
})

// ESTA FUNCIÓN ES PARA QUE EL ASIDE DE LA IMAGEN APAREZCA

panelAsideImg.style = 'display: inline'
btnImg.addEventListener('click', () => {
  panelAsideImg.style = 'display: inline'
  panelAsideTexto.style = 'display: none'
})

//BOTÓN PARA DESCARGAR EL MEME
const contenedorMeme = document.getElementById('editorContent')//traigo el elemento del ID del div del main en el index
const botonDescarga = document.getElementById('btnDownload');
botonDescarga.addEventListener('click', () =>{
  domtoimage.toBlob(contenedorMeme)//toblob recibe tipo de imagen que queramos generar
  .then(function (blob) {
      window.saveAs(blob, 'memeimg.png');//al descargar la imagen memeimg.png...y descargar otra nos va a agregar como memeimg.png(1)...
  });//window.sabeAs---guardar

})
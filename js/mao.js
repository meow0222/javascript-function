const img = ["imgs/tokyo1.jpg", "imgs/tokyo2.jpg", "imgs/tokyo3.jpg", "imgs/tokyo4.jpg", "imgs/tokyo5.jpg"];
let count = -1;

picChange();
function picChange() {
  count++;
  if (count == img.length) count = 0;
  //画像選択
  changePic.src = img[count];
  //秒数の指定
  setTimeout("picChange()", 4000);
}

var
  carousel = document.querySelector('.carousel'),
  figure = carousel.querySelector('figure'),
  nav = carousel.querySelector('nav'),
  numImages = figure.childElementCount,
  theta =  2 * Math.PI / numImages,
  currImage = 0
;
  
nav.addEventListener('click', onClick, true);

function onClick(e) {
  e.stopPropagation();
  
  var t = e.target;
  if (t.tagName.toUpperCase() != 'BUTTON')
    return;
  
  if (t.classList.contains('next')) {
    currImage++;
  }
  else {
    currImage--;
  }
  
  figure.style.transform = `rotateY(${currImage * -theta}rad)`;
}
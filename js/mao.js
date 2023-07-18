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
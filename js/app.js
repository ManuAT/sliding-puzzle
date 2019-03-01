function shuffle(imgArray) {
    var j, x, i;
    for (i = imgArray.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = imgArray[i];
        imgArray[i] = imgArray[j];
        imgArray[j] = x;
    }
    return imgArray;
}
function removeNine(imgArray){
  for (var j=0;j<imgArray.length;j++){
    if (imgArray[j] == '9'){
      imgArray[j] = null;
      return imgArray;
    }
  }
}
function init(){
  // fill imgArray with images
  var imgArray = new Array();
  for (var i=0; i < 9;i++){
    imgArray[i] = i + 1;
  }
  // shuffle array
  imgArray = shuffle(imgArray);
  imgArray = removeNine(imgArray);
  console.log(imgArray);
  for (var j=0;j<imgArray.length;j++){
    if (imgArray[j] == null){
      var img = jQuery('<img id="'+ 0 +'">');
      img.attr('src', 'img/' +'0.png');
      img.attr('class', 'style-game-number');
      img.attr('draggable', 'false');
      img.appendTo('#game');
    }else{
      var img = jQuery('<img id="'+ imgArray[j] +'">');
      img.attr('src', 'img/' + imgArray[j] + '.png');
      img.attr('class', 'style-game-number');
      img.attr('draggable', 'false');
      img.appendTo('#game');
    }
  }
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
function removeNine(imgArray){
  for (var j=0;j<imgArray.length;j++){
    if (imgArray[j] == '9.png'){
      imgArray[j] = null;
      return imgArray;
    }
  }
}
function init(){
  // fill imgArray with images
  var imgArray = new Array();
  for (var i=0; i < 9;i++){
    imgArray[i] = i + 1 +'.png';
  }
  // shuffle array
  imgArray = shuffle(imgArray);
  imgArray = removeNine(imgArray);
  //jQuery('<img id>')
}

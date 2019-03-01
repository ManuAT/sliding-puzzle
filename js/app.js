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
function addImages(imgArray){
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
function arrayToMatrix(imgArray){
  var numberMatrix = [];
  t=0;
  tempArray= new Array();
  for (var j=0; j<imgArray.length;j++){
    tempArray[t] = imgArray[j];
    t++;
    if (t == 3){
      numberMatrix.push(tempArray);
      tempArray= new Array();
      t=0;
    }
  }
  return numberMatrix;
}
function getElementPosition(element, matrix){
  for (var i=0; i<matrix.length;i++){
    for(var j=0; j<matrix.length;j++){
      if (matrix[i][j] == element){
        return new Array(i, j);
      }
    }
  }
  return false;
}
function checkPosition(move, element, matrix){
  var position = getElementPosition(element, matrix);
  if (!position){
    return false;
  }
  switch (move) {
    case 'destra':
      var j = position[1] + 1;
      if (j < 3){
        return true;
      }
      return false;
      break;
    case 'sinistra':
      var j = position[1] - 1;
      if (j >= 0){
        return true;
      }
      return false;
      break;
    case 'alto':
      var i = position[0] - 1;
      if (i >= 0){
        return true;
      }
      return false;
      break;
    case 'basso':
      var i = position[0] + 1;
      if (i < 3){
        return true;
      }
      return false;
      break;
    default:
      return false;
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
  // remove 9th element
  imgArray = removeNine(imgArray);
  console.log(imgArray);
  // add image to DOM
  addImages(imgArray);
  var matrix = arrayToMatrix(imgArray);
  console.log(matrix);
  var position = checkPosition('basso', 5, matrix);
  console.log(position);
}

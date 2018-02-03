let button ;
let input ;

function setup() {
  createCanvas(600, 600) ;
  button = createButton("Create image!") ;
  input = createInput() ;
  button.mousePressed(getimg) ;
}

function reverseString(str) {
    let newString = '' ;
    for (let i = str.length - 1 ; i >= 0 ; i--) {
        newString += str[i] ;
    }
    return newString ;
}

function getBinary(text) {
  let res = '' ;
  for(let i = 0 ; i < text.length ; i++) {
    let curr = text[i].charCodeAt() ;
    let currString = '' ;
    while(curr) {
      let aux = curr % 2 ;
      currString += String.fromCharCode(aux + 48) ;
      curr = floor(curr / 2) ;
    }
    while(currString.length < 8) {
      currString += '0' ;
    }
    currString = reverseString(currString) ;
    res += currString ;
  }
  return res ;
}

function getimg() {
  noStroke() ;
  let code = getBinary(input.value()) ;
  let sz = floor(Math.sqrt(code.length)) ;
  if(sz * sz < code.length) {
    sz++ ;
  }
  console.log(code) ;
  let scl = (width + height) / ( 2 * sz ) ;
  let index = code.length - 1 ;
  console.log(scl) ;
  console.log(sz) ;
  for(let y = sz - 1 ; y >= 0 ; y--) {
    for(let x = sz - 1 ; x >= 0 ; x--) {
      if(index >= 0) {
        fill(code[index] == '0' ? 0 : 255) ;
        index-- ;
      }
      else {
        fill(255, 0, 0) ;
      }
      rect(x * scl, y * scl, scl, scl) ;
    }
  }
}

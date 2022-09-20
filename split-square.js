function dump(square) {
  if (square === 0 || square === 1) return square;

  for (let s of square) {
    if (Array.isArray(s)) {
      dump(s);
    } else {
      console.log(s);
    }
  }
}


//if its a number has to be 0 or 1
//if its an array has to be length of 4
function validate(square) {

  // if (square === 0 || square === 1) return true;
  // if (Array.isArray(square) && square.length === 4) {
  //   for (let s of square) {
  //     if (validate(s) === true) return true;
  //   }
  // }

  // return false;
  if (square === 0 || square === 1) return true;
  if (Array.isArray(square) && square.length === 4) {
    return square.every(validate)
  }

  return false;
}

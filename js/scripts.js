function beepBoop(input) {
  let returnArray = [];
  for(let i = 0; i <= input; i++) {
    const index = i.toString();
    if(index.includes('1')) {
      returnArray.push("Beep!")
    } else {
      returnArray.push(i);
    }
  }
  console.log(returnArray);
}
beepBoop(13);
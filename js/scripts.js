function beepBoop(input) {
  let returnArray = [];
  for(let i = 0; i <= input; i++) {
    const index = i.toString();
    if(index.includes('3')) {
      returnArray.push("Won't you be my neighbor?");
    }
    else if(index.includes('2')) {
      returnArray.push("Boop!");
    }
    else if(index.includes('1')) {
      returnArray.push("Beep!");
    } else {
      returnArray.push(i);
    }
  }
  return returnArray;
}

$(document).ready(function() {
  $("form#formA").submit(function(event) {
    event.preventDefault();
    const userInput = $("#userInput").val();
    const userArray = beepBoop(userInput);
    console.log(userArray);
  });
});
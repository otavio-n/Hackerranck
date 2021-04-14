var clean = false;

document.getElementById("btn0").addEventListener("click", function () {
  if (clean) {
    document.getElementById("res").innerHTML = "";
    clean = false;
  }
  document.getElementById("res").insertAdjacentHTML("beforeend", "0");
});

document.getElementById("btn1").addEventListener("click", function () {
  if (clean) {
    document.getElementById("res").innerHTML = "";
    clean = false;
  }
  document.getElementById("res").insertAdjacentHTML("beforeend", "1");
});

function operatorClicked(event) {
  if (clean) {
    clean = false;
  }
  var btn = event.target;
  document.getElementById("res").insertAdjacentHTML("beforeend", btn.innerHTML);
}

document.getElementById("btnSum").onclick = operatorClicked;
document.getElementById("btnMul").onclick = operatorClicked;
document.getElementById("btnDiv").onclick = operatorClicked;
document.getElementById("btnSub").onclick = operatorClicked;

document.getElementById("btnClr").onclick = function () {
  document.getElementById("res").innerHTML = "";
};

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

function bin2dec(bin) {
  return parseInt(bin, 2);
}

document.getElementById("btnEql").onclick = function () {
  const currentRes = document.getElementById("res").innerHTML;
  const pattern = /(\d+)(\D)(\d+)/;
  var result = pattern.exec(currentRes);
  
  if (pattern.test(result)) {

    const firstNumber = bin2dec(result[1]);
    const secondNumber = bin2dec(result[3]);

    if (result[2] == "/") {
      var calc = firstNumber / secondNumber;
    } else if (result[2] == "*") {
      var calc = firstNumber * secondNumber;
    } else if (result[2] == "+") {
      var calc = firstNumber + secondNumber;
    } else if (result[2] == "-") {
      var calc = firstNumber - secondNumber;
    }

    document.getElementById("res").innerHTML = dec2bin(calc);
  } else {
    document.getElementById("res").innerHTML = "ERROR :( PRESS C";
  }

  clean = true;
};

const numbers = [1, 2, 3, 6, 9, 8, 7, 4];
const centerBtn = document.getElementById("btn5");

centerBtn.addEventListener("click", function() {

    numbers.unshift(numbers.pop());

    document.getElementById('btn1').innerHTML = numbers[0];
    document.getElementById('btn2').innerHTML = numbers[1];
    document.getElementById('btn3').innerHTML = numbers[2];
    document.getElementById('btn6').innerHTML = numbers[3];
    document.getElementById('btn9').innerHTML = numbers[4];
    document.getElementById('btn8').innerHTML = numbers[5];
    document.getElementById('btn7').innerHTML = numbers[6];
    document.getElementById('btn4').innerHTML = numbers[7];
});
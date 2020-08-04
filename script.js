//Generate Random Number
const pinBtn = document.querySelector(".generate-btn");
pinBtn.addEventListener("click", function () {
    const newPin = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("random-number-input").value = newPin;
});
document.getElementById("random-number-input").value = "";

//Submit Input Number
const submitPin = document.querySelector("#submit-input");
document.querySelectorAll(".number-button").forEach(el => {
    el.onclick = () => submitPin.value = submitPin.value !== "" ? submitPin.value + el.innerText : el.innerText;
});

//Clear All
document.querySelector(".clear-button").addEventListener("click", function () {
    const submitInputPin = document.getElementById('submit-input').value;
    document.getElementById('submit-input').value = "";
});

//Backspace
document.querySelector('.delete-button').addEventListener('click', function () {
    const inputDisplay = document.getElementById('submit-input').value;
    document.getElementById('submit-input').value = inputDisplay.substr(0, inputDisplay.length - 1);
});

//Pin Match and Tryleft
document.getElementById("submit-button").addEventListener("click", function () {
    const generatePin = document.getElementById("random-number-input").value;
    const inputPin = document.getElementById("submit-input").value;

    if (inputPin.length > 0) {
        if (generatePin === inputPin) {
            document.getElementById("match").style.display = "block";
            document.getElementById("not-match").style.display = "none";
            document.getElementById("action-remain").style.display = "none";
            document.getElementById("random-number-input").value = "";
        } else {
            document.getElementById("not-match").style.display = "block";
            document.getElementById("match").style.display = "none";

            decreaseBtn = document.getElementById('tryleft').innerHTML;
            decreaseNum = parseInt(decreaseBtn);
            decreaseBtnNew = decreaseNum - 1;
            document.getElementById('tryleft').innerHTML = decreaseBtnNew;
            document.getElementById("action-remain").style.display = "block";
        }
        document.getElementById("pin-notice").style.opacity = "0";
    } else {
        document.getElementById("pin-notice").style.opacity = "1";
    }

    const disableBtn = document.getElementById('tryleft').innerHTML;
    if (disableBtn == 0) {
        document.getElementById("submit-button").disabled = true;
    }
    document.getElementById("submit-input").value = "";
});
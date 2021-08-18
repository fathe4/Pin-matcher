function getPin() {

    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        getPin()
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('pin-input').value = pin;
}

document.getElementById('key-cals').addEventListener('click', function (event) {
    const number = event.target.innerText;
    let keyTyped = document.getElementById('display-key');

    if (isNaN(number)) {
        if (number == 'C') {
            keyTyped.value = '';
        }
    }
    else {
        let newNumber = keyTyped.value + number;
        keyTyped.value = newNumber;
    }


})

document.getElementById('verifyPin').addEventListener('click', function () {

    const pin = document.getElementById('pin-input').value;

    const keyTyped = document.getElementById('display-key').value;

    const failMassage = document.getElementById('fail-massage');
    const successMassage = document.getElementById('success-massage');

    if (pin == keyTyped) {

        successMassage.style.display = 'block';
        failMassage.style.display = 'none';
    } else {
        failMassage.style.display = 'block';
        successMassage.style.display = 'none';
    }

    // console.log('clicked');
})




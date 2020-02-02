const validateButton = document.querySelector('.card__main--button');
const logoPlace = document.querySelector('.card__main--type');
let number;


validateButton.addEventListener('click', function () {
    console.log("LLLLLLLLLLLLLLLLLLLLLLLLL")
    number = document.getElementById("number").value;
    // console.log(number);
    let checkingNumber = true;
    console.log(checkingNumber);
    checkingNumber = checkCardNumber(number);
    let somestring = "";
    somestring = findType(number)
    // console.log(somestring)
    if (checkingNumber) {
        setLogo(findType(number));
    }
});

function setLogo(type) {
    switch (type) {
        case  "Mastercard":
            logoPlace.style.backgroundImage = 'url("img/mastercard.png")';
            break;
        case  "Visa":
            logoPlace.style.backgroundImage = 'url("img/visa.png")';
            break;
        case  "American Express":
            logoPlace.style.backgroundImage = 'url("img/ae.jpg")'
            break;
        default:
            logoPlace.style.backgroundColor = "black";
    }
}

function checkCardNumber(number) {
    number = number.replace(/ /g, '').replace(/-/g, '');
    const arrayAllNumbers = number.split("");
    let array = [];
    let length = arrayAllNumbers.length;
    for (let i = 0; i < length; i++) {
        if (length % 2 === 0) {
            if (i % 2 === 0) {
                array.push(arrayAllNumbers[i] * 2)
            } else
                array.push(parseInt(arrayAllNumbers[i]))
        } else {
            if (i % 2 !== 0) {
                array.push(arrayAllNumbers[i] * 2)
            } else
                array.push(parseInt(arrayAllNumbers[i]))
        }
    }
    let sum = 0;
    let stringnumbers = array.join('');
    let stringnumbersArray = stringnumbers.split('');
    for (let i = 0; i < stringnumbersArray.length; i++) {
        let tempNumber
        sum = sum + parseInt(stringnumbersArray[i]);
    }
    return sum % 10 === 0;
}

function findType(number) {
    if (number.length === 16 && number[0] === '5') {
        return "Mastercard"
    }
    if ((number.length === 16 || number.length === 13) && number[0] === '4') {
        return "Visa"
    }
    if (number.length === 15) {
        return "American Express"
    } else {
        return "Error"
    }
}
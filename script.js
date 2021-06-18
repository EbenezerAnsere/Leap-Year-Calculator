// function leapyear(year) {
//     if ((year % 4 == 0) && (year % 100 == 0) && (year % 400 == 0)) {
//         console.log(year + 'is a leap');
//     } else {
//         console.log(year + 'is not a year');
//     }

// }



let showInfo = () => {
    let output = document.getElementById("result");
    let yearInput = document.getElementById("leapyear").value;

    if ((yearInput % 4 == 0) && (yearInput % 100 == 0) && (yearInput % 400 == 0)) {
        output.innerHTML = yearInput + ' is a leap year';
    } else {
        output.innerHTML = yearInput + ' is not a leap year';
    }


}

let clearAll = () => {
    document.getElementById("result").innerHTML = "";
    document.getElementById("myForm").reset();

}
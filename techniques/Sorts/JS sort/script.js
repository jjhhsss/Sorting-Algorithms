// ! String alphabetic sorting

var arrOnString = ['Banana', 'Cats', 'Applezz']
console.log(arrOnString.sort());

// ! Doesn't work on numbers

var arrOnNum = [6 ,4 ,15 ,10 ];
console.log(arrOnNum.sort());

// ! Telling JS how to sort
/* 
! If the first number minus the second number is a negative number (example 5 - 6) then first number comes before second. If not, then it's the other way around. Don't worry about the if it returns negative number then do what. JS already takes care of that
*/

function numberCompare(num1, num2) {
    return num1 - num2;
}

var arrOnNum1 = [6 ,4 ,15 ,10 ]
console.log(arrOnNum1.sort(numberCompare));

// ! MESS AROUND!!!
// 1.
document.write("<h3>Current date & time :</h3>")
function currentD_T() {
    var now = new Date();
    document.write(now);
}
currentD_T()

// 2.
function greeting() {
    var firstName = prompt("Enter your first name:");
    var lastName = prompt("Enter your last name:");
    alert("Hello " + firstName + " " + lastName);
}
greeting()

// 3.
document.write("<br><br>" + "<b>Sum of first and second number: </b>")
function add() {
    var numOne = +prompt("Enter your first number:");
    var numTwo = +prompt("Enter your second number:");
    alert(numOne + numTwo);
}
add()

// 4.
function calculator(num1, num2, operator) {
    if (operator === "+") {
        alert(num1 + " + " + num2 + " = " + (num1 + num2));
    }
    else if (operator === "-") {
        alert(num1 + " - " + num2 + " = " + (num1 - num2));
    }
    else if (operator === "*") {
        alert(num1 + " x " + num2 + " = " + (num1 * num2));
    }
    else if (operator === "/") {
        alert(num1 + " / " + num2 + " = " + (num1 / num2));
    }
    else {
        alert("Invalid operator");
    }
}
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var operator = prompt("Enter the operator (+, -, *, /):");
calculator(num1, num2, operator);

// 5.
function square(number) {
    alert("Square of " + number + " is " + (number * number));
}
var userNumber = +prompt("Enter number for square: ");
square(userNumber);

// 6.
function factorial(num) {
    var answer = 1;
    if (num === 0 || num === 1) {
        return answer;
    } else {
        for (var i = num; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}
var number = +prompt("Enter number for factorial: ");
answer = factorial(number)
alert("The factorial of " + number + " is " + answer);


//7.
function counting(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + " ");
    }
}
var start = +prompt("Enter start number for counting:");
var end = +prompt("Enter end number for counting:");
counting(start, end);


//8. 
function calculateHypotenuse(base, perpendicular) {
    var base, perpendicular;
    function calculateSquare(num) {
        num = num * num;
        return num;
    }
    base = calculateSquare(base);
    perpendicular = calculateSquare(perpendicular);
    var hypotenuse = base + perpendicular;
    return hypotenuse;
}
var base = +prompt("Enter base of a right angle triagnle:");
var perpendicular = +prompt("Enter perpendicular of a right angle triagnle:");
var hyp = calculateHypotenuse(base, perpendicular);
alert("hypotenuse of a right angle triangle: " + hyp);


//9.
function areaOfRectangle(width, height) {
    var areaCalc = width * height;
    return areaCalc;
}
var width = +prompt("Enter width of rectangle: ");
var height = +prompt("Enter height of rectangle: ");
var area = areaOfRectangle(width, height);
alert("Area of Rectangle: " + area);


//10.
function checkPalindrome(message) {
    var reverseMessage = "";
    for (var i = message.length - 1; i >= 0; i--) {
        reverseMessage += message[i];
    }
    if (message === reverseMessage) {
        alert(message + " is palindrome");
    }
    else {
        alert(message + " is not palindrome");
    }
}
var msg = prompt("Enter message to check it's palindrome or not");
checkPalindrome(msg);


//11.
function titleCase(message) {
    var arr = message.split(" ");
    var titleArray = [];
    var str;
    for (var i = 0; i < arr.length; i++) {
        var firstChar = arr[i].slice(0, 1);
        var otherChar = arr[i].slice(1);
        var word = firstChar.toUpperCase() + otherChar.toLowerCase();
        titleArray.push(word);

    }
    str = titleArray.join(" ");
    document.write("<br><b>String:</b> " + message + "<br>")
    document.write("<b>Output:</b> " + str + "<br>")
}

var message = prompt("Enter your Message:");
titleCase(message);


// 12.
function findLongestWord(str) {
    var words = str.split(' ');
    var longestWord = '';

    for (var word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}
var exampleString = 'Web Development Tutorial';
document.write(findLongestWord(exampleString)+"<br>");

// 13.
function countLetterOccurrences(str, letter) {
    var count = 0;
    for (var char of str) {
        if (char.toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}
var sampleString = 'JSResourceS.com';
var letter = 'o';
document.write(countLetterOccurrences(sampleString, letter)+"<br>");

// 14.
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write(`<b>The circumference is</b> ${circumference.toFixed(2)}<br>`);
}
var radius = 5;
calcCircumference(radius);
function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    document.write(`<b>The area is</b> ${area.toFixed(2)}`);
}
calcArea(radius);


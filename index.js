// 1. Ways to print in JS
// console.log("Shubham Anant Rane");
// alert("ME");
// document.write("This is the Document");

// 2. JS console API
// console.log("Shubham Anant Rane", 9 + 2, "Another log");
// console.warn("Warning!");
// console.error("Error!");

// 3. JS variables
// Variables - Containers to store data values
var num1 = 34;
var num2 = 32;
console.log(num1 + num2);

// 4. Data types in JS
// Num
var str1 = "this is a string";
var str2 = 'this is also a string';
// String
var num3 = 45.6;
var num4 = 56.9;
// Objects
var marks = {
    shubham: 91.40,
    anant: 82.75
}
console.log(marks);

// Booleans
var a = true;
var b = false;
console.log(a, b);

// var und=undefined;
var und;
console.log(und);

// Two types of datatypes in JS
// 1 Primitive: string, null, undefined, number, boolean, symbol
// 2 Reference: Arrays and Objects

var arr = [1, 2, 3, 4, 5, "shubh"];
console.log(arr);

// Operators in JS
// Arithmetic: + - * / %
var x = 50;
var y = 15;
console.log("Value is", x + y);
console.log("Value is", x - y);
console.log("Value is", x * y);
console.log("Value is", x / y);
console.log("Value is", x % y);

// Assignment = += -= *= /=
// var s=x;
// console.log(s)

// Comparison == < > <= >=

// Logical && is and,|| is or, ! is not

// functions in JS
//DRY= dont repeat yourself
function avg(x, y) {
    return (x + y) / 2;
    //or
    //c=(x+y)/2;
    //return c;
}

c = avg(6, 7);
c2 = avg(454, 43);
console.log(c, c2);

// Conditions in JS
var age = 17;
if (age >= 18) {
    console.log("Youre not a kid");
}
else {
    console.log("Youre a kid");
}

var arrr = [1, 2, 3, 4, 5, 6];

console.log(arrr);
for (var i = 0; i < arrr.length; i++) {
    console.log(arrr[i]);
}

arrr.forEach(function (element) {
    console.log(element);
})

let j = 0;
const g = 0;

while(j<arrr.length){
    console.log(arrr[j]);
    j++;
}

do{
    console.log(arrr[j]);
    j++;
}while(j<arrr.length)

//break and continue
let ard=["shubh",2,3,4.5,null,6];
for(var i=0;i<ard.length;i++){
    if(i==2){
        continue;
    }
    console.log(ard[i]);
}
// array methods
console.log(ard.length);
ard.push("abc");
ard.pop();
//ard.shift();
ard.unshift();
console.log(ard);
//ard.sort();

// string methods
let strr="Shubham Anant Rane Shubham Anant Rane";
console.log(strr.indexOf("A"))
console.log(strr.lastIndexOf("Shubham"))
console.log (strr.length);
console.log(strr.slice(3,6));

f=strr.replace("Shubham","Shubhu");
console.log(f,strr);

let myDate = new Date();
console.log(myDate);


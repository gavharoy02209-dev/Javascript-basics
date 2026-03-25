// ==== Task-1 Variables ====
/*
let name = 'Gavharoy';
let age = 33;
let hometown = 'Andijon';
console.log(name);
console.log(age);
console.log(hometown);

// ==== Task-2 Template Literals ====

console.log(`My name is ${name}, I am ${age} years old, my hometown is ${hometown}`);
*/

// ==== Task 3 If/Else ====
/*
 let age = prompt('Enter your age');
 age = Number(age);
 if (age > 18) {
    alert(`You have the right to vote`);
 } else if(age === 18) {
    alert(`You have the right to vote this year`);
 } else {
    alert(`You are too young`);
 }
*/
 // ==== Task- 4 Math Functions ====

 let number = Number(prompt('Enter number'));
 if (isNaN(number)) {
    console.log('Please enter a valid number');
 } else {

 console.log('Rounded: ' + Math.round(number));
 console.log ('Absolute value: ' + Math.abs(number));
 console.log('Square: ' + Math.pow(number,2));
 }

// ==== Task-5 Combined ====

let userName = prompt('Enter your name');
let age = Number(prompt('Enter your age'));
if(age > 18) {
    console.log(`Hello ${userName}, you are  ${age} years old and you have the right to vote`); 
} else if(age === 18) {
    console.log(`Hello ${userName}, you have the right to vote this year`);
} else {
    console.log(`Hello ${userName}, you are ${age} years old, you are too young`);
}

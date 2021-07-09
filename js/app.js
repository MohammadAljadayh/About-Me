'use strict'

let userName = prompt('what\'s your name?');


alert('hello ' + userName);
let score = 0;

function age1(){


let age = prompt('Are You Age  Between 20 to 30 ');
age = age.toLowerCase();

if (age == 'yes' || age == 'y') {
    alert(' Great You Chice yes  your agg between 20-30 Name Is');
    score++;
}
else {
    alert(' You Chice No ');
}
}
age1();

function animal(){
let animal = prompt('are you like cat');

animal = animal.toLowerCase();

if (animal == 'yes' || animal == 'y') {
    alert(' Great You Like Cat');
    score++;
}
else {
    alert(' Me Too :) ');
}
}
animal();

function car(){
let car = prompt('are you like mazda car');

car = car.toLowerCase();

if (car == 'yes' || car == 'y') {
    alert(' Great You Like Mazda Car');
    score++;
}
else {
    alert('Also  Me Too :) ');
}
}
car();

function mobile(){
let mobile = prompt('are you like iphone Phone')

mobile = mobile.toLowerCase();

if (mobile == 'yes' || mobile == 'y') {
    alert(' Great You Like Mazda Car');
    score++;
}
else {
    alert('Also  Me Too :) ');
}
}
mobile();

function LTUC(){
let LTUC = prompt('are you like LTUC')

LTUC = LTUC.toLowerCase();

if (LTUC == 'yes' || LTUC == 'y') {
    alert(' Great ^^  ');
    score++;
}
else {
    alert('oh no this one of the best college in the jordan');
}
}
LTUC();

function guessingNumber(){
alert(' you have 4 chance to guess number. between 1-10 ');

for (let i = 0; i < 4; i++) {

    let Number = prompt('try to guess number. between 1-10 to check if YOU are Lucky or not :)')
    if (Number != 7 && i == 3) {
        alert(' oh no .. no chance you have now the correct answers is 7');
    }
    else if (Number > 7) {
        alert(' the guess number is too high ');
    }

    else if (Number < 7) {
        alert(' the guess number is too low ');
    }

    else if (Number == 7) {
        alert('  Great You Are Vary Lucky');
        score++;
        break;
    }

}
}
guessingNumber();

function Fruits(){
alert(' you have 6 chance to guess one of the best Fruits');

let Fruits = ['banana', 'apple', 'grape', 'orange', 'Watermelon'];

var loopc=false;
for (let i = 0; i < 6 && !loopc;i++) {
    let Fruite = prompt('try to guess  some of the  best Fruits :)')
    Fruite = Fruite.toLowerCase();

    for (let f = 0; f < Fruits.length; f++) {
        if (Fruite == Fruits[f]) {

            alert('Great You Are Vary Lucky');
            score++;
            loopc=true;
            break;
        }

    }
  if (i===5)
  {
alert(" oh no you dont have any other  chance ")
  }
 
}
}
Fruits();

alert("all the true answers for the 7th qustion one of these fruits 'banana'+ 'apple'+ 'grape'+ 'orange'+'Watermelon' " )

alert("your score is " + " " + score + "/7");


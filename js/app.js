'use strict'

let userName=prompt('what\'s your name?');

console.log('this is for user name',userName);

alert('hello '+userName); 

let age =prompt('Are You Age  Between 20 to 30 ');
age=age.toLowerCase();

if(age=='yes' || age=='y')
{
alert(' Great You Chice yes  your agg between 20-30 Name Is') ;
}
else
{
    alert(' You Chice No ') ;
}

let animal=prompt('are you like cat');

animal=animal.toLowerCase();

if(animal=='yes' || animal=='y')
{
alert(' Great You Like Cat') ;
}
else
{
    alert(' Me Too :) ') ;
}

let car=prompt('are you like mazda car');

car=car.toLowerCase();

if(car=='yes' || car=='y')
{
alert(' Great You Like Mazda Car') ;
}
else
{
    alert('Also  Me Too :) ') ;
}

let mobile=prompt('are you like iphone Phone') 

mobile=mobile.toLowerCase();

if(mobile=='yes'|| mobile=='y')
{
alert(' Great You Like Mazda Car') ;
}
else
{
    alert('Also  Me Too :) ') ;
}

let LTUC=prompt('are you like LTUC') 

LTUC=LTUC.toLowerCase();

if(LTUC=='yes'|| LTUC=='y')
{
alert(' Great ^^  ') ;
}
else
{
    alert('oh no this one of the best college in the jordan') ;
}

alert(' Great' +" " + userName + " "+ 'thanks for your answers' );

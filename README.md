# From-Zero-to-Expert-  Challenges & notes !



/*let js = 'amazing';
//console.log(40 + 8 + 83 - 10);

console.log("Jonas");
console.log("23");

let firstName = "Jonas"
let first='Jonas'
let firstNamePerson='Jonas'

let myFirstJob = 'Programmer'
let myCurrentJob = 'Teacher'
console.log (myFirstJob);

// Variable name conventions

let myCountry = 'Croatia'
let myContinent = 'Europe'
let myPopulation = '4 000 000'

console.log (myCountry);
console.log (myContinent);
console.log (myPopulation);*/

/*
let javascriptIsFun = true; 
console.log(javascriptIsFun);


//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1191;
console.log(typeof year);

console.log(typeof null);


let isIsland = '1000';
isIsland = 'true'; 
console.log(isIsland);
let language = ''
*/

/*let age = 30;
age = 31;

const birthYear = 1986;
//birthYear = 1990; 

const job; */

 /*lastName = 'Schemendne';
 console.log(lastName);

 const now = 2037;
 const ageJonas = now-1991;
 const ageTea = now-1986;
 console.log(ageJonas, ageTea);

console.log(ageJonas* 2, ageJonas/10, 2** 3);
//2 ** 3 means 2 to the power of 3 = 2*2*2


const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//Asignment operatora 
let x = 10+ 5; 
x += 10; // x = x+10 
x*=4; // x= x*4
x++; // x= x + 1
x--; // x= x-1
x--;

console.log(x);

//Comparison operators

console.log(ageJonas > ageTea);// >, <, >=, <=
console.log(ageTea >= 18);

const isFullAge = ageTea >=18; 
//testing 2 
*/




--------------------------------------------------------------------
/*testing1-
Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions) 2. Log their values to the console 

let continent = "Europe";
let population = "4 000 000";
console.log(country, continent, population);*/





----------------------------------------------------------------
/* testing2
1.	Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 
'language', but don't assign it any value yet 
2.	Log the types of 'isIsland', 'population', 'country' and 'language' to the console 

let isIsland = "false";
let language = "";
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/




-------------------------------------------------------------------------
/*test2
1.	Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one) 
2.	Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const. 
3.	Try to change one of the changed variables now, and observe what happens 

language = "Croatian";
const country = "Croatia";
const continent = "Europe";
const isIsland = "false";
isIsland = "true";
*/




-----------------------------------------------------------------
/*1.	If your country split in half, and each half would contain half the population, then how many people would live in each half? 
2.	Increase the population of your country by 1 and log the result to the console 
3.	Finland has a population of 6 million. Does your country have more people than Finland? 
4.	The average population of a country is 33 million people. Does your country have less people than the average country? 
5.	Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese' 

const population = 4000000;
const populationHalf = population/2;
console.log(population / 2, populationHalf / 2);
console.log(population+1);

const populationFinland = 6000000;
const countryMore = population > populationFinland;
console.log(population > populationFinland);

const populationAverage = 33000000;
const myCountry = population > populationAverage;
console.log(population > populationAverage);

const country = 'Portugal';
const continent = 'Europe';
const languagePortugal = 'portugese';
const speakersPortugal = 11000000;
const description = country + ' is in ' + continent + ' , and its ' + speakersPortugal + ' people speak ' + languagePortugal;
console.log(description);*/

/*description = + country + 'is in' + continent + ', and its' + population + 'people speak' + language;
country = Portugal;
continent = Europe;
population = 11000000;
language = portuguese; 
console.log(description);*/





----------------------------------------------------------------------------------------------------
/*Coding Challenge #1 

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter). 
Your tasks: 
1.	Store Mark's and John's mass and height in variables 
2.	Calculate both their BMIs using the formula (you can even implement both versions) 
3.	Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John. 
Test data: 
§	Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall. 
§	Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. 
 






----------------------------------------------------------------------------------------------------------------
//TEST DATA 1 - you might have used let insted of const , because we already know we aren't gonna change them 
/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark/ heightMark **2
const BMIJohn = massJohn/ (heightJohn*heightJohn);
const markHigherBMI = BMIMark > BMIJohn; 
console.log(BMIMark,BMIJohn, markHigherBMI);
*/
/*

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = '1991';
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);


const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}! `;
console.log(jonasNew);


console.log (`Just a regular string-..`)

console.log(`String
multiple
lines`);*/

/*description = + country + 'is in' + continent + ', and its' + population + 'people speak' + language;
const country = 'Portugal';
const continent = 'Europe';
const population = '11000000';
const language = 'portuguese'; 


const description =` ${country}, is in ${continent}, and it's ${population} people speak ${language} `;
console.log(description);*/
/*
const age = 15;


if(age >= 18) {
   console.log('Sarah can start drivin licence 👍😁')

}  else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}


const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
     century = 21;
}
console.log(century);*/






---------------------------------------------------------------------------------------------------------------------------------------------------------------
/*TAKING DECISIONS IF/ELSE STATEMENTS
If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population) 
2.	After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original 

const country ='Portugal' ; 
const population = '55000000'

if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log( `${country}'s population is ${33 - population} below average`);
}*/
/* Your tasks: 
1.	Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
2.	Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!" 
Hint: Use an if/else statement 😉 
 
GOOD LUCK 😀 
 

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark/ heightMark **2
const BMIJohn = massJohn/ (heightJohn*heightJohn);
const markHigherBMI = BMIMark > BMIJohn; 


if (BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
    console.log(`John's BMI(${BMIJohn}) is higher than Mark's(${BMIMark})`);
}*/
/*
// type converstion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
 
console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion

console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23'* '2');
console.log('23' > '18');

let n = '1' +1;// '11'
n = n - 1; // 11-1 = 10
console.log(n);



console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean({}));

const money = 5;
if (money){
    console.log("Don't spend it all;)");
} else {
    console.log('You should get a job!');
}

let height = 0;
if(height){
    console.log('YAY! Height is defined');
} else{
    console.log('Height is undefined');
}

const age = 19;
if (age === 18)  console.log ('You just became an adult :D');

const favorite = Number(prompt("What is your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if(favorite === 23){// '23' == 23  will be converted to a number IF === 23===23
    console.log('Cool! 23 is an amazing number, dude!');
   
} else if(favorite === 7){
    console.log('7 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}

const age = '18';
if(age === 18) console.log('You just became an adult- strict');

if(age == 18) console.log('You just became an adult - loose');

//prompt("What's your favorite number");//creates a valute , number that is inputed.
/*
const favorite = Number (prompt("What's your favorite number"));
console.log(favorite);
console.log(typeof favorite);

//loose equality operator and does type coercion// '23'== 23
if (favorite === 23) {
    console.log('Cool! 23 is an amazing number')
} else if(favorite === 7) {
    console.log('7 is also a cool number')
} else{
    console.log('Number is not 23 or 7')
}*/

//if (condition)

    /* executed only if "condition" is true
}
else if (other condition)
{
    // executed only if "condition" was false and "other condition" is true
}
else
{
    // executed only if both "condition" and "other condition" were false
}

if(favorite !== 23) console.log('Why not 23?');
*/

// NOT OPERATOR , NOT A( a: aGE IS >=)

/*age = 16

A) age is greater or equal 20 false
B) age is less than 30 true
LETS USE OPERATORS

A! = false = TRUE
A-false AND B-true = FALSE
A -false OR B-true = TRUE 

const hasDriversLicence = true; // A
const hasGoodVision = true; //B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

const shouldDrive = hasDriversLicence && hasGoodVision;

if(shouldDrive){
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = false;// C
 console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired){
    console.log('Sarah is able to drive!');
    } else {
        console.log('Someone esle should drive...');
    }





-------------------------------------------------------------------------------------------------------------------------------------------------------------

const numNeighbours = prompt( 'How many neighbour countries does your country have?');

if (numNeighbours === 1) {
    console.log = ('Only 1 border!'); }
 else if (numNeighbours > 1){
 console.log('More than 1 border');
} else {
    console.log('No borders');
}
  
//LOGical operators Challenge


if (language === 'english' && population < 50 && !isIsland)
{
    console.log ('You should live in ${country} :)');
} else { 
    console.log('${country} does not meet your criteria:(');
}

*/




--------------------------------------------------------------------------------------------------------------------------------
/*Assignment 
LECTURE: Logical Operators 
1.	Comment out the previous code so the prompt doesn't get in the way 
2.	Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island. 
3.	Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary. 
4.	If yours is the right country, log a string like this: 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :(' 
5.	Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D) 

const language = "croatian";
const population = "40";
const isIsland = false; 

if(language=='english'&& population < 50 && isIsland == true) {
    console.log('You should live in Croatia :)');
} else 
{ console.log('Croatia does not meet your criteria :(');
}

*/













---------------------------------------------------------------------------------------------------------------------------------------------------------
// CODING CHALLENGE 3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy! 
Your tasks: 
1.	Calculate the average score for each team, using the test data below 
2.	Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score) 
3.	Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉 
4.	Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy 
--------------------------------------Test data: ---------------------------------------------
§	Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 
§	Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123  Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 
GOOD LUCK 😀 
*/

/*average 
const scoreDolphins = (96 + 108 + 89)/3;
const scoreKoalas = (88 + 91 + 110)/3;
console.log( scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas){
    console.log( 'Dolphins won');
} else if(scoreKoalas > scoreDolphins) {
    console.log('Koalas won');
} else if(scoreDolphins===scoreKoalas){
    console.log('Both won');
} 

*/


/*if a draw
const scoreDolphins = (5+5+5)/3;
const scoreKoalas = (5+5+5)/3;
console.log( scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas){
    console.log( 'Dolphins won');
} else if ( scoreDolphins < scoreKoalas){
    console.log('Koalas won');
} else {
    console.log('It is a draw');
}
*/

/*Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉 


const scoreDolphins = (96 + 112 + 101)/3;
const scoreKoalas = (109 + 95 + 123)/3;
console.log( scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins>=100){
    console.log( 'Dolphins won');
} else if(scoreKoalas > scoreDolphins && scoreKoalas>=100) {
    console.log('Koalas won');
} else if(scoreDolphins===scoreKoalas){
    console.log('Both won');
} */

/* Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy 

Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 


const scoreDolphins = (97 + 112 + 106)/3;
const scoreKoalas = (109 + 95 + 101)/3;
console.log( scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins>=100){
    console.log( 'Dolphins won');
} else if(scoreKoalas > scoreDolphins && scoreKoalas>=100) {
    console.log('Koalas won');
} else if(scoreDolphins===scoreKoalas && scoreKoalas >= 100 && scoreDolphins >=100){
    console.log('Both won');
} else {
    console.log('Nobody wins');
}*/
/*
const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
        case 'tuesday':
            console.log('Prepare theory videos');
            break;
        case 'wednesday':
        case 'thursday':
            console.log('Write code examples');
            break;
        case 'friday':
        console.log('Record videos');
        break;
        case 'staurday':
        case 'sunday':
            console.log('Enjoy the weekend :D');
            break;
            default:
                console.log('Not a valid day')

}

if(day === 'monday'){
    console.log('moday1');
    console.log('moday1');

} else if( day ===' tuesday'){
    console.log('tuesday!');
} else if( day === 'wednesday' || day==='thursday')
{ console.log('Write code examples');

}else if ( day === 'friday'){
    console.log('Record videos!');
}else if(day === 'saturday' || day==='sunday' ){
    console.log('Enjoy the weekend :D');
}else{
    console.log('not a valid day!');
}
*/




--------------------------------------------------------------------------------------------------------------------------------------
/*The switch Statement 
Use a switch statement to log the following string for the given 'language': 
chinese or mandarin: 'MOST number of native speakers!' spanish: '2nd place in number of native speakers' english: '3rd place' hindi: 'Number 4' 
arabic: '5th most spoken language' 
for all other simply log 'Great language too :D' 

const language = 'spanish';

switch (language) {
   
case 'chinese': case 'mandarin':
    console.log('Most number of native speakers');
    break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
        case 'arabic':
            default:
            console.log('5th most spoken language')
            
        }
       
const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
        case 'tuesday':
            console.log('Prepare theory videos');
            break;
        case 'wednesday':
        case 'thursday':
            console.log('Write code examples');
            break;
        case 'friday':
        console.log('Record videos');
        break;
        case 'staurday':
        case 'sunday':
            console.log('Enjoy the weekend :D');
            break;
            default:
                console.log('Not a valid day')

}*/

//STATEMENTS AND EXPRESSIONS

 
//CONDITIONAL OPERATOR
/*
const age = 23;
age >= 18 ? console.log('I like to drink wine') :
console.log('I liketo drink water');

const drink = age >= 18 ? 'wine': 'WATER';
console.log(drink); 

console.log('I like to drink ')*/






--------------------------------------------------------------------------------------------------------------------------------------------------------------
//CODING CHALLENGE 4
/* Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%. 
Your tasks: 
1.	Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!) 
2.	Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25” 
Test data: 
§	Data 1: Test for bill values 275, 40 and 430 
Hints: 
§	To calculate 20% of a value, simply multiply it by 20/100 = 0.2 
§	Value X is between 50 and 300, if it's >= 50 && <= 300 😉 



const bill = 275; 
const tip = bill <= 300 && bill >= 50 ? bill* 0.15:
bill* 0.2;


console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/



'use strict';
/*
let hasDriversLicence = false;
const passTest = true; 

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log('I can drive');

const interface = 'Audio';


function logger(){
console.log('My name is Jonas');
}
// calling / running / invoking the function

logger();
logger();

function fruitProcessor(apples, oranges){
    
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice; 
}


const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));
 

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23')



-----------------------------------------------------------------------------------------------------------------------------------
//ANGELA TUTORIAL SHORT PART 

function lifeInWeeks(age) {
    
    var yearsRemaining = 90 - age;
    var days = yearsRemaining *365;
    var weeks = yearsRemaining *52;
    var months = yearsRemaining *12;

    console.log(`You have ${days} days, ${weeks} weeks, and ${months} months left.`);

}

lifeInWeeks(12);
    /************Don't change the code above************/    
        
        //Write your code here.
      
        //FUNCTION DECLARATION
/*function calcAge1(birthYear){
    //const age = 2021 - birthYear;- NO NEED FOR THIS LINE WHEN WE RETURN
    return 2021 - birthYear; 

}

const age1 = calcAge1(1986);
console.log(age1);

//FUNCTION EXPRESSION

const calcAge2 = function (birthYear) {
    return 2021 - birthYear;

}

const age2 = calcAge2(1991);

console.log(age1, age2);



----------RANDOM YOUTUBE TUTORIAL EXPLANATION IN CROATIAN----------------------------------------------------------------------------------------------------------

function parkiraliste(parkingMjesto) {
console.log(`Parkiran je ${parkingMjesto}`);
}

//parkiraliste('crveni');
//parkiraliste('zeleni');
//parkiraliste('crni');

function ucionica(predavac) {
    return `Danasnji predavac je ${predavac}`;
}

console.log(ucionica('Pera'));
console.log(ucionica('Mira'));

*/
/*
function logger () {
    console.log('My name is Jonas');
}

//calling/running/invoking function

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
 
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//Function declaration
function calcAge1(birthYear){
    const age = 2037 - birthYear;
    return 2037 - birthYear; 
}

const age1 = calcAge1(1991);
console.log(age1);
//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);









------------------------------------------------------------------------------------------------------------------------------------
//arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear,  firstName) => {
    const age = 2027-1986;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob' ));
*/
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
 const applePieces = cutFruitPieces(apples);
 const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
fruitProcessor(2,3);

-PART 3 in development

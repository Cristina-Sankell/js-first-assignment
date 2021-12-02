// Answer to question:
// It is not necessary to use () to calculate the area of the triangles because 
//multiplication and division have the same operator precedence. The outcome is the same either way.

//CASE 1

const triangleOne = 10 * 13 / 2;
//console.log (triangleOne);
//const triangleOneAgain = (10 * 13) / 2;
//console.log (triangleOneAgain);
//const triangleOneYetAgain = 10 * (13 / 2);
//console.log (triangleOneYetAgain);
//checked to see that calculation was correct

const triangleTwo = 16.5 * 20.3 / 2;
//console.log (triangleTwo);
//checked to see that calculation was correct

console.log 
(`Triangle 1 has an area of ${triangleOne} cm2 and triangle 2 has an area of ${triangleTwo} cm2. The triangle with the biggest area is 
    ${triangleOne > triangleTwo ? "triangle 1" 
    : triangleOne === triangleTwo ? "both, because they have the same area." 
    : "triangle 2"}`);


//CASE 2

const triangleThree = 16.5 * 20.3 / 2;
//console.log (triangleThree);
//checked to see that calculation was correct

const triangleFour = 16.5 * 20.3 / 2;
//console.log (triangleFour);
//checked to see that calculation was correct

console.log 
(`Triangle 3 has an area of ${triangleThree} cm2 and triangle 4 has an area of ${triangleFour} cm2. The triangle with the biggest area is 
    ${triangleThree > triangleFour ? "triangle 3" 
    : triangleThree === triangleFour ? "both, because they have the same area." 
    : "triangle 4"}`);


//CASE 3

const triangleFive = 7.8 * 5.6 / 2;
//console.log (triangleFive);
//checked to see that calculation was correct

const triangleSix = 9.3 * 12.4 / 2;
//console.log (triangleSix);
//checked to see that calculation was correct

console.log 
(`Triangle 5 has an area of ${triangleFive} cm2 and triangle 6 has an area of ${triangleSix} cm2. The triangle with the biggest area is 
    ${triangleFive > triangleSix ? "triangle 5" 
    : triangleFive === triangleSix ? "both, because they have the same area." 
    : "triangle 6"}`);


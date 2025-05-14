// Activity 1 Code
const PI = 3.14;
let radius = 3;
let area = 0;

console.log("Patrick T. Edgett \n\n");
console.log("Before Math ", radius, area)

area = radius * radius * PI;
radius = 4;
area = radius * radius * PI;

console.log("Area of a circle ", area);
console.log("Radius of a circle ", radius);

// Activity 2 Code

debugger;
function circleArea(radius) {
    const area = radius * radius * PI;
    return area;
}

area = circleArea(3);
console.log("Function of Area1", area);

area = circleArea(4);
console.log("Function of Area2", area);
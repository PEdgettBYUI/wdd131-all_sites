//  arrays.js
document.addEventListener('DOMContentLoaded', () => {

// Activity 1 - Map1
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;//the html string made from step
}
// use map to convert the list from strings to HTML
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join('');


// Activity 2 - Map2
const grades = ['A', 'B', 'A'];

function letterToGPA(letter) {
    let points = 0;
    if (letter === 'A') {
        points = 4;
    }
    else if (letter === 'B') {
        points = 3;
    }

    return points;
}

const gpaPoints = grades.map(letterToGPA);
// console.log(gpaPoints);

// Activity 3 - Reduce
const gpaPoints2 = grades.map(letterToGPA);

const pointsTotal = gpaPoints2.reduce(function (total, item) {
    return total + item;    //Takes the GPA, reduces it into a running "total" and each "item" in the array
});

const gpa = pointsTotal / gpaPoints2.length; // Find Average GPA
console.log(gpa)

});

// Activity 4 - Filter
const fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortFruits = fruit.filter(function (fruit) {
    return fruit.length < 6;
});
console.log(shortFruits);

// Activity 5 - indexOf
const numbs = [12, 34, 21, 54];

const luckyNumber = 21;
let luckyIndex = numbs.indexOf(luckyNumber);
console.log(luckyIndex);



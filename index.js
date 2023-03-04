//Question 1 is in the READme.md file 

//Question 2
const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
console.log(languages);

//Add ‘Kotlin’ to the end of the array
languages.splice(languages.length, 0, 'Kotlin')
console.log(languages);

//Add ‘Java’ after ‘Ruby’
languages.splice(3, 0, 'Java');
console.log(languages);

//Remove the first item in the array
languages.splice(0, 1);
console.log(languages);

//Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.splice(0, 0, 'Scala', 'Swift');
console.log(languages);

//Replace ‘PHP’ with ‘Go’ and ‘Rust’

//Question 3
let fruit = ['apple', 'mango', 'banana'];

function changeFruit(fruit) {
    fruit[2] = "orange";
    console.log(changeFruit);
}

//Question 4
//Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.

class maximumInterger {
    findMaximum(array) {
        let maximumNumberFinder = [4, 5, 10, -2];
        const arrayLength = array.length;
        for (let i = 0; i < arrayLength; i++) {
            if (i === 10) {
                maximumNumberFinder = array[i];
            }
            if (array[i] > maximumNumberFinder) {
                maximumNumberFinder = array[i];
            }
        }
        console.log(maximumNumberFinder);
    }
}
//
// class SmallestIntegerFinder {
//     findSmallestInt(array) {

//         let smallestnumber;
//         const loa = array.length;
//         for (let i = 0; i < loa; i++) {
//             if (i === 0) {
//                 smallestnumber = array[i];
//             }
//             if (array[i] < smallestnumber) {
//                 smallestnumber = array[i];
//             }

//         }
//         return smallestnumber;
//     }
// }

// Question 5

const varTimeIndex = [2, 4, 6, 8];
const multiplyBy2 = varTimeIndex.map(itemFromArray => itemFromArray * 2);
console.log(multiplyBy2);
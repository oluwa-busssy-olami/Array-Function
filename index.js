//Question 1 
//1a) MUTATING ARRAY METHOD AND NON MUTATING ARRAY METHOD

//i)Mutating array use buit in array method to make change to an array of oject; also the change made, changes the sequence of initial variable declared because it point to the sam refernce.

//ii) Non-mutating array; the method don not cause a change in the original arrays declared.

//1b List five examples each
//i) Mutating Array Method Example
// array.push()
// array.unshift()
// array.reverse()
// array.splice()
// array.sort()

// // ii) Examples of non mutating Array method
// array.slice()
// array.concat()
// array.map()
// array.filter()
// array.reduce()

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
    return fruit;
}
console.log(changeFruit(fruit));




//Question 4
//Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function findMax(numbers) {
    let max = numbers[0]

    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] > max) {
            max = numbers[index]
        }

    }
    return max;
}
let max = findMax(numbers)
console.log(max);
//


// Question 5

const varTimeIndex = [2, 4, 6, 8];
const multiplyBy2 = varTimeIndex.map(itemFromArray => itemFromArray * 2);
console.log(multiplyBy2);
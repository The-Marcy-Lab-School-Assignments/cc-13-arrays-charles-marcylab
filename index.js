//write your code here
// Declare a function called averageInArray

// intailize with one parameters called numbers

// declare a variable called average intailized to 0

// create a for loop to iterate over array to get every element in array

// in the loop: add every element to the average variable

// after the loop(outside the scoop of the for loop): divide average by the length of the array.

// use array.length() of find how many elements are in the array

function averageInArray(numbers){
 let average = 0;
 for(let i = 0; i < numbers.length; i++) {
    average += numbers[i];
  }
  average = average / numbers.length;
  return average
}

console.log(averageInArray([2,2,2,2,2,]))
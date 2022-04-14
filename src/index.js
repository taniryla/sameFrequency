// // We have to understand the problem.
// // 1. What is the unknown?
// find out if the two numbers have the same frequency of digits
// must have a time complexity of 0(N)
// // 2. What are the data inputs?
// Two positive integers
// // 3. Can you restate the problem in your own words?
// if the data input for int1 is N = 1234567890, count the frequency of all the digits in
// key:value pairs and count the same for char2 in int2...
// then compare if the frequency of digits is the same in int1 and int2

// int1

// 1: 1
// 2: 1
// 3: 1
// 4: 1
// 5: 1
// 6: 1
// 7: 1
// 9: 1
// 0: 1

// int2
// N = 1337

// 1: 1
// 3: 2
// 7: 1

// loop through each item of the array for int1 and int2,
// and see if the value in the key:values match

// We have a time complexity of O(N) and so no nested for loops allowed

// // 4. Can the unknown be determined from the data inputs?
// yes we'd have to split the number into individual char and then for loop through and check if any char match

// // 5. Is the data inputs sufficient to determine the unknown? Insufficient? Redundant? Contradictory?
// be sure to have logic "if data input is a positive integer"... string won't cut it

// // 6. How should I label important pieces of data input that are a part of the problem?
// int1, int2

// // 7. Draw a figure. Introduce suitable notation.
// not needed

// // 8. Separate the various parts of the condition. Can you write them down?

// // Come up with concrete examples to help you understand the problem better. Find a connection between the data inputs and the unknown. You may be obliged to consider auxiliary problems if an immediate connection cannot be found.
// // 9.  Have you seen it before? Or have you seen the same problem in a slightly different form? Do you know a related problem?
// related to charCount as char1 into key:value pair and compare with char2 key:value pair
// // 10.   Do you know a coding strategy that could be useful? Look at the unknown! And try to think of a familiar problem having the same or a similar unknown. Here is a problem related to yours and solve before. Could you use it? Could you use its result? Could you use its method?
// for loop
// recursion not necessary cos not a binary search tree

// // 11.    Should you introduce some auxiliary element in order to make its use possible?
// not needed

// // 12. Start with a simple example. Could you restate the problem? Could you restate it still differently?
// sameFrequency(10001, 2431);

// // 13. What about examples with empty inputs? Any other edge case examples? What examples with invalid inputs?
// could use a regex or if statement i think should suffice

// // 14. Progress to more complex examples. What is your updated plan here to find a solution?
// without nested for loops, how can I loop two separate loops and make two arrays to filter obj1 as an indexOf obj2?

// // 15. If you still cannot solve the proposed problem, try to solve first some related problem. Could you imagine a more accessible related problem? A more general problem? A more special problem? An analogous problem? Could you solve a part of the problem? Keep only a part of the data inputs, drop the other part; how far is the unknown then determined, how can it vary? Could you derive something useful from the data? Could you think of other data appropriate to determine the unknown? Could you change the unknown or the data, or both if necessary, so that the new unknown and the new data are nearer to each other? Did you use all the data? Did you use the whole of the data inputs? Have you taken into account all essential notions involved in the problem?
// trying to solve like countChar first

// // Carry out your plan of the solution and check each one of your steps in pseudocode.
// // 16.  Can you see clearly that the step is correct?
// pseudocode below
// IV. 	Examine the solution obtained and refactor.
// 17.  Can you check your result?
// 18.  Can you check the argument?
// 19.  Can you derive the result differently?
// 20.  Can you see it at a glance?
// 21.  Can you make the code DRYer and refactor?
// 22.  Can you improve the performance?
// 23.   How have other people solved this problem?

function sameFrequency(int1, int2) {
  let obj1 = {};
  let obj2 = {};

  let newObj = {};
  if (typeof int1 === "number" && typeof int2 === "number") {
    // convert to string first and break down int 1 and int2 into individual char1 and char2 characters
    let char1 = int1.toString().split("");
    let char2 = int2.toString().split("");
    // loop through all char1 or char2 and compare if anything matches

    for (let i = 0; i < char1.length; i++) {
      let key1 = char1[i];
      // let key2 = char2[i];
      if (obj1[key1] > 0) {
        obj1[key1] += 1;
      } else {
        obj1[key1] = 1;
      }
      console.log(obj1);
    }

    for (let j = 0; j < char2.length; j++) {
      let key2 = char2[j];
      // let key2 = char2[i];
      if (obj2[key2] > 0) {
        obj2[key2] += 1;
      } else {
        obj2[key2] = 1;
      }
      console.log(obj2);
    }

    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) return false;
    }
    return true;
  }
}

console.log(sameFrequency(20004, 923440));

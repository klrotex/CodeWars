// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
   let countPositive = 0;
   let countNegative = 0;
   let res = [];

   if (input == null) {
      res = []
   } else {
      for (let i of input) {
         if (i > 0) {
            countPositive += 1;
         }
         if (i < 0) {
            countNegative += i;
         }
         res[0] = countPositive;
         res[1] = countNegative;
      }
   }
   return res;
}
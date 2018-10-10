'use strict';

// input: [128, 97, 121, 123, 98, 97, 105]
// output: 26

function findMaxProfit(arr) {
  if (arr.length < 2) {
    return;
  }

  let maxProfit = 0;
  let purchPrice = arr[0];
  for (let i=1; i<arr.length; i++) {
    let profit = arr[i] - purchPrice;
    if (profit > maxProfit) maxProfit = profit;
  }

  let recurProfit = findMaxProfit(arr.slice(1));
  if (recurProfit > maxProfit) maxProfit = recurProfit;

  return maxProfit;
}

console.log(findMaxProfit([128, 97, 121, 123, 98, 97, 105, 93]));
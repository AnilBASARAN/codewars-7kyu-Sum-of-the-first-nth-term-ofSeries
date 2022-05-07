function SeriesSum (n) {
    if(n == 0){
      return "0.00"
    }
    console.log(n)
  let sum = 1
  for(let i = 0 ; i < n-1 ; i ++){
    sum = sum + 1/(4+(3*i))
    }
   console.log(sum.toFixed(2))
    return sum.toFixed(2)
  }

  /*

7kyu Sum of the first nth term of Series


  Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript


BEST SOLUTİONS

function SeriesSum(n) {
  return Array(n).fill(0).map((e, i) => 3 * i + 1).reduce((s, e) => s + 1 / e, 0).toFixed(2);
}

------------------------------------------------------------------------------------------------
const { range } = require('lodash')

const reducer = (a, i) => a + 1 / (1 + i * 3)

const SeriesSum = (n) => range(n).reduce(reducer, 0).toFixed(2)
------------------------------------------------------------------------------------------------
function SeriesSum(n)
{
  var s = 0;
  while(n) {
    s += 1/(1 + 3 * --n);
  }
  return s.toFixed(2);
}
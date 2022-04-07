/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
  if (Math.random() > 0.5) {
    return "heads";
  } else {
    return "tails";
  }
}

// console.log(coinFlip())

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
  const res = [];
  for(let step = 0; step < flips; step++) {
    res[step] = coinFlip();
  }
  return res;
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(array) {
  let head_count = 0;
  let tail_count = 0;
  for(let step = 0; step < array.length; step++) {
    if (array[step] == "heads") {
      head_count++;
    } else if (array[step] == "tails") {
      tail_count++;
    }
  }
  if (head_count == 0) {
    return {'tails': tail_count}
  } else if (tail_count == 0) {
    return {'heads': head_count}
  } else {
    return {'heads': head_count, 'tails': tail_count}
  }
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(call) {
  let flipped = coinFlip();
  let result = "lose";
  if (flipped == call) {
    result = "win";
  }
  return "{ call: " + call + ", flip: " + flipped + ", result: " + result + " }";
}


/** Export 
 * 
 * Export all of your named functions
*/
export { coinFlip, coinFlips, countFlips, flipACoin }
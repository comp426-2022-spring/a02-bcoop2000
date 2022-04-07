// Import the functions from your coin.mjs file
import { coinFlip, coinFlips, countFlips } from "./modules/coin.mjs";
// process the command line arg

import minimist from 'minimist';
const args = minimist(process.argv.slice(2));
let number = args['number'] || 1;
// import yargs from 'yargs';
// const args = yargs(process.argv.slice(2)).argv;
// let number = args.number;
// check for errors
// if (process.argv.length == 2) {
//     number = 1;
// }
// Call the coinFlips function and put the return into STDOUT
const myFlips = coinFlips(number);

console.log(myFlips)
console.log(countFlips(myFlips))
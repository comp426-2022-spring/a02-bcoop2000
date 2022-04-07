// Import the functions from your coin.mjs file
import { flipACoin } from "./modules/coin.mjs";
// process the command line arg

import minimist from 'minimist';
const args = minimist(process.argv.slice(2));
let call = args['call'] || 1;
// import yargs from 'yargs';
// const args = yargs(process.argv.slice(2)).argv;
// let call = args.call;
// check for errors
if (call == 1) {
    console.error("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");
}
if (call != "heads" && call != "tails") {
    console.error("Usage: node guess-flip --call=[heads|tails]");
}
// Call the coinFlips function and put the return into STDOUT
console.log(flipACoin(call))
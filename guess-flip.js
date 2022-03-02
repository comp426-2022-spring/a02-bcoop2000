// Import the functions from your coin.mjs file
import { flipACoin } from "./modules/coin.mjs";
// process the command line arg

// import minimist from 'minimist';
// const args = process.argv.slice(2);
// let number = args['number'];
import yargs from 'yargs';
const args = yargs(process.argv.slice(2)).argv;
let call = args.call;
// check for errors
if (process.argv.length == 2 | (call != "heads" && call != "tails")) {
    console.error("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");
    process.exit(1);
}
// Call the coinFlips function and put the return into STDOUT
console.log(flipACoin(call))
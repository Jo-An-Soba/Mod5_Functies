import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/* Schrijf een functie waar je een naam als parameter kan meegeven. 
Deze functie zal een persoonlijke begroeting naar de console loggen.*/



function naam(vn, an){

console.log("Hallo " + vn + " " + an);
}
naam("An", "Kar");



process.exit(); 

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/* Schrijf een functie dat de factorial van een getal gaat berekenen. 
Je kan de factorial van een getal berekenen door alle getallen tussen 1 en het gegeven getal met elkaar te vermenigvuldigen, 
bijvoorbeeld voor 5:
factorial van 5 (ook wel geschreven als !5) = 1 x 2 x 3 x 4 x 5 = 120

Indien de gebruiker een getal lager dan 1 ingeeft mag je een console.error() gebruiken om een foutmelding weer te geven.
*/

function factorial(getal){

    let teller = 1;
    let produkt = 1;
    while(teller <=getal){
                
        produkt *= teller;
        teller++;
        
    }
    return produkt;
}

let uitkomst = factorial(5);

console.log(uitkomst);

process.exit(); 

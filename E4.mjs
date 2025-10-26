import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/* Schrijf een functie dat een temperatuur van Farenheit naar Celcius kan omzetten of omgekeerd van Celcius naar Fahrenheit. 
Deze functie zal twee parameters aanvaarden: temperatuur en isCelcius (dat true of false kan zijn). 
Zorg ervoor dat deze functie de waarde zal terugsturen en zelf geen output heeft.

0°C → (0 × 1,8) + 32 = 32°F

68°F → (68 − 32) × 5/9 = 36 × 5/9 = 20°C

*/



function berekenTemp(temperatuur, isCelcius){
    
    if(isCelcius==true){

        let temperatuurFar = (temperatuur * 1,8) + 32;
        return temperatuurFar;

    }else if(isCelcius==false){

        let temperatuurCel = (temperatuur / 1,8) - 32;
        return temperatuurCel;
    }
}

let uitkomst = berekenTemp(5, true);

console.log(uitkomst);


process.exit(); 

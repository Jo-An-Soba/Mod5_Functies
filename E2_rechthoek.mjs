import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/* Schrijf functies om de oppervlaktes van de volgende vormen te berekenen:
o	
o	driehoek: basis x hoogte gedeeld door 2
o	rechthoek: zijde1 x zijde2
o	vierkant: zijde x zijde
 
Zorg ervoor dat je functie om de oppervlakte van een vierkant te berekenen 
de functie om de oppervlakte van een rechthoek te berekenen gebruikt. 

Zorg ervoor dat al deze functies de waardes terugsturen en zelf geen output hebben.
.*/


function driehoek(basis, hoogte){
let oppDriehoek = (basis * hoogte) / 2;
return oppDriehoek;

}

let uitkomstDriehoek = driehoek(6, 3);

console.log("De oppervlakte van deze driehoek is " + uitkomstDriehoek);

let uitkomstRechthoek = uitkomstDriehoek *2;
console.log("Een rechthoek met deze afmetingen zou een oppervlakte hebben van " + uitkomstRechthoek);

process.exit(); 

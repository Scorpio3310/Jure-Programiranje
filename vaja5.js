console.log("%cVaja 5", "color:red; font-size: 24px; font-weight: 700;");
// Vaja 5 - Funkcije

//y = f(x) // Simple matematična funkcija

//let vnos = prompt("Vpiši nekaj"); // kot funkcija f(x);

// Pridobi vnos od uporabnika
// Zračunaj rezultat glede na vnos
// Izpiši rezultat

/*
let vnos = pridobiVnos("To se izpiše");
let rezultat = izracunajVrednost(vnos);
izpisiRezultat(rezultat)
*/

// Uporaba funkcije 
//let vnos = prompt("To je test");


/*
// Defenicija funkcije
function imeFunkcije (steviloZaposlenih){  //steviloZaposlenih samo ime kaj notri pošleš, ne vpliva na kakšne podatke
    let rezultat = steviloZaposlenih * 2;

    // ...
    // ...
    // ...

    return rezultat; // to konča funkcijo in je zadnji del funkcije
}

// null vrednost
let x = null; //če želiš nastaviti na neko nedefinirano vrednost (object)


// Praktičen primer
function jeDeljivo(stevilo, deljitelj){
    // preveri ali 'delitelj' deli 'število'
    if(stevilo % deljitelj == 0){
        return true;
    }else{
        return false;
    }
}

// nafilamo podatke
for(let i = 0; i < 1000; i++){
    if(jeDeljivo(i, 2) && !jeDeljivo(i,5)){
        console.log(i + " - je prav")
    }
}

function test(drugaFunkcija){
    drugaFunkcija(100,2);
}
test (jeDeljivo); //če hočeš klicati funkcijo v funkcijo moraš dati brez "()"

*/



// Napiši funkcijo, ki sprejme število in vrne kvadrat tega števila

function kvadrat(stevilo){
    let izracun = stevilo * stevilo;
    return izracun;
}

console.log(kvadrat(5))




// Napiši funkcijo, ki sprejme ime in priimek in vrne skupno ime

function zdruzi(ime, priimek){
    return ime + " " + priimek; //opcija 2
}
console.log(zdruzi("Jure","Bevc"))




// Napiš funkcijo, ki sprejme 3 števila in vrne povprečje teh števil

function povprecje (stevilo1, stevilo2, stevilo3){
    let rezultat = (stevilo1 + stevilo2 + stevilo3)/3
    return rezultat;
}
console.log(povprecje(3,4,5))



// Napiš funkcijo, ki sprejme 3 števila in vrne največje

function najvecjeStevilo(stevilo1, stevilo2, stevilo3){ //Rešitev 1
    if(stevilo1 > stevilo2) {
        // 1 je večje od 2
        if(stevilo1 > stevilo3)
        {
            return stevilo1;
        }else{
            return stevilo3;
        }
    }else{
        // 2 je večje od 1
        if(stevilo2 > stevilo3) {
            return stevilo2;
        }else {
            return stevilo3;
        }

    }
}

function najvecjeStevilo2(stevilo1, stevilo2, stevilo3){ //Rešitev 2
    let najvecje = stevilo1;
    if(stevilo2 > najvecje){
        najvecje = stevilo2;
    }
    if(stevilo3 > najvecje){
        najvecje = stevilo3;
    }
    return najvecje;
}

console.log(najvecjeStevilo2(1,2,3))
console.log(najvecjeStevilo2(5,2,3))
console.log(najvecjeStevilo2(1,6,3))


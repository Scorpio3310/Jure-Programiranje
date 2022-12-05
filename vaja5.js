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

// Domača naloga
/*
1. Napiši funkcijo "ratio", ki sprejme dve številki, deli manjšo številko z večjo in vrne rezultat. Katera vhodna številka je večja, ni znano vnaprej.
Primeri:
ratio(1, 2) -> 0.5
ratio(2, 1) -> 0.5
ratio(4, 2) -> 0.5

ratio(4, 1) -> 0.25
2. Napiši funkcijo "captureFinished", ki preverja ali se lahko zajem pri določeni stranki zaključi. Funkcija sprejme število zaposlenih in število rešenih vprašalnikov, nato vrne "true", če je vprašalnik rešilo več kot 90% zaposlenih, sicer naj vrne "false".
Primeri:
captureFinished(100, 80) -> false
captureFinished(100, 95) -> true

3. Napiši funkcijo "repeatString", ki sprejme niz "word" in številko "n". Funkcija naj vrne nov niz, ki je n-ponovitev vhodnega niza.
Primeri:
repeatString("a", 3) -> "aaa"
repeatString("aaa", 2) -> "aaaaaa"
repeatString("banana", 0) -> ""
*/

console.clear();

function ratio(stevilo1, stevilo2) {
    if(stevilo2 > stevilo1){
        return stevilo1/stevilo2;
    }else {
        return stevilo2/stevilo1;
    }
}

console.log(ratio(1, 2));
console.log(ratio(2, 1));
console.log(ratio(4, 2));



function captureFinished(steviloZaposlenih, steviloResenihVprasalnikov) {
    if((steviloResenihVprasalnikov/steviloZaposlenih) >= 0.9){
        return true;
    }else {
        return false;
    }
}

console.log(captureFinished(100, 80));
console.log(captureFinished(100, 95));



function repeatString(word, n) {
    let repeat = "";
    for(let i = 0; i < n; i++){
        repeat = repeat + word;
    }
    return repeat;
}

console.log(repeatString("a", 3));
console.log(repeatString("aaa", 2));
console.log(repeatString("banana", 0));
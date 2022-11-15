

console.log("%cVaja 1", "color:red; font-size: 24px; font-weight: 700;");
/*
Vaja 1

Pozavanje 5 konceptov za osnovo:
    #1 Spremenljivke
    #2 If stavki 
    #3 Zanke
    #4 Funkcije
    #5 Podatkovne strukture
*/

console.log("Hello - Banana");

/*
    Spremenljivke služijo za shranjevanje vrednosti

    Defenicija spremenljivke:
        - let
*/

let x = 5; //Začetna vrednost
console.log(x);
x = 10; //Prepiše z novo vrednostjo
console.log(x);

let beseda = "Avto";
console.log(beseda);

/* 
    IF stavki - pogojni stavki 
    če neka trditev drži
*/

//Verzija 1
let stevilo = 11;
if (stevilo > 10){
    console.log("Veliko");
}
if (stevilo < 10){
    console.log("Malo");
}

//Verzija 2
let a = 100;
if (a > 100){
    console.log("Veliko");
}
else {
    console.log("Malo");
}


// Verzija 3
let b = 5;
if (b > 100){
    console.log("Veliko");
}
else if(b > 50) {
    console.log("Zmerno veliko");
}
else {
    console.log("Malo");
}

//console.clear();

/* 
    Homework:
    Napiši js program, ki defenrira spremeljivko 'a' in jo nastavi na vrednost. Program nato izpiše vrednost spremenljivke, če je ta večja od 50, sicer pa izpiše "banana". Program sprobaj še za vrednosti a: 25, 50, 75
*/

//Fukncija - Rešitev 1

hw = 25;
if (hw > 50){
    console.log("Banana");
} else {
    console.log(hw);
}

hw = 50;
if (hw > 50){
    console.log("Banana");
} else {
    console.log(hw);
}

hw = 75;
if (hw > 50){
    console.log("Banana");
} else {
    console.log(hw);
}



//console.clear();

//Fukncija - Rešitev 2

function if_stavek (x){
    if (x > 50){
        console.log("Banana");
    } else {
        console.log(x);
    }
}

if_stavek (25);
if_stavek (50);
if_stavek (75);


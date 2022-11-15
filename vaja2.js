console.log("%cVaja 2", "color:red; font-size: 24px; font-weight: 700;");
// Vaja 2

let n = 45; //Intiger, cela števila
let m = 45.6; //Float, decimalna števila
let k = "Banana"; //String, niz
let h = true // Boolean, Bool

// == // "45" === 45 - True
// === // bolj strog "45" === 45 - vrže error

// != ni enako
// <= manjše ali enako
// >= večje ali enako
// Izpis -> console.log
// Preberi vrednost (uporašbniški vnos) -> prompt("to se prikaže uporabniku.") - vedno vrne vn string

//Pretvorba iz stringa v int parseInt(x)


/*
if(n == 46){
    console.log("ananas");
}

let vnos = prompt("Vnesi število:");
let stevilka = parseInt(vnos); // pretvorli v stevilko
let izpis = stevilka + 5; // se je seštelo ks ta oba int
console.log(izpis);
*/

// Vaja 1
/*
let vnos = prompt("Vnesi število:");
let stevilka = parseInt(vnos); // pretvorli v stevilko

if (stevilka > 100){ //true
    console.log("Velika številka");
}else { //false
    console.log("Ups številka je manjša od 100. Vpisana številka je: "+ stevilka);
}
*/

// Operatorji >,<, =, +, *, /, =<, =>, ===

/* 
    || - OR, ALI
    && - IN, AND
    % - Ostanek pri celem številčem deljenju 

    x || y -> z (OR)
    false || true -> true
    true || false -> true
    false || false -> false
    true || true -> true

    x && y -> z (AND)
    false && true -> false
    true && false -> false
    false && false -> false
    true && true -> true

    Celoštevilko deljenje-ostanek (%);
    x % y -> z
    5 % 4 -> 1
    15 % 4 -> 3

    5 deli 115? DA
    234 deli 30120335? - zato mamo % in če je 0 je deljivo
*/

let u = 5;
if (u > 1 || u < 3){ // prvi pogoj je resničen k je večji od 5, drugi pogoj ne drži
    console.log("to drži")
}

if (u < 10 && u > 11){ //to se nebo izpisalo, ker drugi pogoj ne drži
    console.log("to drži")
}

if ((u > 1 && u < 10) || (u > 3 && x < 5 && u < 10)){ // se izpiše, ker prvi pogoj drži ()
    console.log("to drži")
}

let l = 123;
if((l % 7) == 0){
    console.log("je deljivo z 0");
}else{
    console.log("ostanek je: "+(l % 7));
}


/*
    Homework 2: Napiši JS program, ki od uporabnika prebere številko in izpiše "Kolo" če je številka deljiva s 5 ali 7, sicer pa izpiše "Avto"
*/

let vnos = prompt("Vnesi število:");
let stevilka = parseInt(vnos); // pretvorli v stevilko
if (((stevilka % 5) == 0) || ((stevilka % 7) == 0)){
    console.log("Kolo");
}else {
    console.log("Avto");
}
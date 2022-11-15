console.log("%cVaja 3", "color:red; font-size: 24px; font-weight: 700;");
// Vaja 3 - Zanke

// Ponovitev vaje 2 

/*
let a = 7;

if (a > 10 && a == 20) {
    console.log("Banana");
} else if(a > 5) {
    console.log("mogoče")
}
else {
    console.log("Ni res");
}

*/

// Zanke
// Isto stvar hočeš večkrat pognat
// dve vrsti tip zank

let a = 0;

// Prva različica - WHILE

while(a < 5){
    console.log(a);
    a = a + 1; // ali
    // a++; ali
    // a+=1;
}

console.log("--");

// Druga različica - FOR

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.clear();

// Vaja 1
// Izpiši vsako drugo številko do 1000
for (let d = 0; d < 1000; d+=2) {
    console.log(d);
}

console.clear();

// Vaja 2
// Seštej vsa števila, do 1000, ki so deljiva z dve

let sestevek = 0;

for (let e = 0; e < 1000; e+=2) {
    sestevek = sestevek + e;
    /*
    console.log("---");
    console.log(e);
    console.log(sestevek);
    console.log("---");
    */
}

console.log(sestevek);
console.clear();

// Vaja 3
// Seštej vsa števila, do 1000, ki so deljiva z tri (3) in ne pet (5)

let sestevek_e = 0;

for (let ee = 0; ee < 1000; ee+=1) {
    if (ee % 3 == 0 && ee % 5 != 0){
        sestevek_e = sestevek_e + ee;
    }
}

console.log(sestevek_e);
console.clear();

// Domača naloga: Napiši JS program, ki od uporabnika pobere številko in sešteje vsa števila do opisane številke, ki so manjša od 20 ali deljiva z 5

let vnos = prompt("Vnesi število:");
let vnesena_stevilka = parseInt(vnos); // pretvorli v stevilko

/*

let sestevek_a = 0;

for (vnesena_stevilka; sestevek_a < vnesena_stevilka; vnesena_stevilka+=1) {
    if (vnesena_stevilka < 20 || vnesena_stevilka / 5){
        sestevek_a = sestevek_a + vnesena_stevilka;
    }
}
console.log(sestevek_a);
*/

let sestevek_r = 0;
for (let o = 0; o < vnesena_stevilka; o++){
    if (o < 20 || o % 5 == 0) {
        sestevek_r = sestevek_r + o;
    }
}

console.log(sestevek_r);

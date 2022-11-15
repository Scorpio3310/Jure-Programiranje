console.log("%cVaja 4", "color:red; font-size: 24px; font-weight: 700;");
// Vaja 4 - Zanke

let a = 2;

while(a < 10) {
    console.log("test");
    a++;
}

// Da so vsi parametri na for napisani v eni enačbi

for (b = 0; b < 10; b++){
    console.log("test");
}

console.clear();

// 1 naloga: Napiši program, ki od uporabnika prebere številko in izpiše vsa soda števila do opisane številke.

//brake; continue; za if stavke

/*
let vnos = prompt("Vpiši številko");
let stevilka = parseInt(vnos);

for (let i = 0; i <= stevilka; i++) {
    if (i % 2 == 0){ // ali je sodo?
        console.log(i);
    }
}


console.log("VPISANO: "+stevilka);

*/

// 2 naloga: Napiši program, ki od uporabnika prebere številke in izpiše vsoto vseh opisanih številk dokler uporabnik ne vpiše -1.

// Rešitev 1

/*
let vnos = prompt("Vpiši številko");
let stevilka = parseInt(vnos);

let vsota = 0;

while (stevilka != -1){
    vsota = vsota + stevilka;

    vnos = prompt("Vpiši številko");
    stevilka = parseInt(vnos);

}

console.log(vsota);

*/

// Rešitev 2

/*
let vsota = 0;
let ponavljaj = true;

while (ponavljaj){
    let vnos = parseInt(prompt("Vpiši številko, za preklic vpiši '-1'"));

    if (vnos == -1){
        ponavljaj = false;
    }
    else {
        vsota=vsota+vnos;
        console.log(vsota);
    }
}

console.log("Končna vnosta: " + vsota);
*/

//Homework
// Napiši javascript program, ki deluje kot kalkulator. Od uporabnika prebere prvo številko, znak in drugo številko, nato pa izpiše rezultat glede na vpisane številke in znak. Po izpisanem rezultatu se postopek ponovi (ponovno se zahteva prvo številko, znak in drugo številko in rezultat). Postopek se ponavalja, dokler uporabnik ne vpiše "konec".

//Primer:
// Pojavi se okno "Vpiši prvo številko"
// Pojavi se okno "Vpiši operacijo (+ ali -)"
// Pojavi se okno "Vpiši drugo številko"
// Z 'console.log' ali z 'alert'
// Postopek se ponovi
// Pri katerem koli oknu lahko uporabnik vpiše 'konec'

console.log("%cVaja 6", "color:red; font-size: 24px; font-weight: 700;");
// Vaja 6 - Funkcije

// ENPS primer vprašalnika

/*
let vnos = prompt("Od 1 - do 10 oceni kako vjetno je, da bi podjetje priporočil drugim")
let pretvorba = parseInt(vnos);
if (pretvorba < 1 || pretvorba > 10){
    console.log("Napačen vnos");
}else {
    if(pretvorba >= 9) {
        console.log("Promotor!")
    }
    else if (pretvorba < 5){
        console.log("Kritik")
    }
    else {
        console.log("Pasivni akantiranci")
    }
}
*/


// Ugibanje številk


/*
let solution = 8;

while(true){
    let vnos = prompt("Ugani število")
    let pretvorba = parseInt(vnos);
    
    if (solution == pretvorba) {
        alert("Zmaga");
        break;
    }
    else {
        if (solution < pretvorba) {
            console.log("Napiši manjše število");
        }
        else {
            console.log("Napiši večje število");
        }
    }
}

/*


/* Zaključitev zanke
while(true) {
    if (a == 100) {
        break;
    }
}
*/

//continue; // začne naslednji loop

// 3. naloga: Igra - gambling; na začetku imaš nekaj kreditov in napišeš koliko kreditov si pripravljen vložiti v naslednjo igro
// Zatem izbereš ali bo kovanec heads ali tails; v ozadju se vrže kovanec, če si zadel dobiš 2x toliko denarja, če ne je izgubljen


/*
let credit = 10;

while (true){
    let vnos = prompt("Imaš "+credit+" kreditov. Koliko želiš tvegati");
    let pretvorba = parseInt(vnos);
    
    if (pretvorba >= credit || pretvorba < 1){
        console.log("Ne veljaven vnos");
        continue;
    }else {
        let izbira = prompt("cifra ali grb?");
        if(izbira == "cifra" || izbira =="grb"){
            let radnomNumber = Math.random();
            let kovanec = "cifra";
            if (radnomNumber > 0.5){
                kovanec = "grb";
            }
            console.log(kovanec);
            if (kovanec == izbira){
                credit = credit+pretvorba;
                console.log("Pravino!. Imaš "+credit+" kreditov");
            }
            else {
                credit = credit-pretvorba;
                if (credit <= 0){
                    console.log("Nimaš več denarja!");
                    break;
                }else{
                    console.log("Napačno!. Imaš še "+credit+" kreditov");
                }
            }
        }
        else{
            console.log("Ne veljaven vnos. Vnesi 'cifra' ali 'grb'");
            continue;
        }
    }
}
*/

/*  

1. Izpiši števila med 1 in 100, kjer je vsako drugo število negativno.
Primer:
1 -2 3 -4 5 -6 ... 

*/


function izpisStevil(start,max){
    for (let i = start; i<=max; i++){
        if(i % 2 == 0){
            console.log(i);
        }
        else {
            console.log("- "+i);
        }
    
    }
}
//izpisStevil(1,100)


/*  

2. Izpiši poštevanko do števila 10.
Primer:
1 2 3 4 5 6 7 8 9 10
2 4 6 8 10 12 14 16 18 20
3 6 9 12 15 18 21 24 27 30
.
.
.
10 20 30 40 50 60 70 80 90 100

*/
function postevanka (do_stevil,postevanka_do){
    let zacetek = 1;
    for (let i = 1; i<=postevanka_do; i++){
        let postevanka = zacetek++;
        console.log("Postevanka z: "+ postevanka);
        
        for (let a = 1; a<=do_stevil; a++){
            console.log(a*postevanka);
        }    
    }
}

postevanka (10,10);

/*

3. Napiši funkcijo "varenPIN", ki preverja ali je bančna PIN koda dovolj varna za uporabo. Funkcija sprejme štiri števila med 0 in 9, ki so zaporedna števila PINa. PIN je varen ko zadošča vsem naslednjim pogojem:
- PIN lahko vsebuje največ 2 enaki števili (1333 ali 0000 ni varen PIN)
- Samo ena številka v PINu se lahko pojavi več kot enkrat (1122 ali 5335 ni varen PIN)
- PIN ne sme vsebovati 3 zaporedne številke (1238 ali 3218 ni varen PIN, 3128 je varen PIN)
Primer:
varenPIN(0,0,0,0) -> false
varenPIN(1,5,9,9) -> true
varenPIN(1,9,9,9) -> false
varenPIN(1,1,2,3) -> false
varenPIN(1,3,2,1) -> false
varenPIN(2,2,3,1) -> true
varenPIN(2,3,3,2) -> false
 */


console.log("----------------------------");
function varenPIN(s1, s2, s3, s4){
    if ((s1 == s2 && s1 == s3) || (s1 == s2 && s1 == s4) || (s1 == s3 && s1 == s4) || (s2 == s3 & s2 == s4) || (s3 == s2 + 1) && (s2 == s1 + 1) || (s3 == s2 - 1) && (s2 == s1 - 1) || (s4 == s3 + 1) && (s3 == s2 + 1) || (s4 == s3 - 1) && (s3 == s2 - 1) || (s1 == s2 && s3 == s4) || (s1 == s3 && s2 == s4) || (s2 == s3 && s1 == s4)){
        return ("ni varen PIN");
    } else{
        return ("varen PIN")
    }
    }


console.log (varenPIN(0,0,0,0));
console.log (varenPIN(1,5,9,9));
console.log (varenPIN (1,9, 9, 9));
console.log (varenPIN(1,1,2,3));
console.log (varenPIN(1,3,2,1));
console.log (varenPIN(2,2,3,1));
console.log (varenPIN(2,3,3,2));
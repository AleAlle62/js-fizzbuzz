/*

Consegna:
1) Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.

2)Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:

1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


SVOLGIMENTO PROGRAMMA:

1) creare generatore numeri da 1 a 100
2) SE fare con il % i /3 e /5 con fizz e buzz
3) SE il numero è sia /5 che /3 fizzbuzz

*/

let inputSquare = document.querySelector('.square1')
let inputSqaures3 = document.querySelector('.squares3')
let inputSqaures5 = document.querySelector('.squares5')
let inputSqaures35 = document.querySelector('.squares35')


//iterazione
for ( let i = 1; i <= 100; i++) {
    
    // condizione del /3 e del /5
    if (i % 5 === 0 && i % 3 === 0){
        inputSquare.innerHTML += `<div class="square35">${'FizzBuzz'}</div>`
    }

    // condizione del /3 
    else if (i % 3 === 0){
        inputSquare.innerHTML += `<div class="square3">${'Fizz'}</div>`
    }

    // condizione del /5 
    else if (i % 5 === 0 ){
        inputSquare.innerHTML += `<div class="square5">${'Buzz'}</div>`
    }


    // resto
    else {
        inputSquare.innerHTML += `<div class="square">${i}</div>`
    }
}
    
    
    
    
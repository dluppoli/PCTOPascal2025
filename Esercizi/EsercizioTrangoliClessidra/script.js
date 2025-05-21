//Dato un numero n (intero dispari)
const n = 5;
const car = '*'
const spa = ' '

//Esercizio 1 - Stampare il triangolo sinistro
//*
//**
//***
//****
//*****
for(let i=1; i<=n; i++)
{
    console.log(car.repeat(i))
}


//Esercizio 2 - Stampare il triangolo destro
//    *
//   **
//  ***
// ****
//*****

//n = spa + ast
for(let i=1; i<=n; i++)
{
    console.log( spa.repeat(n-i) + car.repeat(i))
}

//Esercizio 3 - Stampare la clessidra
//*****
// ***
//  *
// ***
//*****

for(let i=0; i<n; i++)
{
    if( i < n/2)
        console.log( spa.repeat(i) + car.repeat(n-2*i))
    else
        console.log( spa.repeat(n-i-1) + car.repeat(2*i-n+2))
}

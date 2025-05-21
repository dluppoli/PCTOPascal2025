
//Dato un numero n, stampare tutti i numeri primi <= n
//Utilizzare l'algoritmo di Eratostene Da Cirene

let limite = 67108863;

let numeri = [false,false];
for(let i=2; i<=limite; i++)
    numeri.push(true);

for(let i=2; i<= Math.sqrt(limite); i++)
{
    if(numeri[i])
    {
        for(let j=2*i; j<numeri.length; j+=i)
        {
            numeri[j]=false;
        }
    }
}

for(let i=2; i<numeri.length; i++)
{
    if( numeri[i]==true) console.log(i);
}
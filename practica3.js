//operador ternario
const velocidad =120;
let mensaje;
if (velocidad >100){
    mensaje= 'Te vas a matar';
    } else {
        mensaje ='Vas a vivir';
        }

    console.log(mensaje)
    const Velocidad =120;
const Mensaje = Velocidad >100 ? 'Vas recio': 'Vas normal';
console.log(mensaje);

//ciclo for
    for (let i=0; i < 10; i++){
        if(i==5) continue
        console.log(i);
        }
//ciclo while
let i=0;
while (i>10){
    console.log(i);
    i++;
}
//ciclo for //numeros pares

for (i=0; i<=100; i++){
    if(i%2==0){ 
       console.log(i);  
    }
}
//ciclo for //numeros primos
for (i=2; i<100; i++){
    let primo=true;
    for (let m=2; m<1; m++){
if (i%m==0){
    primo=false;
}
    }
     if (primo){
        console.log(i);
     }

    }

//ciclo for //numeros impares
for (i=0; i<=100; i++){
    if(i%2!==0){ 
       console.log(i);  
    }
}


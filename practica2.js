
const tiempo  =14;
let saludo;

if (tiempo<12) {
    saludo ="Buenos dias";
} else if (tiempo >12 && tiempo<19 ){
    saludo= "Buenas tardes";
   } else if (tiempo >19 && tiempo <24){
    saludo= "Buenas noches";
    
}
if (tiempo>25){
        saludo ="No existe";
    } 

console.log(saludo);
//Switch
const dia=5;
let texto;
switch (dia){
    case 0:
        texto ="Domingo";
        break;
    case 1:
        texto ="Lunes";
        break;
    case 2:
        texto ="Martes";
        break;
    case 3:
        texto ="Miercoles";
        break
    case 4:
        text0 ="Jueves";
        break;
    case 5:
        texto ="Viernes";
        break;
    case 6:
        texto ="Sabado";
        break;
    default:
    texto="Dia no Valido";
}
console.log(texto);
    


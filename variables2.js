// 1 
let nombre = "Andres"
let mayus = nombre.toUpperCase()
let minus = nombre.toLowerCase()

console.log(`Mayusculas: ${mayus} \n Minusculas: ${minus}`);

//2 
let palabra = "Romeo"
console.log(palabra.length);

//3 
let texto = "Huancabamba"
console.log(`Primera letra: ${texto.charAt(0)}`);
console.log(`Ultima letra: ${texto.charAt(texto.length-1)}`);


//4 
let ciudad = "Lima"
let pais = "Peru"

console.log(`"Vivo en ${ciudad}, ${pais}"`);


//5
 let num = 5.6789
 console.log(`Numero con dos decimale: ${num.toFixed(2)}`);
 

 //6
 let texNum = "50"
 let suma = Number(texNum) + 10
 console.log(suma);

 //7
 let numTex = 50
 let textoPuro = numTex.toString()
 console.log(textoPuro);
 
 //8
 let precio = 100
 let porcentajeDescuento = 18
 let descuento = (precio*porcentajeDescuento)/100
 let precioFinal = precio - descuento
 console.log(precioFinal);


 //9
 let edad = 25
 let meses = 25*12
 console.log(meses);

 //10 
 let name = "Andres"
 let apellido = "Chiroque"
 console.log(`"${name.charAt(0)}.${apellido.charAt(0)}"`);
 
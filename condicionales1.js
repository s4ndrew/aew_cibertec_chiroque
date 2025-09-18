//1
 let num = 0
 if (num > 0) {
    console.log("El numero es positivo");
 } else if (num < 0){
    console.log("El numero es negativo");
 } else {
    console.log("El numero es: " + num);  
 }

 //2
 let num1 = 6
 let num2 = 5
 if (num1 > num2) {
   console.log("El numero: " + num1 + " es mayor");
 } else if(num2 > num1){
   console.log("El numero: " + num2 + " es mayor");
 } else {
   console.log("Los dos numero son iguales");
 }

 //3
 let edad = 17
 if (edad >= 18) {
   console.log("Puedes votar")
 } else {
   console.log("No puedes votar")
 }

 //4
 let parImpar = 7
 if (parImpar%2 === 0) {
   console.log(`Par`)
 } else {
   console.log(`Impar`)
 }

 //5
 let nota = 18
 if (nota >= 18) {
   console.log("Excelente")
 } else if (nota >= 11){
   console.log("Aprobado")
 } else {
   console.log("Desaprobado")
 }

 //6
 let compra = 200
 let porcentajeDescuento = 10
 if (compra > 100) {
    let precioFinal = compra -((compra*porcentajeDescuento)/100)
    console.log(precioFinal)
} else{
   console.log("No se aplica descuento");
}

//7
let num3 = 10
let num4 = 11
let num5 = 16

if (num3 > num4 || num3 > num5) {
   console.log("El mayo es: " + num3)
} else if (num4 > num3 || num4 > num5){
   console.log("El mayor es: " + num4)
} else if (num5 > num3 || num5 > num4){
   console.log("El mayor es: " + num5)
} else {
   console.log("Numeros vacios");
}

//8
let edad2 = 11

if (edad2 >= 65) {
   console.log("Adulto mayor");
} else if(edad2 >= 18){
   console.log("Adulto")
} else if(edad2 >= 12) {
   console.log("Adolescente")
} else {
   console.log("Niño");
}

//9
let contraseña = "1235"
if (contraseña == 123) {
   console.log("Acceso permitido")
} else {
   console.log("Acceso denegado")
}

//10
let anio = 2015

if (anio / 4 ) {
   
} else {
   
}
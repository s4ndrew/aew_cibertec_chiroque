//1
 let i = 1
while (i <= 20) {
    console.log("Con While: " + i); 
    i++ 
}

for (let i = 1; i <= 20; i++) {
    console.log("Con for: " + i);
}

//2
let num = 5
let x = 1
while (x <= 10) {
    console.log(`${num} X ${x} = ${num * x}`);
    x++
}

//3
let numPar = 1
while (numPar <= 20) {
    if (numPar %2 == 0) {
        console.log("Numeros pares: " + numPar)
    }
    numPar++
}

//4
let ind = 1
let sumaPares = 0
while (ind < 50) {
    if (ind %2 === 0) {
        sumaPares +=ind
    }
    ind++
}
console.log("Suma de pare: " + sumaPares)

//5
let index = 1
let impar = 1
while (index <= 10) {
    console.log("Num impares: "+ impar);
    impar += 2
    index++
}
let imp = 1
for (let i = 0; i < 10; i++) {
     console.log("Impares con for: " + imp);
    imp += 2
}

//6
let n = 5
let result = 1
for (let i = 1; i <= n; i++) {
    result *= i 
}
console.log("Factorial: " + result);

//7
let nombre = "Andres"
for (let i = 0; i < nombre.length; i++) {
    console.log(nombre[i])
}

//8
let array = [3,6,9,12]
let sumaArray = 0
array.forEach(numero => {
    sumaArray += numero
});
console.log("Suma array: " + sumaArray);

//9
let array2 = [2,4,6,8,10]
let buscar = 8
let resultBusqueda = false

for (let i = 0; i < array2.length; i++) {
    if (array2[i] === buscar) {
        resultBusqueda = true
        break
    }
}
console.log(resultBusqueda? "Encontrado" : "No encontrado");

//10
for (let i = 100; i >= 1; i--) {
    console.log(i)
}

//10
let texto = "JavaScript"

for (let i = texto.length-1; i >= 0; i--) {
    console.log(texto[i]);
}

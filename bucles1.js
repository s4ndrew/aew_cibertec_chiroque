//1
   console.log("Ejercicio 1: ");
for (let i = 1; i <= 10; i++) {
   console.log(i);
}

//2
    console.log("Ejercicio 2:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//3 
console.log("Ejercicio 3:");
let suma = 0
for (let i = 1; i <= 100; i++) {
    suma+=i
}
console.log(suma);

//4
console.log("Ejercicio 4:");
let n = 7
for (let i = 1; i <= 12; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}

//5
console.log("Ejercicio 5:");
for (let i = 1; i < 50; i++) {
    if (i%2=== 0 ) {
        console.log(i);
    } 
}

//6
let palabra = "programar"
let i = 0
while (i < palabra.length) {
    i++
}
console.log("Numero de palabras: " + i);

//7
let arr = [2,5,8,3]
let total = 0
for (let i = 0; i < arr.length; i++) {
     total += arr[i]   
}
console.log("Total: " + total);

let arry = [2,5,8,3]
let tota = 0
arry.forEach(arr => {
   tota+=arr 
});
console.log("Con for ech: " + tota);

//8
let nums = [4,7,1,9]
let buscar = 4
let indice = 0
let encontrado = false
do {
  if (nums[indice] === buscar) {
        encontrado = true;
        break
    }
        indice++
} while (indice < nums.length);
console.log(encontrado? "Numero encontrado" : "No encontrado");

//9
let num = 5
let e = 0
while (e < num) {
    e++
    if (e%2 !== 0) {
        console.log("Numeros impares: " + e);
    }
}

//10 
let s = "hola"
let hol = ""
for (let i = s.length-1; i >= 0; i--) {
    hol+=s[i]
}
console.log(hol);

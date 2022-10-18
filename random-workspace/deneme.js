

// Daire Alanı Hesaplama Alıstırması

// const PI = 3.14

// function calculateRange(r){
//     let circleRange = PI * r * r;
//     return circleRange;
// }
// let yariCap;
// yariCap = prompt("Lütfen bir deger giriniz")
// let calculateCircle = calculateRange(yariCap);
// alert(` Daire Alanı : ${calculateCircle}`)


// function daireAlani(r, PI = 3.14) {
//     return PI*r*r;
// }
// let circleDistance;
// circleDistance = prompt("Lütfen bir Deger giriniz")
// let donenSonuc = daireAlani(circleDistance)

// alert(`Daire Alanı : ${donenSonuc}`);

// function daireAlani(r, PI = 3.14){
//     return PI * r * r;
// }

// let circleDistanceFirst = prompt("Lütfen Bir Deger Giriniz")
// let circleDistanceSecond = prompt("Lütfen Baska Bir Deger Giriniz")

// let firstRange = daireAlani(circleDistanceFirst)
// let secondRange = daireAlani(circleDistanceSecond)
// console.log("Birinci Daire Alanı : ", firstRange)
// console.log("İkinic Daire Alanı : ", secondRange)
// let rangesSquare = firstRange * secondRange;
// console.log("Alanlar Çarpımı : ", rangesSquare)
// console.log("Daire Alan Hesaplama")

// function alan(r, PI = 3.14) {
//     return PI * r * r;
// }

// function carpma(a1, a2) {
//     return a1 * a2;
// }

// // let distance1 = prompt("Birinci Dairenin Yarıçapı")
// // let distance2 = prompt("İkinci Dairenin Yarıçapı")

// let firstRange = alan(prompt("Birinci Dairenin Yarıçapı"));
// let secondRange = alan(prompt("İkinci Dairenin Yarıçapı"));

// let alanCarpımı = carpma(firstRange, secondRange);

// let final = `Birinci Dairenin Alanı: ${firstRange}
// İkinci Dairenin Alanı: ${secondRange}
// Alanlar Çarpımı: ${alanCarpımı}
// `
// console.log(final);



// Faktöryel Alıştırması

// function factorial(n) {
//     if (n==0) {
//         return 1;
//     } else {
//         return n * factorial(n-1);
//     }
// }

// let number = prompt("Lütfen bir deger giriniz")
// console.log(factorial(number))
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// filter
// mencari angka yang >= 3

// jika menggunakan for loop
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// jika menggunakan filter
// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// map
// kalikan semua angka dengan 2
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// reduce, reduce untuk melakukan sesuatu kepada keseluruhan isi array
// menjumlankan seluruh isi array
// reduce memiliki 2 parameter :
// accumulator, sebagai hasil dari prosesnya, misal dijumlahkan
// currentValue, sebagai element array yang sedang di looping
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
// accumulator + currentValue, 0);
// secara default sebenarnya ada nilai awal seperti diatas, default = 0, bisa diganti dengan angka lain
// console.log(newAngka);

// method chaining
// mencari angka yang > 5
// lalu kalikan 3
// jumlahkan
const hasil = angka
    .filter((a) => a > 5) // 8,9,9
    .map((a) => a * 3) // 24, 27, 27
    .reduce((acc, curr) => acc + curr, 0); // 78
console.log(hasil);

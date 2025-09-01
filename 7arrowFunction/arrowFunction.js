// contoh function expression
// let tampilPesan = function (nama) {
//     alert("halo" + nama);
// };
// tampilPesan("fatur");

// contoh arrow function

// jika parameternya 1
// let pesan = (nama) => {
//     alert("halo" + nama);
// };
// pesan("fatur");

// jika parameternya 2
// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// };
// console.log(tampilNama("Erik", "Malam"));

// penulisan singkat jika parameternya 1 dan cuma return nilai
// implisit return
// const tampilNama = (nama) => `Halo, ${nama}`;
// console.log("Fatur Rahman");

// jika tanpa parameter
// const tampilNama = () => "Hello World";
// console.log(tampilNama());

// contoh lain menggunakan .map()
// jika function biasa
// let mahasiswa = ["Fatur", "Arga", "Dandi"];
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// let mahasiswa = ["Fatur", "Arga", "Dandi"];
// let jumlahHuruf = mahasiswa.map((nama) => nama.length);

// contoh lain
// mengembalikan dalam bentuk object
let mahasiswa = ["Fatur", "Arga", "Dandi"];
// kurung kurawalnya harus dibungkus dengan kurung biasa, lalu ditulis seperti dibawah
let jumlahHuruf = mahasiswa.map((nama) => ({ nama: nama, jmlHuruf: nama.length }));
console.table(jumlahHuruf);

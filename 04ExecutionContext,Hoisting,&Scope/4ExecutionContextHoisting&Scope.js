// execution Context, Hoisting, & Scope

// console.log(nama);
// var nama = "sandhika";

// jika kode diatas di run maka hasilnya akan undefined

// yang terjadi adalah
// creaton phase pada Global Context
// yang terjadi adalah :
// js akan mengecek apakah ada variabel atau function yg ada di dalam codingan, bukan langsung mengecek console.log, makanya hasilnya undifined
// kalau ada dia akan membuat nama var = undifined
// lalu kalau ada function akan di isi dengan function itu sendiri (function = fn())
// sebelum itu js juga bisa mengakses object window :
// window = global object
// this = window
// HAL DIATAS DISEBUT hoisting

// setelah creation phase diatas barulah dilakukan :
// execution phase
// mengeksekusi programnya dari baris per baris
// barulah di eksekusi console.log
// lalu dicek didalam console.log ada nama
// tapi didalam memori nama isinya undifined, makanya yang tampil di console undefined

// contoh lain execution context dan hoisting
// var nama = "sandhika";
// var umur = 33;

// tidakpapa console.log sebelum functionnya, karena functionnya akan diisi oleh isi string functionnya, beda jika console.log sebelum variabel, variabelnya akan diisi dengan undefined

// console.log(sayHello);

// jika ketemu function, bukan lagi Global execution context, tapi local execution context
// yang didalamnya nanti juga ada creation dan execution phase ada juga hoisting
// bedanya, jika di global kita punya akses ke object window, sedangkan di local, kita tidak hanya punya akses ke object window tapi juga ke object arguments
// function sayHello() {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun`;
// }
// step by step codingan diatas adalah
// hoisting
// 1. nama = undefined
//    umur = undefined
//    sayHello = function sayHello()
// 2. hoisting isi dari fungsi kedalam console.log
// 3. menampilkan isi dari console.log
// 4. nama = sandhika
// 5. umur = 33
// jika ingin lebih mengetahui context execution nya, bisa kunjungi https://pythontutor.com/javascript.html#mode=edit

// CONTOH KASUS
// var nama = "Sandhika Galih";
// var username = "@sandhikagalih";

// function cetakURL(username) {
//     var instagramURL = "http://instagram.com";
//     return instagramURL + username;
// }

// console.log(cetakURL(username));
// coba kode diatas didalam visualizer https://pythontutor.com/javascript.html#mode=edit

// CONTOH LAGI
// function a() {
//     console.log("ini a");
//     function b() {
//         console.log("ini b");
//         function c() {
//             console.log("ini c");
//         }
//         c();
//     }
//     b();
// }
// a();
// coba kode diatas didalam visualizer https://pythontutor.com/javascript.html#mode=edit

// CONTOH KASUS
// var nama = "Sandhika Galih";
// var username = "@sandhikagalih";

// function cetakURL() {
//     var instagramURL = "http://instagram.com";
// disini js akan mengecek username di local execution, jika tidak ada, dicek lagi di parameter, jika tidak ada baru ke global execution, jika tidak lagi barulah eror
// lalu  "@doddyferdiansyah" dibawah akan masuk ke object arguments
//     console.log(arguments);
//     return instagramURL + username;
// }

// console.log(cetakURL("@doddyferdiansyah"));

function satu() {
    var nama = "sandhika";
    console.log(nama);
}
function dua() {
    console.log(nama);
}
console.log(nama);
var nama = "erik";
dua("dody");
console.log(nama);
// coba kode diatas didalam visualizer https://pythontutor.com/javascript.html#mode=edit

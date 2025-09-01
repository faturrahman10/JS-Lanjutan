// konsep this pada arrow function

// constructor function
// const Mahasiswa = function () {
//     this.nama = "sandhika";
//     this.umur = 33;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     };
// };

// arrow function menggunakan kode di atas
// const Mahasiswa = function () {
//     this.nama = "sandhika";
//     this.umur = 33;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     };
// };

// dibuat menggunakan object literal
// const mhs1 = {
//     nama: "Fatur",
//     umur: 21,
//     sayHello: () => {
//         // arrow function tidak mempunyai konsep this
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//         // console.log(this)
//     },
// };

// contoh lain
// const Mahasiswa = function () {
//     this.nama = "sandhika";
//     this.umur = 33;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     };

//     // setInterval(function () {
//     //     console.log(this.umur++);
//     // }, 500);
//     // artinya jalankan isi dari function ini setiap 500 ms
//     // function di atas tidak akan berjalan karna dia langsung di hoisting, sehingga dia mencari this.umur di global, dan tidak ditemukan

//     // cara mengatasinya yaitu dengan menggunakan arrow function
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
//     // jika menggunakan arrow funtion, karena arrow function tidak memiliki konsep this, maka dia akan mencari di lexical scopenya, yaitu Mahasiswa
// };

// const sandhika = new Mahasiswa();

// contoh real penggunaan arrow function
const box = document.querySelector(".box");
box.addEventListener("click", function () {
    let satu = "size";
    let dua = "caption";

    // untuk menukan urutas hilang class saat di klik keduakalinya
    if (this.classList.contains(satu)) {
        // satu = temp;
        // satu = dua;
        // dua = temp;
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    // dengan menggunakan arrow function this akan dicari di lexical scope, bukan di global scope(window)
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});

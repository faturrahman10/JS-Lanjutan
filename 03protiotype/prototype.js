// object literal
// jika object nya banyak, tidak efisien

// function declaration
// jika method nya tidak digunakan methodnya akan tetap di simpan, jadi kurang efektif(manajemen memori kurang), kecuali jika methodnya dibuatkan object terpisah
// tapi jika seperti itu, saat membuat method baru pada object method, kita harus menambahkan method tersebut ke object yg kita buat sebelumnya(misal object mahasiswa), begitupun jika menghapus method pada object method, maka kita harus menghapus juga pada object yg kita buat(misal object mahasiswa)
// contoh :
// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     },

//     main: function (jam) {
//         this.energy -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain`);
//     },
// };

// function Mahasiswa(nama, energy) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;
//     // menambahkan method dari object methodMahasiswa
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;

//     return mahasiswa;
// }

// let sandhika = Mahasiswa("sandhika", 10);
// let dodi = Mahasiswa("dodi", 20);

//
// membuat object menggunakan object.create
// untuk membuat method dari object methodMahasiswa otomatis ditambah atau dihapus di object mahasiswa
// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     },

//     main: function (jam) {
//         this.energy -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain`);
//     },
// };

// function Mahasiswa(nama, energy) {
//     // menambahkan object.create
//     // artinya ki membuat object baru lalu object tersebut ikut membawa properti dan method dari object lain, dalam hal ini methodMahasiswa (hampir sama dengan pewarisan)
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     return mahasiswa;
// }

// let sandhika = Mahasiswa("sandhika", 10);
// let dodi = Mahasiswa("dodi", 20);

//
// menggunakan prototype
// PROTORYPE

// function Mahasiswa(nama, energy) {
//     this.nama = nama;
//     this.energy = energy;
// }

// menggunakan prototype akan langsung menambahkan method ini ke dalam object mahasiswa
// Mahasiswa.prototype.makan = function (porsi) {
//     this.energy += porsi;
//     return `Halo ${this.nama}, selamat makan`;
// };

// Mahasiswa.prototype.main = function (jam) {
//     this.energy += jam;
//     return `Halo ${this.nama}, selamat makan`;
// };

// let sandhika = new Mahasiswa("sandhika", 10);

// MEMBUAT KODE DI ATAS TAPI MENGGUNAKAN CLASS
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energy += porsi;
        return `Halo ${this.nama}, selamat makan`;
    }
    main(jam) {
        this.energy += jam;
        return `Halo ${this.nama}, selamat makan`;
    }
}

let sandhika = new Mahasiswa("sandhika", 10);

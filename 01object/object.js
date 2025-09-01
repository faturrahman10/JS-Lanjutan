// cara membuat object pada javascript

// 1. object literal
// let mahasiswa1 = {
//     nama: "Sandhika",
//     energy: 10,
//     makan: function (porsi) {
//         this.energy = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat makan`);
//     },
// };

// let mahasiswa2 = {
//     nama: "Dodi",
//     energy: 20,
//     makan: function (porsi) {
//         this.energy = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat makan`);
//     },
// };

// 2. function declaration
// function Mahasiswa(nama, energy) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;
//     mahasiswa.makan = function (porsi) {
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     };

//     mahasiswa.main = function (jan) {
//         this.energy -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain`);
//     };

//     return mahasiswa;
// }

// let sandhika = Mahasiswa("sandhika", 10);
// let dodi = Mahasiswa("dodi", 20);

// 3. constructor function
function Mahasiswa(nama, energy) {
    this.nama = nama;
    this.energy = energy;
    this.makan = function (porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.nama}, selamat makan`);
    };

    this.main = function (jam) {
        this.energy -= jam;
        console.log(`Halo ${this.nama}, selamat bermain`);
    };
}

let sandhika = new Mahasiswa("sandhika", 10);

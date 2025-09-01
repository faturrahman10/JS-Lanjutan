// higher order function adalah fungsi yang beroperasi pada fungsi yang lain, baik digunakan dalam argument, maupun sebagai return value

// contoh
// higher order function
// function kerjakanTugas(mataKuliah, selesai) {
//     console.log(`Mulai mengerjakan tugas ${mataKuliah}...`);
//     selesai();
// }

// // callback
// function selesai() {
//     console.log(`selesai mengerjakan tugas!`);
// }

// kerjakanTugas("pemrograman web", selesai);

// contoh lain
// higher order function
// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
//     };
// }

// let selamatMalam = ucapkanSalam("Malam");
// console.dir(selamatMalam("Sandhika"));

// kenapa perlu menggunakan higher order function
// agar kode kita lebih sederhana, dan lebih muda untuk dibaca
// kita akan lebih terbiasa membuat function

// contoh membbuat kode jadi sederhana
// belum disederhanakan
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// jika dibuat sederhana agar kita bisa menentukan berapakali program akan di looping
function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}
repeatLog(10);

// jika nantiya ingin menampilkan selain menggunakan console.log
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(10, console.log);
repeat(3, alert);

// closure
// function init() {
// let nama = "sandhika"; // local variable
// ketika inner function membutuhkan variable di parent scopenya, maka inner function ini disebut closure
// function tampilNama() {
// inner function (closure)
// console.log(nama); // akess ke parent variable
// }
// tampilNama();
// }
// init();

// function factories = salahsatu kegunaan closure
// function init() {
// let nama = "sandhika";
// function tampilNama(nama) {
//     console.log(nama);
// }
// return tampilNama;
// return tampilNama tapi tampilNama tidak dijalankan
// penulisan singkatnya :
//     return function (nama) {
//         console.log(nama);
//     };
// }

// jika seperti diatas functionnya hanya berjalan sebagian
// cara untuk menjalankan semuanya adalah :
// let panggilNama = init();
// panggilNama("fatur");
// panggilNama("rahman");

// ALASAN MENGGUNAKAN CLOSURE
// 1. UNTUK MEMBUAT FUNCTION FATORIES
// 2. UNTUK MEMBUAT PRIVATE METHOD

// CONTOH KASUS FUNCTION FACTORIES:
function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`);
    };
}

let selamatPagi = ucapkanSalam("pagi");
let selamatSiang = ucapkanSalam("siang");
let selamatMalam = ucapkanSalam("malam");

selamatPagi("Fatur");
selamatMalam("Sandhia");

// CONTOH KASUS SEOLAH-OLAH MEMPUNYAI PRIVATE METHOD
// let counter = 0;

let add = (function () {
    let counter = 0;

    return function () {
        return ++counter;
        // artinya : ditambah 1 dulu baru di cetak
    };
})();
// cara agar bisa menjalankan keseluruhan function tanpa menggunakan function expression yaitu dengan cara : let add = (function(){})();

// bagaimana jika suatu saat kita meletakkan counter = 10 dan kita tidak ingin mengganggu function add,
// caranya adalah dengan memasukkan let counter yang ada di atas kedalam function dan menjadi local variabel, lalu buatkan closure didalamnya seperti diatas
counter = 10;

console.log(add());

// ambil semua elemen video
// Array.from digunakan untuk mengubah list kita menjadi array
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// pilih hanya yang JS Lanjutan
// .textContent, digunakan untuk melihat text konten yang berada di dalamnya
// .includes, artinya terdapat apa didalamnya
let jsLanjut = videos
    .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

    // ambil durasi masing2 video
    // .dataset digunakan untuk mengambil data pada item yang telah kita select dan didalam item tersebut kita berikan properti data
    // lalu .duration digunakan untuk mengambil properti data-duration pada item yang telah diselect
    .map((item) => item.dataset.duration)

    // ubah durasi menjadi float, ubah menit menjadi detik
    .map((waktu) => {
        // 10:30 -> [10, 30] split
        // .parseFloat, agar menjadi angka(float), bukan lagi string
        const parts = waktu.split(":").map((part) => parseFloat(part));
        return parts[0] * 60 + parts[1];
    })

    // jumlahkan semua detiknya
    .reduce((total, detik) => total + detik);

// ubah fotmatnya jadi jam menit detik
// Math.floor digunakan untuk membulatkan ke bawah
let jam = Math.floor(jsLanjut / 3600);
// mencari sisa menit dari jam yang sudah diambil
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

const jmlVideo = videos.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;
const pJmlVideo = document.querySelector(".jumlah-video");
pJmlVideo.textContent = `${jmlVideo} Video`;

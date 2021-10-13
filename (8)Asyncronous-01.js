// 1. Apa itu synchronous?
// - adalah sebuah operasi akan dijalankan setelah operasi sebelumnya selesai dijalankan ( berurutan )

// 2. Apa itu asynchronous?
// - Asyncrhonous adalah operasi yang akan dijalankan tanpa menunggu operasi sebelumnya selesai.

// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// - Bisa
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// -> first log:  1
//first log:  2
//first log:  3
//first log:  4
//first log:  5
//second log:  6
//second log:  6
//second log:  6
//second log:  6
//second log:  6

// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// - fungsi yang dideklarasikan dalam loop yang merujuk pada variabel di lingkup luar yang menyebabkan semantik, padahal seharusnya menggunakan let.

// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (let i = 1; i <= 5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}
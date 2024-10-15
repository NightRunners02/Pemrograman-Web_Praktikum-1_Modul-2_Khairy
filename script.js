// Mengambil elemen input
let display = document.getElementById('display');

// Fungsi untuk menambah angka/simbol ke display
function appendNumber(number) {
    display.value += number;
}

// Fungsi untuk membersihkan display
function clearDisplay() {
    display.value = '';
}

// Fungsi untuk menghapus karakter terakhir
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Fungsi untuk menghitung hasil
function calculate() {
    try {
        // Tangani simbol '%' untuk mengkonversinya menjadi perhitungan persentase
        let expression = display.value.replace(/([0-9]+)%/g, "(($1)/100)");

        // Evaluasi ekspresi yang sudah dimodifikasi
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

// Mengambil elemen input
let display = document.getElementById('display');

// Fungsi untuk menambah angka/simbol ke display
function appendNumber(number) {
    // Jika ada tulisan "Error", kita hapus dulu sebelum menambahkan angka
    if (display.value === 'Error') {
        display.value = '';
    }
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
        let expression = display.value
            .replace(/([0-9]+)%/g, "(($1)/100)") // Ubah % jadi operasi persentase
            .replace(/\^/g, "**"); // Ubah ^ jadi operasi pangkat

        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

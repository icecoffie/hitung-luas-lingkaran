document.getElementById('calculateBtn').addEventListener('click', function() {
    let radius = document.getElementById('radius').value;

    // Cek jika input null, kosong atau bukan angka
    if (radius === null || radius === '' || isNaN(radius)) {
        document.getElementById('result').innerHTML = "Tolong masukkan angka yang valid!";
    } else {
        // Konversi input ke tipe number
        radius = parseFloat(radius);

        // Menggunakan const untuk nilai PI
        const PI = 3.14159265359;

        // Menghitung luas lingkaran
        let area = PI * Math.pow(radius, 2);

        // Menampilkan hasil perhitungan
        document.getElementById('result').innerHTML = `Luas lingkaran dengan jari-jari ${radius} cm adalah: ${area.toFixed(2)} cm²`;
    }
});

// Fungsi untuk menampilkan notifikasi selamat datang
function welcomeMessage() {
    // Meminta pengguna memasukkan nama mereka
    let userName = prompt("Please enter your name:");

    // Jika nama dimasukkan, tampilkan di elemen span
    if (userName) {
        document.getElementById("user-name").innerText = userName;
    }
    // Jika tidak, teks default "Nisa" dari HTML akan tetap ditampilkan.
}

// Memanggil fungsi welcomeMessage saat halaman selesai dimuat
window.onload = welcomeMessage;


// Fungsi untuk memvalidasi formulir saat tombol submit ditekan
function validateForm() {
    // 1. Mengambil nilai dari setiap input formulir
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("message").value;

    // 2. Memeriksa apakah ada field yang kosong
    if (name.trim() === "" || dob.trim() === "" || !gender || message.trim() === "") {
        alert("Peringatan: Semua kolom harus diisi!");
        return false; // Mencegah formulir dikirim jika tidak valid
    }

    // 3. Jika valid, tampilkan nilai di area output
    document.getElementById("output-name").innerText = name;
    document.getElementById("output-dob").innerText = dob;
    document.getElementById("output-gender").innerText = gender.value;
    document.getElementById("output-message").innerText = message;
    
    // Menampilkan waktu saat ini ketika formulir berhasil disubmit
    const now = new Date();
    document.getElementById("current-time").innerText = now.toLocaleString('id-ID');

    // Mengosongkan formulir setelah berhasil disubmit
    document.getElementById('contact-form').reset();

    // 4. Mencegah halaman me-refresh setelah submit
    return false;
}
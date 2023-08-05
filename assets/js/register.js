// Ambil referensi elemen-elemen yang diperlukan dari formulir
const newPasswordInput = document.getElementsByName('new_password')[0];
const confirmPasswordInput = document.getElementsByName('confirm_password')[0];

// Fungsi pengecekan saat formulir disubmit
const handleRegister = (event) => {
  event.preventDefault(); // Mencegah pengiriman formulir

  const newPassword = newPasswordInput.value;
  const confirmPassword = confirmPasswordInput.value;

    if (newPassword !== confirmPassword) {
        alert('Password baru tidak cocok dengan konfirmasi Password.');
    } else {
        // Lakukan tindakan lain yang diperlukan, misalnya, kirim formulir ke server
        form.submit();
    }
}
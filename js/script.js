document.getElementById('loginBtn').addEventListener('click', function (e) {
    e.preventDefault();

    Swal.fire({
      icon: 'error',
      title: 'Login Ditolak',
      text: 'Hanya admin yang dapat login.',
      confirmButtonText: 'Mengerti'
    });
  });


document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    Swal.fire({
      title: 'Berhasil!',
      text: 'Pesan kamu sudah dikirim.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    this.reset();
  });
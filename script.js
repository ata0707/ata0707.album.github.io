document.addEventListener('DOMContentLoaded', function() {
    // Dapatkan elemen modal
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    var modalVideo = document.getElementById("modalVideo");
    var captionText = document.getElementById("caption");

    // Dapatkan semua item galeri
    var galleryItems = document.querySelectorAll('.gallery-item img, .gallery-item video');

    galleryItems.forEach(function(item) {
        item.onclick = function() {
            modal.style.display = "block";
            
            // Sembunyikan semua konten modal terlebih dahulu
            modalImg.style.display = "none";
            modalVideo.style.display = "none";
            modalVideo.pause(); // Pastikan video berhenti jika sebelumnya diputar

            if (this.tagName === 'IMG') {
                // Jika itu gambar
                modalImg.src = this.src;
                captionText.innerHTML = this.getAttribute('data-title') || this.alt;
                modalImg.style.display = "block";
            } else if (this.tagName === 'VIDEO') {
                // Jika itu video
                // Ambil sumber video pertama
                var videoSource = this.querySelector('source').src; 
                modalVideo.src = videoSource;
                captionText.innerHTML = "Video Kenangan";
                modalVideo.style.display = "block";
                modalVideo.play();
            }
        }
    });

    // Dapatkan elemen <span> yang menutup modal
    var span = document.getElementsByClassName("close")[0];

    // Ketika pengguna mengklik (x), tutup modal
    span.onclick = function() {
        modal.style.display = "none";
        modalVideo.pause(); // Penting: hentikan video saat modal ditutup
    }

    // Ketika pengguna mengklik di luar modal, tutup modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modalVideo.pause(); // Penting: hentikan video saat modal ditutup
        }
    }
});
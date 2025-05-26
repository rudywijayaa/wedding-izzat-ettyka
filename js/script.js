document.addEventListener('DOMContentLoaded', () => {
  const guestContainer = document.querySelector('.guest-container');
  const isLaptop = window.innerWidth >= 1024;

  if (isLaptop) {
    guestContainer.classList.remove('invisible');
  } else {
    setTimeout(() => {
      guestContainer.classList.remove('invisible');
    }, 2200);
  }

  // Ambil nama tamu dari URL
  const params = new URLSearchParams(window.location.search);
  const guestName = params.get('to');
  if (guestName) {
    document.getElementById('guest-name').textContent =
      decodeURIComponent(guestName);
  }

  // Tombol "Open Invitation"
  document.getElementById('openInvitationBtn').addEventListener('click', () => {
    // Sembunyikan cover section
    document.querySelector('.cover-section').classList.add('d-none');

    // Tampilkan header section
    const header = document.getElementById('header-section');
    header.classList.remove('d-none');
    header.scrollIntoView({ behavior: 'smooth' });

    // Reset animasi elemen
    const animatedElements = header.querySelectorAll(
      '.fade-up, .fade-in, .sway'
    );
    animatedElements.forEach((el) => {
      el.style.animation = 'none';
      el.offsetHeight;
      el.style.animation = '';
    });

    // Tampilkan disk dan mainkan musik
    musicDisk.classList.remove('d-none');
    bgMusic.play();
    musicPlaying = true;
    musicDisk.src = './assets/icons/disk-on-icon.png';

    // Aktifkan scroll
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
  });
});

// === Musik & Disk ===
const musicDisk = document.getElementById('music-disk');
const bgMusic = document.getElementById('bg-music');
let musicPlaying = false;

// Fungsi buat note musik animasi
function createNote() {
  if (!musicPlaying) return;
  const note = document.createElement('img');
  note.src = './assets/icons/note-icon.png';
  note.className = 'note';
  note.style.left = 60 + Math.random() * 40 + 'px';
  document.body.appendChild(note);
  setTimeout(() => note.remove(), 3000);
}
setInterval(createNote, 600);

// Klik disk = toggle musik
musicDisk.addEventListener('click', () => {
  if (musicPlaying) {
    bgMusic.pause();
    musicDisk.src = './assets/icons/disk-off-icon.png';
    musicPlaying = false;
  } else {
    bgMusic.play();
    musicDisk.src = './assets/icons/disk-on-icon.png';
    musicPlaying = true;
  }
});

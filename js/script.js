document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.guest-container').classList.remove('invisible');
  }, 2200);
});

const params = new URLSearchParams(window.location.search);
const guestName = params.get('to');

if (guestName) {
  document.getElementById('guest-name').textContent =
    decodeURIComponent(guestName);
}

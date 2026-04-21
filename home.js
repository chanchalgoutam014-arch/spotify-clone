document.querySelectorAll('.scroll-area').forEach((scrollArea) => {
  let timeout;

  scrollArea.addEventListener('scroll', () => {
    scrollArea.classList.add('scrolling');

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      scrollArea.classList.remove('scrolling');
    }, 3000);
  });
});

// Playlist scroll functionality
const playlist = document.querySelector('.playlist');
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');

function updateScrollButtons() {
  const scrollLeft = playlist.scrollLeft;
  const scrollWidth = playlist.scrollWidth;
  const clientWidth = playlist.clientWidth;

  // Show/hide left button
  if (scrollLeft > 0) {
    scrollLeftBtn.style.display = 'flex';
  } else {
    scrollLeftBtn.style.display = 'none';
  }

  // Show/hide right button
  if (scrollLeft < scrollWidth - clientWidth - 1) {
    scrollRightBtn.style.display = 'flex';
  } else {
    scrollRightBtn.style.display = 'none';
  }
}

function scrollPlaylist(direction) {
  const scrollAmount = 300; // Adjust scroll amount as needed
  const currentScroll = playlist.scrollLeft;
  const targetScroll = direction === 'left'
    ? currentScroll - scrollAmount
    : currentScroll + scrollAmount;

  playlist.scrollTo({
    left: targetScroll,
    behavior: 'smooth'
  });
}

// Event listeners
scrollLeftBtn.addEventListener('click', () => scrollPlaylist('left'));
scrollRightBtn.addEventListener('click', () => scrollPlaylist('right'));

// Update buttons on scroll and resize
playlist.addEventListener('scroll', updateScrollButtons);
window.addEventListener('resize', updateScrollButtons);

// Initial check
updateScrollButtons();
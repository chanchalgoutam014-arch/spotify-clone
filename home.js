document.querySelectorAll('.section').forEach((section) => {
  // Find the scrollable container
  // Priority: .scroll-container > .artists-container > .section itself
  const scrollContainer = section.querySelector('.scroll-container');
  const artistContainer = section.querySelector('.artists-container');
  const container = scrollContainer || artistContainer || section;
  
  // Get the button pair for this specific section
  const leftBtn = section.querySelector('.scroll-arrow.left-arrow');
  const rightBtn = section.querySelector('.scroll-arrow.right');

  // Skip if buttons are missing
  if (!leftBtn || !rightBtn) return;

  function updateButtons() {
    // Calculate if there's more content to scroll
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const scrollLeft = container.scrollLeft;
    const maxScroll = scrollWidth - clientWidth;

    // Left button: show if we can scroll left
    leftBtn.style.display = scrollLeft > 0 ? 'flex' : 'none';
    
    // Right button: show if we can scroll right
    rightBtn.style.display = scrollLeft < maxScroll ? 'flex' : 'none';
  }

  function scroll(direction) {
    const scrollAmount = 500;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }

  // Attach click events to buttons
  leftBtn.addEventListener('click', () => scroll('left'));
  rightBtn.addEventListener('click', () => scroll('right'));

  // Update button visibility when scrolling
  container.addEventListener('scroll', updateButtons);
  
  // Update button visibility when window resizes
  window.addEventListener('resize', updateButtons);

  // Initialize button states
  updateButtons();
});
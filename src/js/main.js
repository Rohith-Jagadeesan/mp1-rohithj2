// ===== Utility Functions =====
// Simple query selector helper
const findElement = (selector, context = document) => context.querySelector(selector);

// Query selector all helper that returns an array
const findElements = (selector, context = document) => Array.from(context.querySelectorAll(selector));

// ===== Main Application =====
document.addEventListener('DOMContentLoaded', () => {
  // Get all the elements we need
  const navigationBar = findElement('#navbar');
  const progressBar = findElement('#progressBar');
  const progressLabel = findElement('#progressLabel');
  const navigationLinks = findElements('.nav__link');
  const pageSections = navigationLinks.map(link => findElement(link.getAttribute('href')));
  const yearElement = findElement('#year');

  // Update footer year automatically
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ===== Scroll Event Handling =====
  // Use requestAnimationFrame to optimize scroll performance
  let isScrollUpdatePending = false;
  
  function handleScroll() {
    if (!isScrollUpdatePending) {
      requestAnimationFrame(() => {
        updateNavigationBarSize();
        updateReadingProgress();
        updateActiveNavigationLink();
        isScrollUpdatePending = false;
      });
      isScrollUpdatePending = true;
    }
  }

  // Update navbar size based on scroll position
  function updateNavigationBarSize() {
    const isAtTopOfPage = window.scrollY <= 2;
    navigationBar.classList.toggle('navbar--large', isAtTopOfPage);
    navigationBar.classList.toggle('navbar--small', !isAtTopOfPage);
  }

  // Update the reading progress bar
  function updateReadingProgress() {
    const documentElement = document.documentElement;
    const currentScrollTop = documentElement.scrollTop || document.body.scrollTop;
    const totalScrollHeight = documentElement.scrollHeight || document.body.scrollHeight;
    const viewportHeight = documentElement.clientHeight;
    const maxScrollDistance = Math.max(totalScrollHeight - viewportHeight, 1);
    const scrollPercentage = Math.min(Math.max((currentScrollTop / maxScrollDistance) * 100, 0), 100);
    
    progressBar.style.width = scrollPercentage + '%';
    progressLabel.textContent = `Reading progress: ${Math.round(scrollPercentage)}%`;
  }

  // Update which navigation link should be highlighted as active
  function updateActiveNavigationLink() {
    const navigationBarBottom = navigationBar.getBoundingClientRect().bottom;

    // Check if we're at the bottom of the page
    const isNearBottom = Math.abs(window.innerHeight + window.scrollY - document.documentElement.scrollHeight) <= 1;
    let activeLinkIndex = -1;

    if (isNearBottom) {
      // If at bottom, highlight the last link (usually "Contact")
      activeLinkIndex = navigationLinks.length - 1;
    } else {
      // Find the section whose top is just below the navbar
      let closestDistance = Infinity;
      pageSections.forEach((section, index) => {
        if (!section) return;
        const sectionRect = section.getBoundingClientRect();
        const distanceFromNavbar = sectionRect.top - navigationBarBottom;
        
        // If section is below navbar and closer than previous best match
        if (distanceFromNavbar >= -1 && distanceFromNavbar < closestDistance) {
          closestDistance = distanceFromNavbar;
          activeLinkIndex = index;
        }
      });

      // Fallback: if no section found, pick the first one that's still below navbar
      if (activeLinkIndex === -1) {
        pageSections.forEach((section, index) => {
          const sectionRect = section.getBoundingClientRect();
          if (sectionRect.bottom > navigationBarBottom && activeLinkIndex === -1) {
            activeLinkIndex = index;
          }
        });
      }
    }

    // Update active state on all navigation links
    navigationLinks.forEach((link, index) => {
      link.classList.toggle('is-active', index === activeLinkIndex);
    });
  }

  // ===== Initial Setup =====
  // Run initial updates when page loads
  updateNavigationBarSize();
  updateReadingProgress();
  updateActiveNavigationLink();

  // ===== Event Listeners =====
  // Listen for scroll events (optimized with passive flag)
  document.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleScroll);
  window.addEventListener('orientationchange', handleScroll);

  // ===== Smooth Scrolling Navigation =====
  // Add smooth scrolling to all navigation links
  navigationLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || !targetId.startsWith('#')) return;
      
      event.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      // Calculate scroll position accounting for sticky navbar
      const navbarHeight = parseInt(getComputedStyle(navigationBar).height, 10);
      const targetPosition = window.scrollY + targetElement.getBoundingClientRect().top - (navbarHeight + 8);
      
      window.scrollTo({ 
        top: targetPosition, 
        behavior: 'smooth' 
      });
    });
  });

  // ===== Image Carousel =====
  const carouselContainer = findElement('[data-carousel]');
  if (carouselContainer) {
    const carouselTrack = findElement('[data-carousel-track]', carouselContainer);
    const previousButton = findElement('[data-carousel-prev]', carouselContainer);
    const nextButton = findElement('[data-carousel-next]', carouselContainer);
    const carouselSlides = findElements('.carousel__slide', carouselTrack);
    let currentSlideIndex = 0;

    // Move carousel to the current slide
    function moveToSlide() {
      carouselTrack.style.transform = `translateX(${currentSlideIndex * -100}%)`;
    }

    // Go to next slide
    function goToNextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % carouselSlides.length;
      moveToSlide();
    }
    
    // Go to previous slide
    function goToPreviousSlide() {
      currentSlideIndex = (currentSlideIndex - 1 + carouselSlides.length) % carouselSlides.length;
      moveToSlide();
    }

    // Add click event listeners
    nextButton?.addEventListener('click', goToNextSlide);
    previousButton?.addEventListener('click', goToPreviousSlide);

    // Auto-advance carousel every 5 seconds
    let autoAdvanceInterval = setInterval(goToNextSlide, 5000);
    
    // Pause auto-advance when user hovers over carousel
    carouselContainer.addEventListener('mouseenter', () => clearInterval(autoAdvanceInterval));
    carouselContainer.addEventListener('mouseleave', () => {
      autoAdvanceInterval = setInterval(goToNextSlide, 5000);
    });
  }

  // ===== Modal Dialog System =====
  const modalOpenButtons = findElements('[data-open-modal]');
  const modalCloseButtons = findElements('[data-close-modal]');

  // Handle opening modals
  modalOpenButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modalSelector = button.getAttribute('data-open-modal');
      const modalElement = findElement(modalSelector);
      if (!modalElement) return;
      
      // Show the modal
      modalElement.classList.add('is-open');
      modalElement.setAttribute('aria-hidden', 'false');
      
      // Focus the close button for accessibility
      const closeButton = findElement('.modal__close', modalElement);
      closeButton?.focus();
      
      // Add escape key listener for this modal
      modalElement.addEventListener('keydown', handleEscapeKey);
    });
  });

  // Handle closing modals
  modalCloseButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const modalElement = event.target.closest('.modal');
      if (modalElement) closeModalDialog(modalElement);
    });
  });

  // Handle escape key to close modal
  function handleEscapeKey(event) {
    if (event.key === 'Escape') {
      const openModal = findElement('.modal.is-open');
      if (openModal) closeModalDialog(openModal);
    }
  }

  // Handle backdrop clicks to close modal
  findElements('.modal__backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (event) => {
      const modalElement = event.target.closest('.modal');
      if (modalElement) closeModalDialog(modalElement);
    });
  });

  // Close modal and clean up
  function closeModalDialog(modalElement) {
    modalElement.classList.remove('is-open');
    modalElement.setAttribute('aria-hidden', 'true');
    modalElement.removeEventListener('keydown', handleEscapeKey);
  }
});
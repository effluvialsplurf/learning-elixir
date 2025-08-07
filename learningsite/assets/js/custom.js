// Custom JavaScript for our Phoenix application

// Add a welcome message when the page loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('Welcome to our Phoenix application!');
  
  // Add a simple animation to headings
  const headings = document.querySelectorAll('h1, h2, h3');
  headings.forEach(heading => {
    heading.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.2s ease';
    });
    
    heading.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
  
  // Add a "back to top" button
  const backToTopButton = document.createElement('button');
  backToTopButton.innerHTML = '↑';
  backToTopButton.className = 'fixed bottom-4 right-4 bg-blue-500 text-white rounded-full w-12 h-12 text-xl font-bold shadow-lg hover:bg-blue-600 transition-colors';
  backToTopButton.style.display = 'none';
  
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  document.body.appendChild(backToTopButton);
  
  // Show/hide back to top button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
});

// Export for use in other modules
export { };

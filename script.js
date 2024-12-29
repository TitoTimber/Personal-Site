console.log("HEllo world")
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section'); // Assuming each section has the 'section' tag
  
    // Function to update active link based on the scroll position
    function updateActiveLink() {
      let currentSection = null;
  
      // Check each section to see if it's in the viewport
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          currentSection = section.id; // Get the ID of the section in view
        }
      });
  
      // Loop through all the nav links
      navLinks.forEach(link => {
        // Remove the 'active' class from all nav links
        link.classList.remove('active');
        // If the link's href matches the current section's ID, add the 'active' class
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    }
  
    // Listen for scroll events to update the active link based on the section
    window.addEventListener('scroll', updateActiveLink);
  
    // Also, initialize active link when the page loads in case the user is on a specific section already
    updateActiveLink();
  
    // Add event listeners for the navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        // Remove the 'active' class from all links when clicked
        navLinks.forEach(link => link.classList.remove('active'));
        // Add the 'active' class to the clicked link
        link.classList.add('active');
      });
    });
  });
  
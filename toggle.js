document.addEventListener('DOMContentLoaded', () => {
    // Get all accordion headers
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    // Add click event listener to each header
    accordionHeaders.forEach(header => {
      header.setAttribute('tabindex', '0')
      header.addEventListener('click', () =>toggleAccordion(header));
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          toggleAccordion(header);
        }
      });
    }); 
        
    function toggleAccordion(header){
      // Get the parent accordion item
      const accordionItem = header.closest('.accordion-item');
          
      // Toggle the active class
      accordionItem.classList.toggle('active');
    }
});
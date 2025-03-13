document.addEventListener('DOMContentLoaded', () => {
    // Get all accordion headers
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    // Add click event listener to each header
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Get the parent accordion item
            const accordionItem = header.closest('.accordion-item');
          
            // Toggle the active class
            const currentItem = accordionItem;
            currentItem.classList.toggle('active');
        });
    });
});
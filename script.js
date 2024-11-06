
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        const item = header.parentElement;
        
        item.classList.toggle('active');

        document.querySelectorAll('.accordion-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});

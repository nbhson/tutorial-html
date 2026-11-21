const pop = document.querySelector('#menu');

pop.showPopover();
pop.hidePopover();
pop.togglePopover();

// Sự kiện
pop.addEventListener('beforetoggle', (e) => {
    console.log('Sắp:', e.newState);   // "open" | "closed"
});
pop.addEventListener('toggle', (e) => {
    console.log('Đã:', e.newState);
});

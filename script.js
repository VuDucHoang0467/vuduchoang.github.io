// JavaScript để kích hoạt hiệu ứng fade-in khi cuộn trang
window.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('.fade-in');
    
    sections.forEach(section => {
        let position = section.getBoundingClientRect().top;
        if (position - window.innerHeight <= -100) {
            section.classList.add('visible');
        }
    });
});

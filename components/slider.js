// Wait for the page to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    const mainImg = document.getElementById('mainImg');
    const thumbnails = document.querySelectorAll('.thumbnail');

    let currentIndex = 0;
    let autoPlayInterval = null;

    function showImage(index) {
        const thumbnail = thumbnails[index];
        const imgSrc = thumbnail.querySelector('img').src;
        
        mainImg.style.opacity = '0';
        setTimeout(() => {
            mainImg.src = imgSrc;
            mainImg.style.opacity = '1';
        }, 250);

        thumbnails.forEach(t => t.classList.remove('active'));
        thumbnail.classList.add('active');
        
        currentIndex = index;
    }

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const index = parseInt(thumbnail.dataset.index);
            showImage(index);
            resetAutoPlay();
        });
    });

    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % thumbnails.length;
            showImage(currentIndex);
        }, 5000); // ms
    }

    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    // Start auto-play automatically when page loads
    startAutoPlay();
});
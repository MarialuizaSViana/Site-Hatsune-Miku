let currentIndex = 0;
        const carousel = document.getElementById('carousel');
        const images = carousel.getElementsByTagName('img');
        const totalImages = images.length;

        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateCarousel();
        }

     
        setInterval(nextSlide, 3000);


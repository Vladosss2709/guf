document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const customCursor = document.createElement('div');
    customCursor.className = 'custom-cursor';
    body.appendChild(customCursor);
    
    document.addEventListener('mousemove', (e) => {
        customCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
    
    const hoverElements = document.querySelectorAll('a, button, .filter, .period-icon, .slider-nav, .slide');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            customCursor.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            customCursor.classList.remove('cursor-hover');
        });
    });
    
    document.addEventListener('click', () => {
        customCursor.classList.add('click');
        setTimeout(() => {
            customCursor.classList.remove('click');
        }, 500);
    });

    if (document.querySelector('.photo-slider')) {
        const slider = document.querySelector('.photo-slider');
        const slides = document.querySelectorAll('.slide');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        
        let currentIndex = 0;
        let autoSlideInterval;
        let visibleSlides = calculateVisibleSlides();
        
        function calculateVisibleSlides() {
            if (window.innerWidth < 480) return 1;
            if (window.innerWidth < 768) return 2;
            if (window.innerWidth < 1024) return 3;
            return 4;
        }
        
        function goToSlide(index) {
            currentIndex = index;
            const translateX = -currentIndex * (100 / visibleSlides);
            slider.style.transform = `translateX(${translateX}%)`;
        }
        
        function nextSlide() {
            if (currentIndex >= slides.length - visibleSlides) {
                goToSlide(0);
            } else {
                goToSlide(currentIndex + 1);
            }
        }
        
        function prevSlide() {
            if (currentIndex <= 0) {
                goToSlide(slides.length - visibleSlides);
            } else {
                goToSlide(currentIndex - 1);
            }
        }
        
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 3000);
        }
        
        function pauseAutoSlide() {
            clearInterval(autoSlideInterval);
        }
        
        startAutoSlide();
        
        prevBtn.addEventListener('click', () => {
            pauseAutoSlide();
            prevSlide();
            startAutoSlide();
        });
        
        nextBtn.addEventListener('click', () => {
            pauseAutoSlide();
            nextSlide();
            startAutoSlide();
        });
        
        slider.addEventListener('mouseenter', pauseAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);
        
        window.addEventListener('resize', () => {
            visibleSlides = calculateVisibleSlides();
            goToSlide(0);
        });
    }

    if (document.getElementById('city-filter')) {
        const cityFilter = document.getElementById('city-filter');
        const dateFilter = document.getElementById('date-filter');
        
        cityFilter.addEventListener('change', filterConcerts);
        dateFilter.addEventListener('change', filterConcerts);
        
        function filterConcerts() {
            const cityValue = cityFilter.value.toLowerCase();
            const dateValue = dateFilter.value.toLowerCase();
            const concertItems = document.querySelectorAll('.concert-item');
            
            concertItems.forEach(item => {
                const itemCity = item.getAttribute('data-city').toLowerCase();
                const itemMonth = item.getAttribute('data-month').toLowerCase();
                const itemDate = item.querySelector('.concert-date').textContent.toLowerCase();
                
                const cityMatch = cityValue === 'all' || itemCity.includes(cityValue);
                const dateMatch = dateValue === 'all' || itemMonth.includes(dateValue) || itemDate.includes(dateValue);
                
                item.style.display = (cityMatch && dateMatch) ? 'flex' : 'none';
            });
        }
    }
});
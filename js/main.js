(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);
/*   Filter    */
// nav background
document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector("header");
    if (header) { // Check if the header element exists
        window.addEventListener("scroll", () => {
            header.classList.toggle("shadow", window.scrollY > 0);
        });
    }
});


//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});

/* Filter end */

/* Contact Form Start */
let url ='https://script.google.com/macros/s/AKfycbw5UD1_SfVIv1_i9Al5mUcOOvB9q34xBXl-qGz4dY3sk3tmemsP0knS90ZKDxGH_7dfcA/exec'
document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector('#form');
    if (form) { // Check if the form element exists
        form.addEventListener("submit", (e) => {
            e.target.esubmit.innerHTML = "Sending...";
            let d = new FormData(form);
            fetch(url, {
                method: "POST",
                body: d
            }).then((res) => res.text())
            .then((finalRes) => {
                e.target.esubmit.innerHTML = "Send Message"
                swal({
                    title: "Thanks!",
                    text: "We will get in touch as soon as possible.",
                    icon: "success",
                });
                form.reset();
                console.log(finalRes);
            });
            e.preventDefault();
        });
    }
});


/* Contact Form End */
/* sliding video */
document.addEventListener("DOMContentLoaded", function () {
    const videoElement = document.getElementById("videoclip");
    const sources = videoElement.querySelectorAll("source");
    let currentIndex = 0;

    // Function to play the video based on the current index
    function playVideo(index) {
        // Temporarily hide the video and slide it out
        videoElement.classList.add("hidden");

        // Wait for the transition to complete before changing the source and showing the video
        setTimeout(() => {
            videoElement.src = sources[index].src; // Update the video source
            videoElement.load(); // Load the new video source

            // Show the video again with a sliding animation
            videoElement.classList.remove("hidden");
            videoElement.classList.add("visible");

            videoElement.play(); // Play the video
        }, 500); // Match the CSS transition duration
    }

    // Event listener for when the video ends
    videoElement.addEventListener("ended", function () {
        // Move to the next video source
        currentIndex = (currentIndex + 1) % sources.length;
        playVideo(currentIndex);
    });

    // Start playing the first video on load
    playVideo(currentIndex);
});


/* effects */

 // Image sources for confetti (replace with the correct paths to your images)
 const images = [
    '../website/img/balloons.png',     // Path to heart image
    '../website/img/hearts.png',   // Path to balloon image
    '../website/img/star.png',
    '../website/img/party1.png',     // Path to star image
    '../website/img/party2.png',
    '../website/img/party3.png',
    '../website/img/welcome1.png'

];

// Function to create confetti
function createConfetti() {
    const wrapper = document.querySelector('.celebration-wrapper');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        const randomImage = images[Math.floor(Math.random() * images.length)];
        confetti.style.backgroundImage = `url(${randomImage})`;
        wrapper.appendChild(confetti);

        // Randomize position and animation duration
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.bottom = '-50px'; // Start off-screen at the bottom
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.width = (Math.random() * 20 + 20) + 'px';
        confetti.style.height = confetti.style.width;
    }
}

// Function to show and hide celebration
function showCelebration() {
    const wrapper = document.getElementById('celebration');
    createConfetti();

    // Show the celebration for 5 seconds and then hide it
    setTimeout(() => {
        wrapper.style.display = 'none';
    }, 10000); // 5000 milliseconds = 5 seconds
}

// Check if the session is new (or on refresh)
if (!sessionStorage.getItem('celebrationShown')) {
    // If it's the first visit or a refresh during the session, show the celebration
    showCelebration();
    sessionStorage.setItem('celebrationShown', 'true');
} else {
    // If not the first visit in this session, hide the celebration
    document.getElementById('celebration').style.display = 'none';
}

/* model box */

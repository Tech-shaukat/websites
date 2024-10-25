 // Get the button
 let mybutton = document.getElementById("myBtn");
                
 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }
 $(document).ready(function() {
    // Toggle social icons visibility
    $('#share-button').click(function() {
        $('#social-icons').toggle();
    });

    // Get the content to share
    var currentUrl = window.location.href;

    // Facebook Share
    $('#share-facebook').click(function(e) {
        e.preventDefault();
        var facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(currentUrl);
        window.open(facebookUrl, '_blank', 'width=600,height=400');
    });

    // Twitter Share
    $('#share-twitter').click(function(e) {
        e.preventDefault();
        var twitterUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(currentUrl);
        window.open(twitterUrl, '_blank', 'width=600,height=400');
    });

    // LinkedIn Share
    $('#share-linkedin').click(function(e) {
        e.preventDefault();
        var linkedinUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(currentUrl);
        window.open(linkedinUrl, '_blank', 'width=600,height=400');
    });

    // WhatsApp Share
    $('#share-whatsapp').click(function(e) {
        e.preventDefault();
        var whatsappUrl = 'https://wa.me/?text=' + encodeURIComponent(document.title) + '%0A' + encodeURIComponent(currentUrl);
        window.open(whatsappUrl, '_blank');
    });
});
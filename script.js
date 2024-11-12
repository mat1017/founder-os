$(document).ready(function () {
    function handleFormSubmission(formClassName) {
        $(formClassName).submit(function (e) {
            e.preventDefault();
            var form = this;

            // Get form field values
            var name = form.querySelector('input[name="first_name"]').value;
            var email = form.querySelector('input[name="email_address"]').value;
            var phone = form.querySelector('input[name="phone"]').value;

            // Log form data (for debugging)
            console.log(name + " " + email + " " + phone);
            var redirectUrl = `https://www.founderos.com/workshop-survey?first_name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}`;
            window.location.href = redirectUrl;
        });
    }
    
    handleFormSubmission(".workshop-form-hubspot");
});

$(document).ready(function() {
    // Function to play the video by resetting the iframe src
    function playVideo(iframe) {
        var iframeSrc = iframe.attr('src'); // Get the base URL of the iframe
        console.log(iframe);
        iframe.attr('src', iframeSrc + '?autoplay=1');  // Add the autoplay parameter to the src
    }

    // Function to pause the video by resetting the iframe src
    function pauseVideo(iframe) {
        var iframeSrc = iframe.attr('src').split('?')[0]; // Get the base URL of the iframe
        iframe.attr('src', iframeSrc);  // Remove the autoplay parameter to stop the video
    }

    $('.sw1').on('click', function() {
        var iframe = $('.testimonial-video-1');
        playVideo(iframe);
    });

    $('.sw2').on('click', function() {
        var iframe = $('.testimonial-video-2');
        playVideo(iframe);
    });

    $('.sw3').on('click', function() {
        var iframe = $('.testimonial-video-3');
        playVideo(iframe);
    });

    $('.sw4').on('click', function() {
        var iframe = $('.testimonial-video-4');
        playVideo(iframe);
    });

    $('.sw5').on('click', function() {
        var iframe = $('.testimonial-video-5');
        playVideo(iframe);
    });

    // When ".close-modal" or ".x-modal" is clicked, pause the respective video
    $('.close-modal, .x-modal').on('click', function() {
        $('iframe.testimonial-video-1, iframe.testimonial-video-2, iframe.testimonial-video-3, iframe.testimonial-video-4, iframe.testimonial-video-5').each(function() {
            pauseVideo($(this));  // Pause each video on the page
        });
    });
});

$(document).ready(function() {
    var iframe = $('iframe.testimonial-video-1')[0];
    var iframeWindow = iframe.contentWindow;

    // Check if the video player has an autoplay feature
    iframe.onload = function() {
        iframeWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    };
});


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
        var iframeSrc = iframe.attr('src').split('?')[0]; // Get the base URL of the iframe
        iframe.attr('src', iframeSrc + '?autoplay=1');  // Add the autoplay parameter to the src
    }

    // Function to pause the video by resetting the iframe src
    function pauseVideo(iframe) {
        var iframeSrc = iframe.attr('src').split('?')[0]; // Get the base URL of the iframe
        iframe.attr('src', iframeSrc);  // Remove the autoplay parameter to stop the video
    }

    // When any ".slide-wrap" is clicked, autoplay the respective video
    $('.slide-wrap').each(function(index) {
        $(this).on('click', function() {
            var videoClass = '.testimonial-video-' + (index + 1); // Dynamically create the class for each video
            var iframe = $(videoClass); // Find the corresponding iframe
            playVideo(iframe);  // Play the video
        });
    });

    // When ".close-modal" or ".x-modal" is clicked, pause the respective video
    $('.close-modal, .x-modal').on('click', function() {
        $('iframe.testimonial-video-1, iframe.testimonial-video-2, iframe.testimonial-video-3, iframe.testimonial-video-4, iframe.testimonial-video-5').each(function() {
            pauseVideo($(this));  // Pause each video on the page
        });
    });
});

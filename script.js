jQuery(document).ready(function($) {
    $('.jet-form-builder.submit-type-reload').on('submit', function(event) {
        let loadingOverlaySelector = '';
        let delay = 100;

        // Determine if on mobile or desktop
        if ($(window).width() <= 768) { // Adjust the breakpoint as needed
            loadingOverlaySelector = '#elementor-popup-modal-246 .loading-overlay';
        } else {
            loadingOverlaySelector = '.loading-overlay';
        }

        setTimeout(function() { 
            // Show Loading Indicator and Interaction Blocker
            $(loadingOverlaySelector).fadeIn();
            $('#disable-interactions-overlay').show();
        }, delay);

        // ... (rest of your form submission logic) ...

        // When the form submission is complete, hide both:
        $(loadingOverlaySelector).fadeOut();
        $('#disable-interactions-overlay').hide();
    });
});

# JetFormBuilder Popup Loading Overlay with Interaction Blocker

This WordPress solution enhances the user experience of forms submitted within Elementor popups. It provides a loading overlay with a spinner and message while simultaneously preventing user interaction with the rest of the page. This is especially useful for mobile views, where z-index conflicts are common.

## Features

*   **Visual Feedback:**  Displays a loading overlay with a spinner and customizable text message to indicate that the form submission is in progress.
*   **Interaction Blocker:**  Prevents users from interacting with other elements on the page while the form is being submitted, ensuring a smooth experience.
*   **Responsive Design:** Works seamlessly on both desktop and mobile devices, dynamically adjusting the placement of the overlay based on screen size.
*   **Customizable:** Easily tailor the appearance of the loading overlay to match your website's design.

## Installation and Usage

1.  **HTML:** Add the following HTML snippets to your Elementor popup:
    *   **Loading Overlay (inside the popup):**

    ```html
    <div class="loading-overlay" style="display: none;">
        <div class="loading-content"> 
            <div class="spinner"></div>
            <p class="loading-text">Please wait up to 1 minute<br>to submit your free consultation.</p> 
        </div>
    </div>
    ```  
2.  **CSS:** Include the provided CSS styles in your WordPress theme's stylesheet or a custom CSS section in Elementor.
   ```css
<style>
.loading-overlay {
    position: fixed;  /* Cover the entire viewport */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 1); /* Increased opacity to 0.8 */
    z-index: 9999;    /* Ensure it's on top */
    display: flex;    /* Center the spinner */
    align-items: center;
    justify-content: center;
	  pointer-events: none; 
	 z-index: 100001; 
}

.spinner {
    border: 4px solid rgba(0, 0, 0, 0.1); /* Light grey outer border */
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border-top-color: #3498db; /* Blue top border */
    animation: spin 1s linear infinite; /* Animation */
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
	.loading-text {
    color: white;
    margin-top: 10px; /* Adjust as needed */
    text-align: center;
}

	#disable-interactions-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9998; /* One less than .loading-overlay */
    background-color: transparent;
    pointer-events: none; 
}
	/* ... (Your existing .loading-overlay and #disable-interactions-overlay styles) ... */

.loading-overlay .loading-content {
    background: linear-gradient(to bottom right, #f0f0f0, #e0e0e0); /* White-gray gradient */
    padding: 20px; /* Adjust padding as needed */
    border-radius: 8px; /* Optional rounded corners */
    text-align: center;  
    width: 80%; /* 10% padding on each side */
	  display: flex;
    flex-direction: column; /* Stack items vertically */
    align-items: center;   /* Center items horizontally */
}


.loading-overlay .spinner {
    width: 72px; /* Double the size */
    height: 72px;
    margin-bottom: 15px; /* Add space between spinner and text */
    /* ... (Your existing spinner styles) ... */
}

.loading-overlay .loading-text {
    font-size: 18px; /* Larger font size */
    line-height: 1.4; /* Adjust line height as needed */
	  font-weight: bold; /* Make the text bold */
    color: black;     /* Pure black text */
}
</style>
```
4.  **JavaScript (jQuery):**  Add the JavaScript code to your Elementor popup or your website's header or footer. Make sure jQuery is included.

```javascript
<script>
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

</script>
```

## Customization

*   **Text and Spinner:** Modify the text content within `.loading-text` and customize the appearance of the `.spinner` using CSS. You can use your own spinner designs or integrate libraries like Spin.js.
*   **Colors and Styling:** Adjust the `background-color`, text `color`, font styles, and other CSS properties in the `.loading-overlay` and `.loading-content` classes to match your website's theme.

## Important Considerations

*   **Z-Index:** Ensure that the `z-index` of your popup is higher than the `z-index` of the `.disable-interactions-overlay` element (9998).
*   **Error Handling:** Implement error handling in your form submission logic to hide the loading overlay and interaction blocker if the submission fails.
*   **Form Submission Method:** This solution is designed for JetFormBuilder forms that use the "Page Reload" submission type. If you're using AJAX submission, you'll need to adjust the JavaScript accordingly.


Let me know if you have any other questions.

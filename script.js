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

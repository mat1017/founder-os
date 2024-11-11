function handleFormSubmission(formClassName) {
    
    $(formClassName).submit(function (e) { 
        e.preventDefault(); 
        console.log("working")
        var form = this;  

        console.log(form);
        var name = form.querySelector('input[name="first_name"]').value;
        var email = form.querySelector('input[name="email_address"]').value;
        var phone = form.querySelector('input[name="phone"]').value;
        console.log(name +" "+ email +" "+ phone)
    });
 }

 
 handleFormSubmission(".workshop-form-hubspot");


 console.log("data");
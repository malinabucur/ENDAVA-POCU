function validateEmail(){
    var email = document.getElementById("email").value;
    var emailConfirmation = document.getElementById("emailConfirm").value;
    if(email != emailConfirmation){
        alert("ERROR! The emails you entered did not match. Please try again.");
    }else{
        // alert("Good!");
    }
}
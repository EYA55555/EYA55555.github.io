

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#user-name").val();
    var email = $("#user-email").val();
    var message = $("#user-message").val();
 
    $.ajax({
        type: "POST",
        url: "php/form.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}
function formSuccess(){
    $("#messageSubmit").removeClass("text-hidden");
}

$("#feedback-form").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
});
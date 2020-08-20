$( document ).ready(function() {   
    });

    sendEmail = () => {
        let userEmail = $("#email").val();
        let password = $("#password").val();
        let subject = $("#subject").val();
        let text = $("#textEmail").val();        
        

        let email = {
            email : {
                service : "gmail",
                user : userEmail,
                pass : password,
                subject : subject,
                text : text
            }
        }
       
        $.ajax({
            type: "POST", 
            contentType: 'application/json',
            url: `http://localhost:3000/email`,   
            data: JSON.stringify(email), 
            success: function(response) { 
                if(response){
                    alert("email enviado");                
                }
            },
            error: function(e) {
                console.log(e);
            }       
        })
    }
    
   
    
    
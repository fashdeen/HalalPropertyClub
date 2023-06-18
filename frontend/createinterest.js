

$(document).ready(function(){  
    $('#createinterest').click(function(e){  
         
          e.preventDefault();

         var firstname =  document.getElementById("firstname").value;
         var surname =  document.getElementById("surname").value;
         var econtact =  document.getElementById("econtact").value;
         var whatsappno =  document.getElementById("whatsappno").value;
         var gender =  document.getElementById("gender").value;
         var occupation = document.getElementById("occupation").value;
         var address =  document.getElementById("address").value;
         var country =  document.getElementById("country").value;
        
      

       if (firstname =="" || surname =="" || econtact =="" || whatsappno =="" || gender =="" || occupation =="" || address =="" || country ==""){
               alert("Please fill all the fields");
               return false;
             } else{
    
                $.ajax({ 
                  
                  //production url
                  //url:"https://18.211.184.137/api/create_interest",
                  url:"http://localhost:3000/api/create_interest",  
                   method:"post",
                   headers: {"x-api-key": "231413"},
                    data:{firstname : firstname, surname : surname , econtact : econtact, whatsappno : whatsappno , gender : gender , occupation : occupation, address : address , country : country},
                    success:function(response){  
                        setTimeout(function(){
                            window.location.href="./success.html"; // The URL that will be redirected too.
                            }, 200);
                    
                    }
                });
    
             }
        }
        
    ); 
     
 });
 
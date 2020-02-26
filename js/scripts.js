
$(document).ready(function(){
    
    $(".button1").click(function(){ 
        $("p.par_1").show();
        $(".button1").hide(); 
    });
    $("p.par_1").click(function(){
        $("p.par_1").hide();
        $(".button1").show(); 
    });
     $(".button2").click(function(){
         $("p.par_2").show();   
         $(".button2").hide();
     });
     $("p.par_2").click(function(){
         $("p.par_2").hide();
         $(".button2").show();
     });
     $(".button3").click(function(){
         $("p.par_3").show();   
         $(".button3").hide();
     });
     $("p.par_3").click(function(){
         $(".button3").show();
         $("p.par_3").hide();
     }); 
  });



  $(document).ready(function () {
    $("form").submit(function (event) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        if (name == "" || email == "") {
            alert("Cannot submit without name and email");
        } else {
            alert("Thank you " + name + " \n Message submitted successfully");
        }
        event.preventDefault();
    });
});

  

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

  
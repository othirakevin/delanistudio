$(document).ready(function () {
    $(".clickable-3").click(function () {
        $(".hide-product").toggle();
    });
$(document).ready(function() {
    $("form").submit(function(event){
});
$(document).ready(function () {
    $("form").submit(function (event) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        if (name == "" || email == "") {
@@ -28,12 +28,10 @@ $(document).ready(function() {
        event.preventDefault();
    });
});


$(document).ready(function(){
    
    $(".btn_1").click(function(){ 
        $("p.par_1").show();
        $(".btn_1").hide(); 
    });
    $("p.par_1").click(function(){
        $("p.par_1").hide();
        $(".btn_1").show(); 
    });
     $(".btn_2").click(function(){
         $("p.par_2").show();   
         $(".btn_2").hide();
     });
     $("p.par_2").click(function(){
         $("p.par_2").hide();
         $(".btn_2").show();
     });
     $(".btn_3").click(function(){
         $("p.par_3").show();   
         $(".btn_3").hide();
     });
     $("p.par_3").click(function(){
         $(".btn_3").show();
         $("p.par_3").hide();
     }); 
  });



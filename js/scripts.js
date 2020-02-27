

// $(document).ready(function () {
//     $('#toggle').click(function () {
//         $('#p1').show();
//     });
//     $('#toggle').click(function () {
//         $('#toggle').hide();
//     });
//     $('#p1').click(function () {
//         $('#toggle').show();
//     });
// $('#p1').click(function () {
//         $('#p1').hide();
//     });
//     $('#toggle2').click(function () {
//         $('#p2').show();
//     });
//     $('#toggle2').click(function () {
//         $('#toggle2').hide();
//     });
//     $('#p2').click(function () {
//         $('#toggle2').show();
//     });
//     $('#p2').click(function () {
//         $('#p2').hide();
//     });
//     $('#toggle3').click(function () {
//         $('#p3').show();
//     });
//     $('#toggle3').click(function () {
//         $('#toggle3').hide();
//     });
//     $('#p3').click(function () {
//         $('#toggle3').show();
//     });
//     $('#p3').click(function () {
//         $('#p3').hide();
//     });

//   $(document).ready(function () {
//     $("form").submit(function (event) {
//         var name = document.getElementById("name").value;
//         var email = document.getElementById("email").value;
//         if (name == "" || email == "") {
//             alert("Cannot submit without name and email");
//         } else {
//             alert("Thank you " + name + " \n Message submitted successfully");
//         }
//         event.preventDefault();
//     });
// });

$(document).ready(function() {
    $(".design").click(function() {
        $("#design-show").toggle()
        $("#design-hide").toggle()
    })
    $(".dev").click(function() {
        $("#dev-show").toggle()
        $("#dev-hide").toggle()
    })
    $(".product").click(function() {
        $("#product-show").toggle()
        $("#product-hide").toggle()
    })
})
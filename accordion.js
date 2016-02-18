$(document).ready(function() {
    $("#accordion p:not(:first)").hide();
    $("#accordion h4").click(function() {
          $(this).next().slideToggle(2000)
                  .siblings("p:visible").slideUp(2000);
    });
});
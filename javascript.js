// makes the links appear below the hamburger menu icon //
// links appear when icon clicked on //
//links disappear when clicked on again //

$(document).ready(function()
  {
    
    $("#hamburgerMenuIcon").on("click", function(){

      $("#mobileMenu ul").toggleClass("visible");

    });

  }
);

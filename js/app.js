$(document).foundation()
$(document).ready(function() {
    $('#nav').localScroll(800);

    //.parallax(xPosition, speedFactor) options:

    //xPosition - Horizontal position of the element

    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling

    $('#screen1_bgOne').parallax("50%", 0.1);

    $('#screen2_bgOne').parallax("50%", 0.1);

    
    
    $('#threeSceen').parallax("50%", 0.2);
  
    







    $('#screenFour').parallax("50%", 0.3);
    $('.screen4_socialicons').parallax("10%", 1);

})

$(document).foundation()
$(document).ready(function() {
    $('#nav').localScroll(800);

    //.parallax(xPosition, speedFactor) options:

    //xPosition - Horizontal position of the element

    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling


      //  featured page
    $('#screen1_bgOne').parallax("50%", 0.1);

      //  myth 1
    $('#screen2_bgOne').parallax("50%", 0.1);

    
      //  myth 2 
    $('#threeSceen').parallax("50%", 0.2);
  
    






    //  myth 3 
    $('.screenFour').parallax("50%", 0.3);





        //  myth 4
    $('#screen5_bg').parallax("30%", 0.5);


        //  myth 5
    $('#screen6_bg').parallax("20%", 0.5);


        //  myth 6
    $('#screen7_bg').parallax("20%", 0.3);




})

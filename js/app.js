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

window.onload = function(){
  // reference the pages
  let body = document.querySelector("body");
  // feature page
  let introductionPage = document.querySelector('#screen1_bgOne');
  let mainNav = document.querySelector('.navigation');
  let featureHeader = document.querySelector('.featuredHeader');
  let featureHeaderContent = document.querySelector('.featureHeaderContent');
  let featureHeaderContent2 = document.querySelector('.featureHeaderContent2');
  let featureHeaderContent3 = document.querySelector('.featureHeaderContent3');
  let downArrow = document.querySelector('#featurePageArrow');
  let bothCharacters = document.querySelector(".characters");
  let doctor = document.getElementById('doctor').contentDocument;
  let docHead = doctor.getElementById('head');

  // onload reveal animation
  TweenMax.fromTo(introductionPage, 1, {
    opacity: 0
  },{
    opacity:1,
    delay: 1
  });

  // main nav animation
  TweenMax.fromTo(mainNav, 1, {
    opacity: 0,
  },{
    opacity:1,  
    delay: 1
  });

  // main content animation
  TweenMax.fromTo(featureHeader, 1, {
    opacity: 0,
  },{
    opacity:1,  
    delay: 2
  });

  TweenMax.fromTo(bothCharacters, 1, {
    opacity: 0
  },{
    opacity:1,
    delay: 3
  });

  //  head animation
  TweenMax.fromTo(docHead, 1, {
    xPercent: -10,
    rotation:-5
    
  },{
    xPercent: 20,
    rotation:5,
    yoyo: true,
    repeat: -1,
    delay: 3
  });

  TweenMax.fromTo(featureHeaderContent, 1, {
    opacity: 0,
  },{
    opacity:1,  
    delay: 3.5
  });

  TweenMax.fromTo(featureHeaderContent2, 1, {
    opacity: 0,
  },{
    opacity:1,  
    delay: 4
  });

  TweenMax.fromTo(featureHeaderContent3, 1, {
    opacity: 0,
  },{
    opacity:1,  
    delay: 4.5
  });

  TweenMax.fromTo(downArrow, 1, {
    opacity: 0,
  },{
    opacity: 1,
    delay: 6
  });

  TweenMax.fromTo(downArrow, 1, {
    y: 0,
  },{
    y: -5,
    yoyo: true,
    repeat: -1,
    delay: 6
  });
}


/* assigning active class to current Myth */


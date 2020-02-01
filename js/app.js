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
  let progressBar = document.querySelector('#progressBar');
  let sideNav = document.querySelector('#mySidenav');
  let introductionPage = document.querySelector('#screen1_bgOne');
  let mainNav = document.querySelector('.navigation');
  let featureHeader = document.querySelector('.featuredHeader');
  let featureHeaderContent = document.querySelector('.featureHeaderContent');
  let featureHeaderContent2 = document.querySelector('.featureHeaderContent2');
  let featureHeaderContent3 = document.querySelector('.featureHeaderContent3');
  let downArrow = document.querySelector('#featurePageArrow');
  let bothCharacters = document.querySelector(".characters");
  let doctor = document.getElementById('doctor').contentDocument;
  let visitor = document.getElementById('visitor').contentDocument;

  let docHead = doctor.getElementById('head');
  let visHead = visitor.getElementById('head');

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

  // progress bar animation
  TweenMax.fromTo(progressBar, 1, {
    opacity: 0,
  },{
    opacity:1,  
    delay: 1
  });

  // side nav animation
  TweenMax.fromTo(sideNav, 1, {
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
    xPercent: 10,
    rotation:5,
    yoyo: true,
    repeat: -1,
    delay: 3
  });
    
    //  head animation
  TweenMax.fromTo(visHead, 1, {
    xPercent: 10,
    rotation:5
    
  },{
    xPercent: -10,
    rotation:-5,
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
    
    
//SCREEN2 ANIMATION
let visitorScr2Char = document.getElementById('visitorScr2')
let doctorScr2 = document.getElementById('doctorScr2').contentDocument;
let visitorScr2 = document.getElementById('visitorScr2').contentDocument;

let docLayer = doctorScr2.getElementById('Layer_2');
let visLayer = visitorScr2.getElementById('Layer_2');

let bubbleScr2Red = document.getElementById('bubbleScr2');
    
 let t1 = new TimelineMax()
    .to (visitorScr2Char, 5, { x:300})
    .call(changeText, ["do you think that all patients who come to CTs get treatment like an experimental object?"], this, 4)
    .call(changeText, ["Clinical research has enforced oversight, and patients also have rights that help protect them. Before participating, you are given in-depth information about the study."], this, "+=4")
    .call(changeText, ["what about the medicines which we are getting from ct?"], this, "+=4")
    .call(changeText, ["Investigational medicines are researched extensively in a laboratory before they are ready for clinical trials with human volunteers"], this, "+=4")
    .call(changeText, ["Before medicines can be approved for use, they must undergo extensive clinical research to ensure they are safe and effective."], this, "+=4")
    .call(changeText, ["how can I believe that medicines are safe to use?"], this, "+=4")
    .call(changeText, ["government and international regulations are also in place to make sure that research involving people is done according to strict scientific and ethical guidelines"], this, "+=4")
    .call(changeText, ["wow, that’s great now I can trust cts. I would also suggest my friends and family members too."], this, "+=4")

       
    
    function changeText(newtext) {
       $("#bubbleScr2").text(newtext)
    }

}


/* assigning active class to current Myth */


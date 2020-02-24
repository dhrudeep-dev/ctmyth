$(document).foundation();
$(document).ready(function () {
  $('#nav').localScroll(800);

  //hide pill
  $("#pills").hide();
  // hide syringe
  $("#syringe").hide();
  // featured page
  $('#screen1_bgOne').parallax("50%", 0.1);

  // myth 1
  $('#screen2_bgOne').parallax("50%", 0.1);

  // myth 2 
  $('#threeSceen').parallax("50%", 0.2);

  // myth 3 
  $('.screenFour').parallax("50%", 0.3);

  // myth 4
  $('#screen5_bg').parallax("30%", 0.5);

  // myth 5
  $('#screen6_bg').parallax("20%", 0.5);

  // myth 6
  $('#screen7_bg').parallax("20%", 0.3);
})

window.onload = function () {
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

  // myth1 references
  let mythOneFocusArea = document.querySelector('#mythOneFocusArea');

  // onload reveal animation

  // nav for mobile changes
  $(".innerNav").hover(function () {
    $(this).addClass("hover");
  });
  
  setInterval(function () {
    $(".hover").addClass("slideIn");
    $(".hover").removeClass("hover");
  }, 2200);

  TweenMax.fromTo(introductionPage, 1, {
    opacity: 0
  }, {
    opacity: 1,
    ease: Power1.easeInOut,
    delay: 1
  });

  // main nav animation
  TweenMax.fromTo(mainNav, 1, {
    opacity: 0,
  }, {
    opacity: 1,
    ease: Power1.easeInOut,
    delay: 1
  });

  // progress bar animation
  TweenMax.fromTo(progressBar, 1, {
    opacity: 0,
  }, {
    opacity: 1,
    ease: Power1.easeInOut,
    delay: 1
  });

  // side nav animation
  TweenMax.fromTo(sideNav, 1, {
    opacity: 0,
  }, {
    opacity: 1,
    ease: Power1.easeInOut,
    delay: 1
  });

  // main content animation
  TweenMax.fromTo(featureHeader, 1, {
    opacity: 0,
  }, {
    opacity: 1,
    ease: Power1.easeInOut,
    delay: 2
  });

  TweenMax.fromTo(bothCharacters, 1, {
    opacity: 0
  }, {
    opacity: 1,
    ease: Power1.easeInOut,
    delay: 3
  });

  // head animation
  TweenMax.fromTo(docHead, 1, {
    xPercent: -5,
    rotation: -5,
    transformOrigin: "center center",

  }, {
    xPercent: 5,
    rotation: 5,
    yoyo: true,
    ease: Power1.easeInOut,
    repeat: -1,
    delay: 3
  });

  // head animation
  TweenMax.fromTo(visHead, 1, {
    xPercent: -5,
    rotation: -5,
    transformOrigin: "center center"

  }, {
    xPercent: 5,
    rotation: 5,
    yoyo: true,
    ease: Power1.easeInOut,
    repeat: -1,
    delay: 4
  });


  TweenMax.fromTo(featureHeaderContent, 1, {
    opacity: 0,
  }, {
    opacity: 1,
    ease: Power1.easeInOut,
    delay: 3.5
  });

  TweenMax.fromTo(featureHeaderContent2, 1, {
    opacity: 0,
  }, {
    opacity: 1,
    ease: Power1.easeInOut,
    delay: 4
  });

  TweenMax.fromTo(featureHeaderContent3, 1, {
    opacity: 0,
  }, {
    opacity: 1,
    ease: Power1.easeInOut,
    delay: 4.5
  });

  TweenMax.fromTo(downArrow, 1, {
    opacity: 0,
  }, {
    opacity: 1,
    ease: Power1.easeInOut,
    delay: 5
  });

  TweenMax.fromTo(downArrow, 1, {
    y: 0,
  }, {
    y: -5,
    yoyo: true,
    repeat: -1,
    ease: Power1.easeInOut,
    delay: 6
  });

  TweenMax.fromTo("#scr2Anim", 1.5, {
    opacity: 0
  }, {
    opacity: 1,
    ease: Power1.easeInOut,
    delay: 1
  });
  TweenMax.fromTo("#scr3Anim", 1.5, {
    opacity: 0
  }, {
    opacity: 1,
    ease: Power1.easeInOut,
    delay: 1
  });
}

/* onScroll anmation effect start here */
window.onscroll = function () {
  // progressbar effect
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

  // first animation starts here
  startAnm1();
};

// variable to stop calling myth1 function onscroll
let executed = false;
let executedscr2 = false;
let executedscr3 = false;
let executedscr4 = false;
let executedscr5 = false;

// first myth's animation start here
function startAnim() {
  executed = true;
  TweenMax.to("#scr2Anim", 3, {    opacity: 1  });

  // variables for characters
  let visitorScr2Char = document.getElementById('visitorScr2');
  let doctorScr2 = document.getElementById('doctorScr2').contentDocument;
  let visitorScr2 = document.getElementById('visitorScr2').contentDocument;

  let visLeftFeet = visitorScr2.getElementById('leftFeet');
  let visRightFeet = visitorScr2.getElementById('rightFeet');
  let visRightPant = visitorScr2.getElementById('rightLeg');
  let visLeftPant = visitorScr2.getElementById('leftLeg');
  let visEyes = visitorScr2.getElementById('visEyes');
  let visLipUpper = visitorScr2.getElementById('upperLip');
  let visLipLower = visitorScr2.getElementById('lowerLip');

  let docLayer = doctorScr2.getElementById('Layer_2');
  let docMouth = doctorScr2.getElementById('mouth');
  let docEyes = doctorScr2.getElementById('docEyes');
  let visLayer = visitorScr2.getElementById('Layer_2');

  let bubbleScr2Red = document.getElementById('bubbleScr2');

  TweenMax.fromTo(visitorScr2Char, 3.5, {
    opacity: 0
  }, {
    opacity: 1,
    delay: 1
  });

  let t1 = new TimelineMax()
    .to(visitorScr2Char, 4, {
      x: 170
    }, 3)

    .to(visEyes, 8, {
      x: 10
    }, 3)

    .to(docEyes, 8, {
      x: -10
    }, 3)
    .call(changeText, ["Do you think that all patients who come to Clinical Trials get treatment like an experimental object?"], this, 6)
    .call(changeText1, ["Clinical research has enforced oversight, and patients also have rights that help protect them. Before participating, you are given in-depth information about the study."], this, "+=6")
    .call(changeText, ["What about the medicines which we are getting from clinical trial?"], this, "+=6")
    .call(changeText1, ["Investigational medicines are researched extensively in a laboratory before they are ready for clinical trials with human volunteers"], this, "+=6")
    .call(changeText1, ["Before medicines can be approved for use, they must undergo extensive clinical research to ensure they are safe and effective."], this, "+=6")
    .call(changeText, ["How can I believe that medicines are safe to use?"], this, "+=6")
    .call(changeText1, ["Government and international regulations are also in place to make sure that research involving people is done according to strict scientific and ethical guidelines"], this, "+=6")
    .call(changeText, ["Wow, that’s great now I can trust clinical trials. I would also suggest my friends and family members too."], this, "+=6")

  function docTalking() {
    TweenMax.fromTo(docMouth, 1, {
      scaleY: 1,
    }, {
      scaleY: 0.5,
      repeat: 5,
      yoyo: true
    });
  }

  function visTalking() {
    TweenMax.fromTo(visLipUpper, 1, {
      y: 0,
    }, {
      y:-1.5,
      repeat: 5,
      yoyo: true
    });

    TweenMax.fromTo(visLipLower, 1, {
      y: 0,
    }, {
      y: 1.5,
      repeat: 5,
      yoyo: true
    });
  }



  function changeText1(newtext) {
    docTalking();
    $("#bubbleScr3").show();
    $("#bubbleScr3").text(newtext)
    $("#bubbleScr2").hide();
  }

  function changeText(newtext) {
    visTalking();
    $("#bubbleScr2").show();
    $("#bubbleScr2").text(newtext)
    $("#bubbleScr3").hide();

  }

  function myFunction() {
    let x = document.getElementById("bubbleSrc2");
    if (x.style.display === "none") {
      x.style.display = changeText;
    } else {
      x.style.display = changeText1;
    }
  }
}

/* calling first myth animation here */
function startAnm1() {
  if (document.body.scrollTop > 768 || document.documentElement.scrollTop > 768) {
    if (executed != true) {
      startAnim();
    }
  }
  if (document.body.scrollTop > 1768 || document.documentElement.scrollTop > 1768) {
    if (executedscr2 != true) {
      startAnimmyth2();
    }
  }
  if (document.body.scrollTop > 2768 || document.documentElement.scrollTop > 2768) {
    if (executedscr3 != true) {
      startAnimMyth3();
    }
  }
  if (document.body.scrollTop > 3768 || document.documentElement.scrollTop > 3768) {
    if (executedscr4 != true) {
      startAnimMyth4();
    }
  }
  if (document.body.scrollTop > 4768 || document.documentElement.scrollTop > 4768) {
    if (executedscr5 != true) {
      startAnimMyth5();
    }
  }
}
/* assigning active class to current Myth */

/* second myth animation */
// first myth's animation start here
function startAnimmyth2() {
  executedscr2 = true;

  console.log('getting call');
  TweenMax.to("#scr3Anim", 3, {    opacity: 1  });

  // variables for characters
  let visitorScr2Char = document.getElementById('visitorScr3');
  let doctorScr2 = document.getElementById('doctorScr3').contentDocument;
  let visitorScr2 = document.getElementById('visitorScr3').contentDocument;

  let visLeftFeet = visitorScr2.getElementById('leftFeet');
  let visRightFeet = visitorScr2.getElementById('rightFeet');
  let visRightPant = visitorScr2.getElementById('rightLeg');
  let visLeftPant = visitorScr2.getElementById('leftLeg');
  let visEyes = visitorScr2.getElementById('visEyes');


  let docLayer = doctorScr2.getElementById('Layer_2');
  let docMouth = doctorScr2.getElementById('mouth');
  let docEyes = doctorScr2.getElementById('docEyes');
  let visLayer = visitorScr2.getElementById('Layer_2');

  let bubbleScr2Red = document.getElementById('bubbleScr3');

  //animation images
  let currFadeinImg = document.getElementById('myth2Allimg');

  TweenMax.fromTo(visitorScr2Char, 3.5, {
    opacity: 0
  }, {
    opacity: 1,
    delay: 1
  });

  let t1 = new TimelineMax()
    .to(visitorScr2Char, 4, {
      x: 170
    }, 3)

    .to(visEyes, 8, {
      x: 10
    }, 3)

    .to(docEyes, 8, {
      x: -10
    }, 3)
    .call(changeText, ["Every trial uses a placebo as a comparison!!!!!!"], this, 6)
    .call(changeText1, ["Cts only use placebo on patient if the patient is suffering from serious illness like cancer."], this, "+=6")
    .call(changeImgpath, ["images/myth2.svg"], this, "+=6")
    .call(changeText1, ["Cts only use placebo if existing therapies are not effective enough."], this, "+=6")
    .call(changeImgpath, ["images/placeboImg.png"], this, "+=6")
    .call(changeText, ["How does patient can know if they are getting treatement with the placebo effect?"], this, "+=6")
    .call(changeText1, ["Cts inform patients about placebo before treating them."], this, "+=6")
    .call(changeText1, ["Cts give all the necessary information about placebo to patients before the treatment."], this, "+=6")
    .call(changeText, ["Wow that’s good, at east patient has informed before the treatment."], this, "+=6")

  function docTalking() {
    TweenMax.fromTo(docMouth, 1, {
      scaleY: 1,
    }, {
      scaleY: 0.5,
      repeat: 5,
      yoyo: true
    });
  }

  function changeText1(newtext) {
    docTalking();
    $("#myth2Allimg").hide();
    $("#bubbleScr3sec").show();
    $("#bubbleScr3sec").text(newtext)
    $("#bubbleScr3first").hide();
  }

  function changeText(newtext) {
    $("#myth2Allimg").hide();
    $("#bubbleScr3first").show();
    $("#bubbleScr3first").text(newtext)
    $("#bubbleScr3sec").hide();
  }

  function changeImgpath(newtext) {
    $("#bubbleScr3first").hide();
    $("#bubbleScr3sec").hide();
    $("#myth2Allimg").show();
    $("#myth2Allimg").attr("src", newtext);
  }

  function myFunction() {
    let x = document.getElementById("bubbleSrc2");
    if (x.style.display === "none") {
      x.style.display = changeText;
    } else {
      x.style.display = changeText1;
    }
  }
}

/* --------------------------- myth 3 animation --------------------------- */

function startAnimMyth3() {

  executedscr3 = true;

  let myth3FocusArea = document.querySelector("#myth3FocusArea");
  let officeMyth3 = document.querySelector("#officeMyth3");
  let officeMyth3SVG = document.querySelector("#officeMyth3").contentDocument;
  let visitorMyth3 = officeMyth3SVG.querySelector("#visitor");
  let visitorMyth3Head = officeMyth3SVG.querySelector("#visitorMyth3Head");
  let clerkMyth3Head = officeMyth3SVG.querySelector("#head");
  let visLipUpper = officeMyth3SVG.querySelector('#upperLip');
  let visLipLower = officeMyth3SVG.querySelector('#lowerLip');
  let clerkMouth = officeMyth3SVG.querySelector('#mouth');

  // animating focus area
  TweenMax.fromTo(myth3FocusArea, 1, {
    scale: 0,
    opacity: 0,
    borderRadius: "100%",
    transformOrigin: "center center"
  },{
    scale: 1,
    opacity: 1,
    ease: Power1.easeInOut,
    borderRadius: "10px"
  });

  // animating office background
  TweenMax.fromTo(officeMyth3, 1, {
    scale: 0,
    opacity: 0,
    borderRadius: "100%",
    transformOrigin: "center center"
  },{
    scale: 1,
    opacity: 1,
    ease: Power1.easeInOut,
    borderRadius: "10px"
  });

  // animate visitor
  TweenMax.fromTo(visitorMyth3, 1, {
    opacity: 0,
  },{
    opacity: 1,
    ease: Power1.easeInOut,
    delay: 2
  });

  // animate visitor walking into office
  TweenMax.fromTo(visitorMyth3, 2, {
    x: 0,
    y: 0,
    scale: 1
  },{
    x: -50,
    y:40,
    scale: 3,
    ease: Power1.easeInOut,
    delay: 3
  });

  // animate visitor walking towards clerk
  TweenMax.to(visitorMyth3, 3, {
    x: 600,
    y:40,
    delay: 6
  });

  // animate visitor head movement
  TweenMax.fromTo(visitorMyth3Head, 1, {
    xPercent: -5,
    rotation: -5,
    transformOrigin: "center center"

  }, {
    xPercent: 5,
    rotation: 5,
    yoyo: true,
    ease: Power1.easeInOut,
    repeat: -1,
    delay: 9
  });

  // animate clerk head movement
  TweenMax.fromTo(clerkMyth3Head, 1, {
    xPercent: -5,
    rotation: -5,
    transformOrigin: "center center"

  }, {
    xPercent: 5,
    rotation: 5,
    yoyo: true,
    ease: Power1.easeInOut,
    repeat: -1,
    delay: 10
  });

// animate clerk talking
  function clerkTalking() {
    TweenMax.fromTo(clerkMouth, 1, {
      scaleY: 1,
    }, {
      scaleY: 0.5,
      repeat: 5,
      yoyo: true
    });
  }

  // animate visitor talking
  function visTalking() {
    TweenMax.fromTo(visLipUpper, 1, {
      y: 0,
    }, {
      y:-0.5,
      repeat: 5,
      yoyo: true
    });

    TweenMax.fromTo(visLipLower, 1, {
      y: 0,
    }, {
      y: 0.5,
      repeat: 5,
      yoyo: true
    });
  }


  let t1 = new TimelineMax()
    .call(changeText, ["Every trial uses a placebo as a comparison!!!!!!"], this, 10)
    .call(changeText1, ["Cts only use placebo on patient if the patient is suffering from serious illness like cancer."], this, "+=6")
    .call(changeText1, ["Cts only use placebo if existing therapies are not effective enough."], this, "+=6")
    .call(changeText, ["How does patient can know if they are getting treatement with the placebo effect?"], this, "+=6")
    .call(changeText1, ["Cts inform patients about placebo before treating them."], this, "+=6")
    .call(changeText1, ["Cts give all the necessary information about placebo to patients before the treatment."], this, "+=6")
    .call(changeText, ["Wow that’s good, at east patient has informed before the treatment."], this, "+=6")


  function changeText1(newtext) {
    $("#bubbleScr4sec").show();
    $("#bubbleScr4sec").text(newtext)
    $("#bubbleScr4first").hide();

    clerkTalking();
  }

  function changeText(newtext) {
    $("#bubbleScr4first").show();
    $("#bubbleScr4first").text(newtext)
    $("#bubbleScr4sec").hide();

    visTalking();
  }

  function myFunction() {
    let x = document.getElementById("bubbleSrc2");
    if (x.style.display === "none") {
      x.style.display = changeText;
    } else {
      x.style.display = changeText1;
    }
  }

}




/* --------------------------- myth 4 animation --------------------------- */

function startAnimMyth4() {

  executedscr4 = true;
  
  let visitor = document.querySelector("#visitorScr4");
  let myth4FocusArea = document.querySelector(".myth4FocusArea");
  let pills = document.querySelector("#pills");
  let syringe = document.querySelector("syringe");

   // animating focus area
  TweenMax.fromTo(myth4FocusArea, 1, {
    scale: 0,
    opacity: 0,
    borderRadius: "100%"
  },{
    scale: 1,
    opacity: 1,
    borderRadius: "5px",
    ease: Expo.easeOut
  });
  
  console.log("sleeping")

  TweenMax.fromTo(visitor, 1, {
    scale: 0,
    opacity: 0
    // borderRadius: "100%"
  },{
    scale: 1.9,
    opacity: 1,
    // delay: 2
    // borderRadius: "10px"
  });
  $("#pills").show();
  TweenMax.fromTo("#pills",1,{
  x:0,
  y:0,
  opacity:1
},{
  x:370,
  y:-200
});
// TweenMax.to("#pills", 1, {
//   x:720,
//    y:0
// });
// $("pills").fadeOut();
// TweenMax.fromTo("#pills",6,{
//   x:370,
//   y:-200
// },{
//   x:100,
//   y:100
// });
$("#syringe").show();
  TweenMax.fromTo("#syringe",7,{
  x:0,
  y:0,
  
},{
  x:320,
  y:-300,
});
}


/* --------------------------- myth 5 animation --------------------------- */

function startAnimMyth5() {
  executedscr5 = true;

  let myth5FocusArea = document.querySelector("#myth5FocusArea");
  
  // animating focus area
  TweenMax.fromTo(myth5FocusArea, 1, {
    scale: 0,
    opacity: 0,
    borderRadius: "100%",
    transformOrigin: "center center"
  },{
    scale: 1,
    opacity: 1,
    ease: Power1.easeInOut,
    borderRadius: "10px"
  });
}
$(document).foundation();
$(document).ready(function () {
  $('#nav').localScroll(800);

  //hide pill
  // $("#pills").hide();
  // hide syringe
  // $("#syringe").hide();
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
  let featurePageReplay = document.querySelector("#featurePageReplay");

  let docHead = doctor.getElementById('head');
  let visHead = visitor.getElementById('head');

  // myth1 references
  let mythOneFocusArea = document.querySelector('#mythOneFocusArea');

  let featurePageTimeline = new TimelineMax();
  // let myth1Timeline = new TimelineMax();
  // let myth2Timeline = new TimelineMax();
  // let myth3Timeline = new TimelineMax();
  // let myth4Timeline = new TimelineMax();
  // let myth5Timeline = new TimelineMax();

  const animateFeaturePage = () => {
    // featurePageTimeline.fromTo(introductionPage, 0.3, {opacity: 0},{opacity: 1, ease: Power1.easeInOut}, "+=0")
    // featurePageTimeline.fromTo(mainNav, 0.3, {opacity: 0},{opacity: 1, ease: Power1.easeInOut}, "+=0")
    // featurePageTimeline.fromTo(progressBar, 0.3, {opacity: 0},{opacity: 1, ease: Power1.easeInOut}, "+=0")
    // featurePageTimeline.fromTo(sideNav, 0.3, {opacity: 0},{opacity: 1, ease: Power1.easeInOut}, "+=0")
    featurePageTimeline.fromTo(featureHeader, 0.3, {
      opacity: 0
    }, {
      opacity: 1,
      ease: Power1.easeInOut
    }, "+=0")
    featurePageTimeline.fromTo(bothCharacters, 0.3, {
      opacity: 0
    }, {
      opacity: 1,
      ease: Power1.easeInOut
    }, "+=0")
    featurePageTimeline.fromTo(docHead, 0.6, {
      xPercent: -5,
      rotation: -5,
      transformOrigin: "center center"
    }, {
      xPercent: 5,
      rotation: 5,
      yoyo: true,
      ease: Power1.easeInOut,
      repeat: -1
    }, "+=0")
    featurePageTimeline.fromTo(visHead, 0.6, {
      xPercent: -5,
      rotation: -5,
      transformOrigin: "center center"
    }, {
      xPercent: 5,
      rotation: 5,
      yoyo: true,
      ease: Power1.easeInOut,
      repeat: -1
    }, "+=0")
    featurePageTimeline.fromTo(featureHeaderContent, 0.3, {
      opacity: 0
    }, {
      opacity: 1,
      ease: Power1.easeInOut
    }, "+=0")
    featurePageTimeline.fromTo(featureHeaderContent2, 0.3, {
      opacity: 0
    }, {
      opacity: 1,
      ease: Power1.easeInOut,
      delay: 0.3
    }, "+=0")
    featurePageTimeline.fromTo(featureHeaderContent3, 0.3, {
      opacity: 0
    }, {
      opacity: 1,
      ease: Power1.easeInOut,
      delay: 0.3
    }, "+=0")
    featurePageTimeline.fromTo(featurePageReplay, 0.8, {
      opacity: 0,
      rotation: 360
    }, {
      opacity: 1,
      rotation: 0,
      yoyo: true,
      ease: Back.easeInOut,
      transformOrigin: "center center"
    }, "+=0")
    featurePageTimeline.fromTo(downArrow, 0.3, {
      opacity: 0
    }, {
      opacity: 1,
      ease: Power1.easeInOut,
      delay: 1
    }, "+=0")
    featurePageTimeline.fromTo(downArrow, 1, {
      y: 0,
    }, {
      y: -5,
      yoyo: true,
      repeat: -1,
      ease: Power1.easeInOut
    }, "+=0")
  }

  // onload reveal animation
  animateFeaturePage();

  featurePageReplay.addEventListener("click", function () {
    featurePageTimeline.restart();
  })

  // nav for mobile changes
  $(".innerNav").hover(function () {
    $(".hover").removeClass("slideIn");
    $(".hover").removeClass("hover");
    $(this).addClass("hover");
  });

  setInterval(() => {
    console.log('calling fun');
    $(".hover").removeClass("hover");
    $(".hover").addClass("slideIn");

  }, 3000)


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
let executedscr6 = false;


// first myth's animation start here
function startAnim() {
  executed = true;
  TweenMax.to("#scr2Anim", 3, {
    opacity: 1
  });

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
      y: -1.5,
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
  if ($(window).scrollTop() < 768) {
    $(".hover").removeClass("hover");
    $("#intro").addClass("hover");
  }
  if ($(window).scrollTop() > 768 && $(window).scrollTop() <= 1768) {
    console.log($(window).scrollTop());
    $(".hover").removeClass("hover");
    $("#mythOne").addClass("hover");
    if (executed != true) {
      startAnim();
    }
  }
  if ($(window).scrollTop() > 1768 && $(window).scrollTop() <= 2768) {
    console.log($(window).scrollTop());
    $(".hover").removeClass("hover");
    $("#mythTwo").addClass("hover");
    if (executedscr2 != true) {

      startAnimmyth2();
    }
  }
  if ($(window).scrollTop() > 2768 && $(window).scrollTop() <= 3468) {
    $(".hover").removeClass("hover");
    $("#mythThree").addClass("hover");
    if (executedscr3 != true) {

      startAnimMyth3();
    }
  }
  if ($(window).scrollTop() > 3468 && $(window).scrollTop() <= 4468) {
    $(".hover").removeClass("hover");
    $("#mythFour").addClass("hover");
    if (executedscr4 != true) {

      startAnimMyth4();
    }
  }
  if ($(window).scrollTop() > 4468 && $(window).scrollTop() <= 5468) {
    $(".hover").removeClass("hover");
    $("#mythFive").addClass("hover");
    if (executedscr5 != true) {

      startAnimMyth5();
    }
  }

  if ($(window).scrollTop() > 5468) {
    $(".hover").removeClass("hover");
    $("#mythSix").addClass("hover");
    if (executedscr6 != true) {

      startAnimMyth6();
    }
  }
}
/* assigning active class to current Myth */

/* second myth animation */
// first myth's animation start here
function startAnimmyth2() {
  executedscr2 = true;

  console.log('getting call');
  TweenMax.to("#scr3Anim", 3, {
    opacity: 1
  });

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
  // let officeMyth3 = document.querySelector("#officeMyth3");
  // let officeMyth3SVG = document.querySelector("#officeMyth3").contentDocument;

  let visitorScr4Char = document.getElementById('visitorScr4');
  let visitorMyth3Animation = document.getElementById("visitorScr4").contentDocument;

  // head of visitor
  let visitorMyth3Head = visitorMyth3Animation.getElementById("head");
  // lips of visitor
  let visLipUpper = visitorMyth3Animation.getElementById('upperLip');
  let visLipLower = visitorMyth3Animation.getElementById('lowerLip');

  let clerkScr4Char = document.getElementById('clerkScr4');
  let clerkMyth3Animation = document.getElementById("clerkScr4").contentDocument;

  // head of clerk
  let clerkMyth3Head = clerkMyth3Animation.getElementById("head");

  // mouth of clerk
  let clerkMouth = clerkMyth3Animation.getElementById('mouth');



  // animating focus area
  TweenMax.fromTo(myth3FocusArea, 1, {
    // scale: 0,
    opacity: 0
    // borderRadius: "100%"
    // transformOrigin: "center center"
  }, {
    // scale: 1,
    opacity: 1,
    ease: Power1.easeInOut
    // borderRadius: "10px"
  });

  // animate visitor
  TweenMax.fromTo(visitorScr4Char, 1, {
    opacity: 1,
  }, {
    opacity: 1,
    ease: Power1.easeInOut,
    delay: 2
  });


  let responsiveAnimation = window.matchMedia("(max-width: 570px)");
  if (responsiveAnimation.matches) {
    // mobile animation
    TweenMax.fromTo(myth3FocusArea, 1, {
      backgroundPosition: "left center"

    }, {
      backgroundPosition: "60% 50%",
      delay: 6
    });

    // animate visitor walking into office
    //incase something goes wrong i changed the x: from 60 to 20
    TweenMax.fromTo(visitorScr4Char, 2, {
      x: 20,
      y: -40,
      scale: 0.5
    }, {
      y: 40,
      scale: 1.5,
      ease: Power1.easeInOut,
      delay: 3
    });

    // animate visitor walking towards clerk
    TweenMax.to(visitorScr4Char, 3, {
      x: 60,
      y: 40,
      delay: 6
    });

    TweenMax.fromTo(clerkScr4Char, 2, {
      visibility: 'hidden'
    }, {
      visibility: 'visible',
      x: -10,
      delay: 7
    });

  } else {
    // desktop animations

    // animate visitor walking into office
    TweenMax.fromTo(visitorScr4Char, 2, {
      x: 0,
      y: 0,
      scale: 0.5
    }, {
      x: -10,
      y: 40,
      scale: 1.5,
      ease: Power1.easeInOut,
      delay: 3
    });

    // animate visitor walking towards clerk
    TweenMax.to(visitorScr4Char, 3, {
      x: 320,
      y: 40,
      delay: 6
    });


    TweenMax.fromTo(clerkScr4Char, 1, {
      opacity: 1,
    }, {
      opacity: 1,
      ease: Power1.easeInOut,
      delay: 2
    });

  }

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
      y: -0.5,
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

// /* --------------------------- myth 4 animation --------------------------- */

function startAnimMyth4() {
  executedscr4 = true;

  // let visitorScr2Char = document.getElementById('visitorScr3');
  let visitorScr2 = document.getElementById('visitorScr3').contentDocument;

  let visLeftFeet = visitorScr2.getElementById('leftFeet');
  let visRightFeet = visitorScr2.getElementById('rightFeet');
  let visRightPant = visitorScr2.getElementById('rightLeg');
  let visLeftPant = visitorScr2.getElementById('leftLeg');
  let visEyes = visitorScr2.getElementById('visEyes');
  let visitorMyth4Animation = document.getElementById("visitorScr5").contentDocument;

  let visLipUpper = visitorMyth4Animation.getElementById('upperLip');
  let visLipLower = visitorMyth4Animation.getElementById('lowerLip');

  // let doctor = document.getElementById('doctor').contentDocument;

  // let docHead = doctor.getElementById('head');


  let visitorOne = document.querySelector("#visitorScr5").contentDocument;
  let visitor = document.querySelector("#visitorScr5");
  let myth4FocusArea = document.querySelector(".myth4FocusArea");
  let pills = document.querySelector("#pills");
  let syringe = document.querySelector("#syringe");
  let stopIcon = document.querySelector("#stopIcon");
  let stopIconTwo = document.querySelector("#stopIconTwo");
  let visHead = visitorOne.getElementById('head');




  // animating focus area
  let responsiveAnimation1 = window.matchMedia("(max-width: 570px)");
  if (responsiveAnimation1.matches) {
    // mobile animation
    TweenMax.fromTo(myth4FocusArea, 1, {
      scale: 0,
      opacity: 0,
      borderRadius: "100%"
    }, {
      scale: 1,
      opacity: 1,
      borderRadius: "5px",
      ease: Expo.easeOut
    });

    TweenMax.fromTo(visitor, 1, {
      scale: 0,
      opacity: 0

    }, {
      scale: 1.5,
      opacity: 1,
    });
    // head animation
    TweenMax.fromTo(visHead, 1, {
      yPercent: -5,
      rotation: -5,
      transformOrigin: "center center",
      transform: "-webkit-rotate3d(-1, 1, 0, 360deg)"

    }, {
      zPercent: 5,
      rotation: 5,
      yoyo: true,
      ease: Power1.easeInOut,
      repeat: -1,
      delay: 4
    });

    // animate visitor talking
    function visTalking() {
      TweenMax.fromTo(visLipUpper, 1, {
        y: 0,
      }, {
        y: -0.5,
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
    // $("#explain4").hide();
    let t1 = new TimelineMax()
      .call(changeText, ["Is Clinical trials are for patients who have run out of options?"], this, 1)

    function changeText(newtext) {
      $("#bubbleScr5sec").show();
      $("#bubbleScr5sec").text(newtext);
      console.log(newtext);

      visTalking();
    }


    let t2 = new TimelineMax()

    TweenMax.fromTo(pills, 3, {
      opacity: 0

    }, {

      opacity: 1,
      x: 60
    })

    TweenMax.fromTo(syringe, 3, {
      opacity: 0

    }, {

      opacity: 1,
      x: -50
    })

    TweenMax.fromTo(stopIcon, 2, {
      opacity: 0
    }, {
      delay: 3,
      opacity: 1
    })

    TweenMax.fromTo(stopIcon, 1, {
      opacity: 0
    }, {
      opacity: 0
    })
    TweenMax.fromTo(stopIconTwo, 1, {
      opacity: 0
    }, {
      opacity: 0
    })
    // $(stopIcon).hide();

    TweenMax.fromTo(stopIconTwo, 2, {
      opacity: 0
    }, {
      delay: 3,
      opacity: 1
    })
  } else {
    // desktop animations

    TweenMax.fromTo(myth4FocusArea, 1, {
      scale: 0,
      opacity: 0,
      borderRadius: "100%"
    }, {
      scale: 1,
      opacity: 1,
      borderRadius: "5px",
      ease: Expo.easeOut
    });

    TweenMax.fromTo(visitor, 1, {
      scale: 0,
      opacity: 0

    }, {
      scale: 1.9,
      opacity: 1,
    });
    // head animation
    TweenMax.fromTo(visHead, 1, {
      yPercent: -5,
      rotation: -5,
      transformOrigin: "center center",
      transform: "-webkit-rotate3d(-1, 1, 0, 360deg)"

    }, {
      zPercent: 5,
      rotation: 5,
      yoyo: true,
      ease: Power1.easeInOut,
      repeat: -1,
      delay: 4
    });

    // animate visitor talking
    function visTalking() {
      TweenMax.fromTo(visLipUpper, 1, {
        y: 0,
      }, {
        y: -0.5,
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
    // $("#explain4").hide();
    let t1 = new TimelineMax()
      .call(changeText, ["Is Clinical trials are for patients who have run out of options?"], this, 1)

    function changeText(newtext) {
      $("#bubbleScr5sec").show();
      $("#bubbleScr5sec").text(newtext);
      console.log(newtext);

      visTalking();
    }


    let t2 = new TimelineMax()

    TweenMax.fromTo(pills, 3, {
      opacity: 0

    }, {

      opacity: 1,
      x: 200
    })

    TweenMax.fromTo(syringe, 3, {
      opacity: 0

    }, {

      opacity: 1,
      x: -200
    })




    TweenMax.fromTo(stopIcon, 2, {
      opacity: 0
    }, {
      delay: 3,
      opacity: 1
    })

    TweenMax.fromTo(stopIcon, 1, {
      opacity: 0
    }, {
      opacity: 0
    })
    // $(stopIcon).hide();

    TweenMax.fromTo(stopIconTwo, 2, {
      opacity: 0
    }, {
      delay: 3,
      opacity: 1
    })
    TweenMax.fromTo("#myth4Text", 2, {
      opacity: 0
    }, {
      delay: 3,
      opacity: 1
    })
  }
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
  }, {
    scale: 1,
    opacity: 1,
    ease: Power1.easeInOut,
    borderRadius: "10px"
  });
}

/* --------------------------- myth 6 animation --------------------------- */
function startAnimMyth6() {
  executedscr6 = true;

  let myth6FocusArea = document.querySelector(".myth6FocusArea");
  // slide 1
  let pointOne = document.querySelector("#firstPoint");
  let headingMyth6 = document.querySelector(".headingMyth6");
  let syringeMyth6 = document.querySelector("#syringeMyth6");
  let patientMyth6 = document.querySelector("#patientMyth6");
  let syringe = document.getElementById("syringeMyth6").contentDocument;
  let patient = document.getElementById("patientMyth6").contentDocument;
  let patientSkin = patient.getElementsByClassName("st1");
  let patientLips = patient.getElementById("lips");
  let patientEyes = patient.getElementById("eyes");
  let patientSick = patient.getElementById("sick");
  let liquid = syringe.getElementById("liquid");
  let inject = syringe.getElementById("pusher");
  let needle = syringe.getElementById("needle");
  // slide 2
  let pointTwo = document.querySelector("#secondPoint");
  let headingMyth6Point2 = document.querySelector("#headingMyth6Point2");
  let slide2Img = document.querySelector("#handMedicineMyth6");
  let handMedicineMyth6 = document.getElementById("handMedicineMyth6").contentDocument;
  let handMedicine = handMedicineMyth6.getElementById("handMedicine");
  // slide 3
  let pointThree = document.querySelector("#thirdPoint");
  let headingMyth6Point3 = document.querySelector("#headingMyth6Point3");
  // slide 4
  let pointFour = document.querySelector("#fourthPoint");
  let headingMyth6Point4 = document.querySelector("#headingMyth6Point4");

  let myth6Replay = document.querySelector("#myth6Replay");

  // animating myth 6 focus area
  TweenMax.fromTo(myth6FocusArea, 1, {
    scale: 0,
    opacity: 0,
    borderRadius: "100%",
    transformOrigin: "center center"
  }, {
    scale: 1,
    opacity: 1,
    ease: Power1.easeInOut,
    borderRadius: "10px",
    onComplete: function () {
      TweenMax.fromTo(headingMyth6, 1, {
        opacity: 0,
      }, {
        opacity: 1,
        ease: Power1.easeInOut
      })
    }
  });

  let responsiveAnimation = window.matchMedia("(max-width: 570px)");
  //  mobile animation 
  if (responsiveAnimation.matches) {

    // animation sequence
    let myth6Timeline = new TimelineMax()

      // fade in patient
      .to(patientMyth6, 2, {
        opacity: 1,
        scale: 1.5
      })

      // fade in syringe
      .fromTo(syringeMyth6, 1, {
        opacity: 1,
        x: 300,
        scale: 1
      },{
        x: 100
      })

      // move to patient arm
      .to(syringeMyth6, 1, {
        y: 250,
      }, 1)

      // pushing inject in
      .to(inject, 0.8, {
        scaleX: 0.6,
        scaleY: 0.6,
        transformOrigin: "center center",
        ease: Power1.easeInOut,
        delay: 1.5
      })

      // syringe is emptying
      .fromTo(liquid, 1, {
        fillOpacity: 1,
      }, {
        fillOpacity: 0,
        ease: Power0.easeNone
      },'-=0.3')

      // needle going in
      .to(needle, 2, {
        scaleX: 0.5,
        scaleY: 0.5,
        transformOrigin: "center center",
        ease: Power1.easeInOut
      }, '-=2')


      // patient getting sick
      .to(patientSkin, 2, {
        fill: "#c0ff96"
      })

      .to(patientSick, 2, {
        opacity: 1
      }, '-=3')

      // patient getting sick
      .to(patientEyes, 2, {
        scale: 0.9,
        transformOrigin: "center center"
      })

      // hide slide 1
      .to(pointOne, 0.5, {
        opacity: 0,
        display: "none"
      })

      // show slide 2
      .to(pointTwo, 1, {
        opacity: 1,
        onComplete: function () {
          TweenMax.to(headingMyth6Point2, 1, {
            opacity: 1,
            ease: Power1.easeInOut
          })
          
          // animate in asset for slide 2
          TweenMax.to(slide2Img, 1, {
            opacity: 1
          })

          TweenMax.to(handMedicine, 2, {
            opacity: 1
          })

          TweenMax.fromTo(handMedicine, 2, {
            x: -300
          },{
            x: -150
          })
        }
      })

      // hide slide 2
      .to(pointTwo, 0.5, {
        opacity: 0,
        display: "none",
        delay: 10
      })

      // show slide 3
      .to(pointThree, 1, {
        opacity: 1,
        display: "block",
        onComplete: function () {
          TweenMax.to(headingMyth6Point3, 1, {
            opacity: 1,
            ease: Power1.easeInOut
          })
        }
      })

      // hide slide 3
      .to(pointThree, 0.5, {
        opacity: 0,
        display: "none",
        delay: 5
      })

      // show slide 4
      .to(pointFour, 1, {
        display: "block",
        opacity: 1,
        onComplete: function () {
          TweenMax.to(headingMyth6Point4, 1, {
            opacity: 1,
            ease: Power1.easeInOut
          })
        }
      })

    // restart timeline
    myth6Replay.addEventListener("click", function () {
      myth6Timeline.restart();
    })
  

    // desktop animations
  } else {

    // animation sequence
    let myth6Timeline = new TimelineMax()

      // fade in patient
      .to(patientMyth6, 2, {
        opacity: 1
      })

      // fade in syringe
      .to(syringeMyth6, 1, {
        opacity: 1,
        x: -115,
        scale: 0.6
      })

      // move to patient arm
      .to(syringeMyth6, 1, {
        y: 50,
      }, 1)

      // pushing inject in
      .to(inject, 0.8, {
        scaleX: 0.6,
        scaleY: 0.6,
        transformOrigin: "center center",
        ease: Power1.easeInOut,
        delay: 1.5
      })

      // syringe is emptying
      .fromTo(liquid, 1, {
        fillOpacity: 1,
      }, {
        fillOpacity: 0,
        ease: Power0.easeNone
      },'-=0.3')

      // needle going in
      .to(needle, 2, {
        scaleX: 0.5,
        scaleY: 0.5,
        transformOrigin: "center center",
        ease: Power1.easeInOut
      }, '-=2')


      // patient getting sick
      .to(patientSkin, 2, {
        fill: "#c0ff96"
      })

      .to(patientSick, 2, {
        opacity: 1
      }, '-=3')

      // patient getting sick
      .to(patientEyes, 2, {
        scale: 0.9,
        transformOrigin: "center center"
      })

      // hide slide 1
      .to(pointOne, 0.5, {
        opacity: 0,
        display: "none"
      })

      // show slide 2
      .to(pointTwo, 1, {
        opacity: 1,
        onComplete: function () {
          TweenMax.to(headingMyth6Point2, 1, {
            opacity: 1,
            ease: Power1.easeInOut
          })
          
          // animate in asset for slide 2
          TweenMax.to(slide2Img, 1, {
            opacity: 1
          })

          TweenMax.to(handMedicine, 2, {
            opacity: 1
          })

          TweenMax.fromTo(handMedicine, 2, {
            x: -300
          },{
            x: -150
          })
        }
      })

      // hide slide 2
      .to(pointTwo, 0.5, {
        opacity: 0,
        display: "none",
        delay: 10
      })

      // show slide 3
      .to(pointThree, 1, {
        opacity: 1,
        display: "block",
        onComplete: function () {
          TweenMax.to(headingMyth6Point3, 1, {
            opacity: 1,
            ease: Power1.easeInOut
          })
        }
      })

      // hide slide 3
      .to(pointThree, 0.5, {
        opacity: 0,
        display: "none",
        delay: 5
      })

      // show slide 4
      .to(pointFour, 1, {
        display: "block",
        opacity: 1,
        onComplete: function () {
          TweenMax.to(headingMyth6Point4, 1, {
            opacity: 1,
            ease: Power1.easeInOut
          })
        }
      })

    // restart timeline
    myth6Replay.addEventListener("click", function () {
      myth6Timeline.restart();
    })
  }
}
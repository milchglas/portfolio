// NAVIGATION MOBILE

$("#toggle").click(function() {
      $(this).toggleClass('on');
      $("#resize").toggleClass("active");
});

$("#resize ul li a").click(function() {
      $(this).toggleClass('on');
      $("#resize").toggleClass("active");
});

$(".close-btn").click(function() {
      $(this).toggleClass('on');
      $("#resize").toggleClass("active");
});

// NAVIGATION MOBILE END

// NAVIGATION WORK
$(window).scroll(function() {

    if ($(this).scrollTop()>$(window).height()/8)
     {
        $('.fade-on-scroll').fadeOut();
     }
    else
     {
      $('.fade-on-scroll').fadeIn();
     }
 });
// NAVIGATION WORK END

// NAV ANIMATION


//Tweenmax ist ein großer Teil von Greensock und wird hier genutzt um die Navigation smooth einzublenden
TweenMax.from("#logobild", 1, {
      delay: 0.4, //0,4 Sekunden nach Initialisierung des html-Elements
      y: 15,  //von 15 Pixel unten
      opacity: 0, //Deckkraft auf 0
      ease: Expo.easeInOut //Geschwindigkeitskurve der Animation
})
//TweenMax.from( target:Object, duration:Number, vars:Object -> ein Objekt mit Anfangswerten )

TweenMax.from("#logoschrift", 1, {
      delay: 0.425, //0,425 Sekunden nach Initialisierung des html-Elements
      y: 15,  //von 15 Pixel unten
      opacity: 0, //Deckkraft auf 0
      ease: Expo.easeInOut //Geschwindigkeitskurve der Animation
})
//TweenMax.from( target:Object, duration:Number, vars:Object -> ein Objekt mit Anfangswerten )

TweenMax.staggerFrom("#menu li a", 1, {
      delay: 0.5, //0,5 Sekunden nach Initialisierung des html-Elements
      opacity: 0, //Deckkraft auf 0
      //Geschwindigkeitskurve der Animation
      ease: Expo.easeInOut
}, 0.1);
//TweenMax.staggerFrom( targets:Array, duration:Number, vars:Object, stagger:Number -> Zeit zwischen den Elementen )

TweenMax.from("#menu li p", 1, {
      delay: 1.0, //1 Sekunde nach Initialisierung des html-Elements
      opacity: 0, //Deckkraft auf 0
      //Geschwindigkeitskurve der Animation
      ease: Expo.easeInOut
}, 0.1);
//TweenMax.staggerFrom( targets:Array, duration:Number, vars:Object, stagger:Number -> Zeit zwischen den Elementen )


TweenMax.from(".appear", 1, {
      delay: 0.7, //0,7 Sekunden nach Initialisierung des html-Elements
      y: 8,  //von 8 Pixel unten
      opacity: 0, //Deckkraft auf 0
      ease: Expo.easeInOut //Geschwindigkeitskurve der Animation
})

// NAV ANIMATION END


//WOW ANIMATION

//WOW ist eine js-Datei welche mit animate.css zusammen arbeitet und ermöglicht es Animationen zu starten wenn der Content durch das scrollen erscheint.
//Das html-Element muss als Klasse wow enthalten und zusätzlich kann es den Animationstyp aus animate.css z.B. fadeInUp als Klasse enthaltenfr
new WOW().init(); //WOW Objekt wird erzeugt -> Animationen können abgespielt werden.

//WOW ANIMATION END

// var x = $(".one h1").offset();
// var one = $(".one").width();
// var para = $(".one h1").width();
// var right = one - (x.left + para);
// var twoOffset = $(".two h1").offset();
// var twoLeftOffset = twoOffset.left - one;
// var firstLine = twoLeftOffset + right;
// var leftPos = para + x.left;

$(function() {
  $(window).scroll(function() {
      alignElements();
  });
});

function alignElements() {
    var scrollLeft = $(window).scrollLeft();
     $( "#water-drop" ).each(function() {
         $(this).offset({ left: scrollLeft + parseInt($(this).attr("left")) });       
    });    

    
}


// init controller
var controller = new ScrollMagic.Controller();

var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			.to(".grass-img", 1,   {x: "-100%"}, 0)
			// .to(".grass-img", 1, {x: "-75%"})
			.to(".sky-img", 2, {x:"-100%"}, 0)
			.to(".tree-img", 1, {x:"-400%"}, 0)
			// .to(".sky-img", {x: "-75%"})
		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "500%"
			})
		  .setPin("#pinContainer")
			.setTween(wipeAnimation)
			.addIndicators()
			.addTo(controller);


   // var horizontal = new ScrollMagic.Scene({
   //      offset: 50,
   //      duration: 300,
   //     // reverse: false
   //    }).setTween(".horizontal-line", {width: firstLine}) // trigger a TweenMax.to tween
   //      // .addIndicators()
   //      .addTo(controller);
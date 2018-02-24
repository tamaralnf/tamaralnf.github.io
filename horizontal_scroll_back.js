


// init controller
var controller = new ScrollMagic.Controller();

var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			.to("#slideContainer", 1,   {x: "-75%"}, 0)
			
			//.to('#water-drop', 1, {x:"135%"}, 0)
			// .set("#water-drop", 1, {z-index: 2},0)

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "400%"
			})
		  .setPin("#pinContainer")
			.setTween(wipeAnimation)
			.addIndicators()
			.addTo(controller);

		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "100%"
			})
			.setTween(TweenMax.to(".grass-img", 1,   {x: "-100%"}, 0))
			.addIndicators()
			.addTo(controller);
		var waterTL = new TimelineMax()
			.to("#water-drop",  1, {y:"-100%", ease:Power0.easeNone})
			.to("#water-drop", 1, {y:"-50%", ease:Power0.easeNone})
			.to("#water-drop", 1, {y:"-100%", ease:Power0.easeNone})
			.to("#water-drop", 1, {y:"0%", ease:Power0.easeNone});



		new ScrollMagic.Scene({
			offset: 400,
			duration: "100%"
			// triggerHook: "40"
		})
		.setTween(waterTL)
		.addIndicators({
			name:"water_move"
		})
		.addTo(controller);


	  	var images = [
	  		"waterdrop.png",
	  		"1.png",
	  		"2.jpg",
	  		"3.jpg",
	  		
	  	];
  		var img = {curImg: 0};

  		var change_waterdrop = TweenMax.to(img, .5, {
  			curImg:images.length-1,
  			roundProps: "curImg",
  			repeat:3,
  			immediateRender: true,
  			ease: Linear.easeNone,
  			onUpdate: function(){
  				document.getElementById("water-drop").style.content="url("+images[img.curImg]+")";
  				document.getElementById("water-drop").style.width="30%";
  				}
  		}
  		);

	  	new ScrollMagic.Scene({
	  		offset: 800,
	  		duration:400
	  	})
	  	.setTween(change_waterdrop)
	  	.addIndicators({name: "watershape"})
	  	.addTo(controller);
  	
// trigger a TweenMax.to tween
  //       // .addIndicators()
  //       .addTo(controller);
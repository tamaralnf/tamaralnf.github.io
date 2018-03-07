


// init controller
var controller = new ScrollMagic.Controller();

var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			.to("#slideContainer", 1,   {x: "-75%"}, 0)
			.to(".tree-img", 1, {x:"-100%"}, 0)
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
				duration: "40%"
			})
			.setTween(TweenMax.to(".grass-img", 1,   {x: "-100%"}, 0))
			.addIndicators()
			.addTo(controller);
		var waterTL = new TimelineMax()
			.to("#water-drop",  1, {y:"-50%", ease:Power0.easeNone})
			.to("#water-drop", 1, {y:"-30%", ease:Power0.easeNone})
			.to("#water-drop", 1, {y:"-50%", ease:Power0.easeNone})
			.to("#water-drop", 1, {y:"-30%", ease:Power0.easeNone})
			.to("#water-drop", 1, {y:"-50%", ease:Power0.easeNone})
			.to("#water-drop", 1, {y:"0%", ease:Power0.easeNone})
		new ScrollMagic.Scene({
			offset: 500,
			duration: "30%"
			// triggerHook: "40"
		})
		.setTween(waterTL)
		.addIndicators({
			name:"water_move"
		})
		.addTo(controller);


	  	// var images = [
	  	// 	// "waterdrop.png",
	  	// 	"1.png",
	  	// 	"2.jpg",
	  	// 	"3.jpg",
	  		
	  	// ];
  		// var img = {curImg: 0};

  		// var change_waterdrop = TweenMax.to(img, .5, {
  		// 	curImg:images.length-1,
  		// 	roundProps: "curImg",
  		// 	repeat:3,
  		// 	immediateRender: true,
  		// 	ease: Linear.easeNone,
  		// 	onUpdate: function(){
  		// 		document.getElementById("water-drop").style.content="url("+images[img.curImg]+")";
  		// 		document.getElementById("water-drop").style.width="30%";
  		// 		}
  		// }
  		// );

	  	// new ScrollMagic.Scene({
	  	// 	offset: 800,
	  	// 	duration:400
	  	// })
	  	// .setTween(change_waterdrop)
	  	// .addIndicators({name: "watershape"})
	  	// .addTo(controller);

	  	// make the intro un transparent
	  	var sceneTwo = new TimelineMax()
	  		.to(".two", 1, {y:"-10%"},0)
	  		.to("#intro2", 10, {opacity:"1", y:"20%"},0)
	  		.to(".two", 1, {y:"0%"})

	  		// .pin("#intro2")


	  	new ScrollMagic.Scene({
	  		offset: "250%",
	  		duration: "20%"
	  	})
	  	.setTween(sceneTwo)
	  	.addIndicators({name: "scene 2"})
	  	.addTo(controller);

	  	// make the intro un transparent
	  	var sceneThree = new TimelineMax()
	  		// .to(".three", 1, {y:"-20%"})
	  		.to("#intro3", 2, {opacity:"1"})
	  		.to("#water-drop", 2, {y:"-100%"})

	  	new ScrollMagic.Scene({
	  		offset: "900%",
	  		duration: "40%"
	  	})
	  	.setTween(sceneThree)
	  	.addIndicators({name: "scene 3"})
	  	.addTo(controller);


	  	var sceneFour = new TimelineMax()
	  		.to("#intro4", 2, {opacity: "1"}, 0)
	  		.to("#water-drop", 2, {y:"-150%"},0)


	  	new ScrollMagic.Scene({
	  		offset: "1400%",
	  		duration: "10%"
	  	})
	  	.setTween(sceneFour)
	  	.addIndicators({name: "scene 4"})
	  	.addTo(controller);

	  	var sceneFive = new TimelineMax()
	  		.to("#water-drop", 2, {y:"-50%"},0)
	  		.to("#intro5", 2, {opacity:"1"}, 0)
	  	new ScrollMagic.Scene({
	  		offset: "1700%",
	  		duration: "10%"
	  	})
	  	.setTween(sceneFive)
	  	.addIndicators({name: "scene 5"})
	  	.addTo(controller)

	  	var sceneSix = new TimelineMax()
	  		// .to("#water-drop", 2, {y:"-50%"},0)
	  		.to("#intro6", 2, {opacity:"1"}, 0)
	  	new ScrollMagic.Scene({
	  		offset: "2200%",
	  		duration: "10%"
	  	})
	  	.setTween(sceneSix)
	  	.addIndicators({name: "scene 6"})
	  	.addTo(controller)


	  	var sceneSeven = new TimelineMax()
	  		.to("#intro7", 2, {opacity:"1"}, 0)

	  	new ScrollMagic.Scene({
	  		offset: "2900%",
	  		duration: "10%"
	  	})
	  	.setTween(sceneSeven)
	  	.addIndicators({name: "scene 7"})
	  	.addTo(controller)
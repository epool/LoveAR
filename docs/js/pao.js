$(function() {
	var mills = 50;
	var tidl = setTimeout(animatel, mills);
	var degl = 0;
	var stepl = 1;
	function animatel() {
		$(".imagenl").css("-webkit-transform", "rotateZ(" + degl + "deg)");
		$(".imagenl").css("-moz-transform", "rotateZ(" + degl + "deg)");
		$(".imagenl").css("-ms-transform", "rotateZ(" + degl + "deg)");
		if(degl == 35 || degl == -35) {
			stepl *= -1;
		}
		degl += stepl;
		tidl = setTimeout(animatel, mills);
	}
	var tidr = setTimeout(animater, mills);
	var degr = 0;
	var stepr = -1;
	function animater() {
		$(".imagenr").css("-webkit-transform", "rotateZ(" + degr + "deg)");
		$(".imagenr").css("-moz-transform", "rotateZ(" + degr + "deg)");
		$(".imagenr").css("-ms-transform", "rotateZ(" + degr + "deg)");
		if(degr == 35 || degr == -35) {
			stepr *= -1;
		}
		degr += stepr;
		tidr = setTimeout(animater, mills);
	}

	var diff = setInterval(function() {
		var today = new Date();
		var relationStartingDate = new Date(2013, 9, 27, 18, 0, 0, 0);
		var delta = today - relationStartingDate;
		var seconds = Math.floor(delta / 1000);
		var minutes = Math.floor(seconds / 60);
		var hours = Math.floor(minutes / 60);
		var days = Math.floor(hours / 24);
	
		hours = hours - (days * 24); // menos una hora por el cambio
		minutes = minutes - (days * 24 * 60) - (hours * 60);
		seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
		//$("#daysAgo").text(days + " días, " + hours + " horas, " + minutes + " minutos, " + seconds + " segundos... Y contando :)");
		var m1 = moment('2013-10-27 18:00:00','YYYY-MM-DD HH:mm:ss');
        var m2 = moment();
        var diff = m2.preciseDiff(m1);
		$("#timeAgo").text(diff + "... Y contando :)");
		
		var words = diff.split(" ");
		$("#yearsAgo").text(words[0] + " " + words[1] + " ya... :3");
	}, 1000);

	// Type effect
	/*
	$("#tresmeses").typed({
		strings: ["hola\nmundo"],
		typeSpeed: 30,
		backDelay: 500,
		loop: false,
		loopCount: false,
		callback: function() {}
	});
	*/
	var isRaShowed = false;
	$(".show-ar").click(function() {
		if (isRaShowed) {
			$("#ar").hide();
		} else {
			$("#ar").show();
			var container = $("body");
			var scrollTo = $("#ar");
			container.animate({
					scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
				});
		}
		isRaShowed = !isRaShowed;
		return false;
	});
	$(".show-ar").mouseover(function() {
		$(".show-ar").css('background-color', 'red');
	}).mouseout(function() {
		$(".show-ar").css('background-color', 'transparent');
	});
});
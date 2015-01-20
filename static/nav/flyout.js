$(function() {
  var titles = ['World',
      'Asia',
      'Asia Pacific',//nytimes
      'At War',//nytimes
      'China',
      'Europe',
      'Middle East',
      'Africa',
      'Canada',
      'Latin America',
      'U.S.',
      'Politics',
      'Elections',//nytimes
      'Economy',
      'U.S. Video',
      'Polls',
      'New York',
      'City',//nytimes
      'Events',//nytimes
      'Blogs',
      'Business',
      'Small Business',//nytimes
      'Start Ups',
      'Earnings',
      'Entrepreneurship',
      'Digital',
      'Heard on the Street',
      'Speculation',
      'Corporate Intelligence',
      'Risk & Compliance',
      'Health',
      'Health Care',
      'Law',
      'Media & Marketing',
      'Media',
      'Marketing',
      'Energy',
      'Defense',
      'Offense',
      'Tech Video',
      'PC',
      'Mac',
      'Venture Capital',
      'Tradings', 
      'Tech',
      'Markets',
      'Stocks',
      'Deals',
      'Funds',
      'Bonds',
      'Commodities',
      'Currencies', 
      'Opinion',
      'Op-Ed',
      'Letters',
      'Life',
      'Home & Garden',
      'Arts & Entertainment',
      'Art & Design',
      'Science',
      'Space & Cosmos',
      'Environment',
      'Life & Culture',
      'Sports',
      'Fashion',
      'Food & Drink',
      'Food',
      'Drink',
      'Cooking',
      'Restaurants',
      'Travel',
      'Health & Wellness',
      'Nutrition',
      'Cars',
      'Books',
      'Movies',
      'Music',
      'Dance',
      'Television',
      'Cinema',
      'Theatre',
      'Museums',
      'Culture',
      'Style', 
      'Arts',
      'Region',
      'Real Estate',
      'Commercial',
      'Careers',
      'Education',
      'Columns'];
  //Util functions
	function getRand(min, max) {
    var rand = Math.floor(Math.random() * (max - min) + min);
    return rand;
	}
	function getID() {
    var id = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < 5; i++ ) {
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
	}
	
	//Menu generation functions 
	var rightwards = true; //boolean, left or right direction
	function generateMenu(container) {
	  clearMenus($(container));
	  scaleAllCircles();
	  $(container).off();
	  $(container).addClass('active');
	  var dupe = _.without(titles, $(container).text()),
	      id = getID(),
	      leftOffset = $(container).offset().left,
	      wWidth = $(window).width(),
	      rightOffset = wWidth - (leftOffset + $(container).outerWidth());
	      
	  if(leftOffset < 200) rightwards = true;
	  else if (rightOffset < 200) rightwards = false;

	  if(rightwards) $(container).append('<nav id="'+id+'" class="right" />');
	  else $(container).append('<nav id="'+id+'" class="left" />');

	  for(var i = 0; i < getRand(2, 20); i++) {
	    var cat = dupe[getRand(0, dupe.length-1)],
	        dupe = _.without(dupe, cat),
	        markup = '<li>'+cat+'</li>';
	    $('#'+id).append(markup);
	  }
	  $('#'+id).children().click(function() {
	    generateMenu(this);
	  });
	}
	function clearMenus(container) {
	  $.each($(container).siblings(), function sibling() {
	    if($(this).hasClass('active')) {
	      $(this)
	        .removeClass('active')
	        .on('click', function() {
  	        generateMenu(this);
  	      });
	    }
	    if($(this).children().length > 0) {
	      $(this).children().remove();
	    }
	  });
	}
	function reset() {
	  $('#main>.active').children().remove()
	    .addBack()
	    .removeClass('active')
	    .on('click', function() {
	      generateMenu(this);
	    });
	  $.each(circles, function(index, circle) {
	    circle.animate({
	      r: 0
	    }, duration/2, 'ease-in-out');
	  });
	}
	
	// Controls
	$('nav li').on('click', function() {
	  generateMenu(this);
	});
	$('#background').click(reset);

  //Background Animation Functions
  var bg = $('#background'),
      wWidth = $(window).width(),
      wHeight = $(window).height(),
      centerX = wWidth/2,
      centerY = wHeight/2,
      paper = Raphael("background", wWidth, wHeight),
      circles = [], //keep track of the circles
      duration = 1000, //animation length
      circleI = 0, //scale counter, every 3 iterations make a new circle
      color = 'black';
      
  function drawCircle(width, height) {
    var circle = paper.circle(centerX, centerY, width/2)
      .attr({fill: color, 'stroke-width':0});
    if(color == 'black') color = 'white'
    else color = 'black'
    circles.push(circle);
    
    return circle;
  }
  function scaleCircle(circle, index) {
    var width = circle.getBBox().width,
        newWidth = width*2;
    if(width > wWidth && index>0) {
      var prev = circles[index-1];
      prev.remove();
      circles = _.without(circles, prev);
    }
    circle.animate({
      r: newWidth/2
    }, duration, 'ease-in-out');
  }
  function scaleAllCircles() {
    $.each(circles, function(index, circle) {
      scaleCircle(circle, index);
    });
    if(circleI % 3 == 0) drawCircle(5, 5);
    circleI++;
  }
});
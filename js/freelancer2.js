$( document ).ready(function() {
    
	
	$(".pizza-builder").on({
	    mouseenter: function () {
	        //stuff to do on mouse enter
	        var description = "Pizza builder widget that uses JavaScript and jQuery to manipulate the DOM. The price of the pizza is updated in real-time as you add/remove ingredients. HTML and CSS are used to create the graphics."
	        $(".project-description").text(description);
	    },
	    mouseleave: function () {
	        //stuff to do on mouse leave
	        $(".project-description").empty();
	    }
	});

	$(".spotify-player").on({
	    mouseenter: function () {
	        //stuff to do on mouse enter
	        var description = "Audio Player widget that makes AJAX requests to the Spotify API via JavaScript. The player's interface is made up of CSS and HTML."
	        $(".project-description").text(description);
	    },
	    mouseleave: function () {
	        //stuff to do on mouse leave
	        $(".project-description").empty();
	    }
	});

	$(".rojas-catering").on({
	    mouseenter: function () {
	        //stuff to do on mouse enter
	        var description = "A Ruby on Rails application with a PostgreSQL database. Designed for a catering company, allows customers to plan their catering events and get quotes in real time. Also provides the catering company (admin login) with a clean interface to manage all their event details."
	        $(".project-description").text(description);
	    },
	    mouseleave: function () {
	        //stuff to do on mouse leave
	        $(".project-description").empty();
	    }
	});
});


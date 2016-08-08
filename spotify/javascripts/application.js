$(document).ready(function(){

$('.js-time-bar').attr('value',0);

// =====================Event Handlers===================================
	
	$(".js-song-name-form").on("submit", function(event){
		event.preventDefault();
		var song_name = $('#song-name').val();
		var url = `https://api.spotify.com/v1/search?type=track&query=${song_name}`
		
		$.ajax({
			url: url,
			error: function(error){
				console.log(error);
			},
			success: function(response){
				console.log('succesful request');
				$('.not-found').empty();
				var track_info = response.tracks.items[0];

				if (track_info == null) {
					//alert("Can't find that one. Please try another song.")
					$('.not-found').text("Ooops, cannot find that! Try another song")
				}
	
				var track_info = {
					track_name : response.tracks.items[0].name,
					track_img_url : response.tracks.items[0].album.images[0].url,
					track_url : response.tracks.items[0].preview_url,
					track_artist : response.tracks.items[0].artists[0].name
				};
				
				if ($('.btn-play').hasClass('disabled')){
					$('.btn-play').toggleClass('disabled');
					
				}

				if ($('.btn-play').hasClass('playing')){
					$('.btn-play').toggleClass('playing')
				}
				updatePlayerInfo(track_info);
				
			}
		});
	});

	$('.btn-play').on('click',playAudio);
	$('.js-player').on('timeupdate', printTime);
	$('.author-btn').on('click',getArtistInfo);



// =====================Global functions===============================

	function updatePlayerInfo(track_info){
		
		
		$('.title').text(track_info.track_name)
		$('.author').text(track_info.track_artist)
		$('.author').data('track-artist',track_info.track_artist)
		$('.track_img').attr('src',track_info.track_img_url)
		$('.js-player').attr('src',track_info.track_url)
	};


	function playAudio(){
		if ($('.btn-play').hasClass('playing')){
			$('.js-player').trigger("pause");
			$('.btn-play').toggleClass('playing')
		}
		else {
		$('.js-player').trigger("play");
		$('.btn-play').toggleClass('playing');
		}
	}

	function printTime(){
		var current_time = $('.js-player').prop('currentTime');
		$('.js-time-bar').attr('value',current_time);

	};

	function getArtistInfo(){
		
		var track_artist = $('.author').data("track-artist");//get current artist
		var artist_url = `https://api.spotify.com/v1/search?type=artist&query=${track_artist}`
		
		$.ajax({
			type: "GET",
			url: artist_url,
			error: function(error){
				console.log(error);
			},
			success: function(response){
				displayArtistInfo(response);
			}
		});
	};

	function displayArtistInfo(response){
		console.log('display artist info:')
		
		var artist_info = {
			name: response.artists.items[0].name,
			photo_url: response.artists.items[0].images[0].url,
			genre: response.artists.items[0].genres[0],
			followers: response.artists.items[0].followers.total,
			popularity: response.artists.items[0].popularity
		}
		$('.js-modal-title').text(artist_info.name)

		var html = `<img src="${artist_info.photo_url}" height="150" width="auto">`
		
		$('.js-artist-img').html(html)
		
		$('.js-artist-details').empty();
		$('.js-artist-details').append(`<p><strong>Genre:</strong> ${artist_info.genre}</p>`)
		$('.js-artist-details').append(`<p><strong>Followers:</strong> ${artist_info.followers}</p>`)
		$('.js-artist-details').append(`<p><strong>Popularity:</strong> ${artist_info.popularity}</p>`)
		$('.js-modal').modal("show")	
	};



}); 



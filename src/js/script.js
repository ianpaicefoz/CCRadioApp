var bannerAdUnit = "ca-app-pub-3096329003114803/7523999379";
var interstitialAdUnit = "ca-app-pub-4906074177432504/1649035673";
var isOverlap = true; //true: overlap, false: split
var isTest = false;

var url_c1 = "http://radioserver01.ccradio.es/adminradio/info/info_stream.php?stream=canal_1";
var url_c2 = "http://radioserver01.ccradio.es/adminradio/info/info_stream.php?stream=canal_2";
var url_c3 = "http://radioserver01.ccradio.es/adminradio/info/info_stream.php?stream=canal_3";

var song_c1;
var song_c2;
var song_c3;

document.addEventListener("deviceready", function(){
	window.admob.setUp(bannerAdUnit, interstitialAdUnit, isOverlap, isTest);
	//
	window.admob.onBannerAdPreloaded = function() {
		/*alert('onBannerAdPreloaded');*/
	};
	window.admob.onBannerAdLoaded = function() {
		/*alert('onBannerAdLoaded');*/
	};
	window.admob.onBannerAdShown = function() {
		/*alert('onBannerAdShown');*/
	};
	window.admob.onBannerAdHidden = function() {
		/*alert('onBannerAdHidden');*/
	};	
	//
	window.admob.onInterstitialAdPreloaded = function() {
		alert('onInterstitialAdPreloaded');
	};
	window.admob.onInterstitialAdLoaded = function() {
		alert('onInterstitialAdLoaded');
	};
	window.admob.onInterstitialAdShown = function() {
		alert('onInterstitialAdShown');
	};
	window.admob.onInterstitialAdHidden = function() {
		alert('onInterstitialAdHidden');
	};
	
	window.admob.showBannerAd('bottom-center', 'SMART_BANNER');
	
}, false);


$(document).ready( function() {
	$.support.cors                 = true;
    $.mobile.allowCrossDomainPages = true;
    $.mobile.pushStateEnabled      = false;
	
	/*$.ajax({
		type: "GET",
		url: url_c1,
		dataType: "json",
        success: function(data) { 
			//alert(JSON.stringify(data));		
			//data downloaded so we call parseJSON function 
			//and pass downloaded data
			var json = $.parseJSON(JSON.stringify(data));
			//now json variable contains data in json format
			//let's display a few items
			song_c1 = json.song;
			
			$('#playing_c1').html('<center><img src="'+ json.img_album +'" width="150">' + "<br>"
								+ 'Cancion: ' + json.song + "<br>"
								+ 'Album: ' + json.album + "<br>"
								+ 'Autor: ' + json.autor + "</center>");
        }
	});

	$.ajax({
		type: "GET",
		url: url_c2,
		dataType: "json",
        success: function(data) { 
			//alert(JSON.stringify(data));		
			//data downloaded so we call parseJSON function 
			//and pass downloaded data
			var json = $.parseJSON(JSON.stringify(data));
			//now json variable contains data in json format
			//let's display a few items
			song_c2 = json.song;
			
			$('#playing_c2').html('<center><img src="'+ json.img_album +'" width="150">' + "<br>"
								+ 'Cancion: ' + json.song + "<br>"
								+ 'Album: ' + json.album + "<br>"
								+ 'Autor: ' + json.autor + "</center>");
        }
	});

	$.ajax({
		type: "GET",
		url: url_c3,
		dataType: "json",
        success: function(data) { 
			//alert(JSON.stringify(data));		
			//data downloaded so we call parseJSON function 
			//and pass downloaded data
			var json = $.parseJSON(JSON.stringify(data));
			//now json variable contains data in json format
			//let's display a few items
			song_c3 = json.song;
			
			$('#playing_c3').html('<center><img src="'+ json.img_album +'" width="150">' + "<br>"
								+ 'Cancion: ' + json.song + "<br>"
								+ 'Album: ' + json.album + "<br>"
								+ 'Autor: ' + json.autor + "</center>");
        }
	});	*/

	$(".nav_button").click(function(){
		if($(".menu").css('display') == 'none'){
			$(".menu").show();
		}else{
			$(".menu").hide();
		}
	});
	
	$(".link_button").click(function(){
		$(".menu").hide();
	});
	
	setInterval(function(){ reloadInfoMusic(); }, 5000);
	
	function reloadInfoMusic(){
		//alert("Prueba" + url_song_c1 + url_song_c2 + url_song_c3);
		$.getJSON(url_c1, function(c1_data){
			if(song_c1 != c1_data.song)
			{
				song_c1 = c1_data.song;
				$("#info_music_c1").append("I");
				$('#playing_c1').html('<center><img src="'+ c1_data.img_album +'" width="150">' + "<br>"
									+ 'Cancion: ' + c1_data.song + "<br>"
									+ 'Album: ' + c1_data.album + "<br>"
									+ 'Autor: ' + c1_data.autor + "</center>");
				$('#c1_played').append('<div><center><img src="'+ c1_data.img_album + '" width="50"><br>'+ c1_data.album +'</center></div>');								
			}
		});
		
		$.getJSON(url_c2, function(c2_data){
			if(song_c2 != c2_data.song)
			{
				song_c2 = c2_data.song;
				$("#info_music_c2").append("I");
				$('#playing_c2').html('<center><img src="'+ c2_data.img_album +'" width="150">' + "<br>"
									+ 'Cancion: ' + c2_data.song + "<br>"
									+ 'Album: ' + c2_data.album + "<br>"
									+ 'Autor: ' + c2_data.autor + "</center>");
				$('#c2_played').append('<div><center><img src="'+ c2_data.img_album + '" width="50"><br>'+ c2_data.album +'</center></div>');									
			}
		});
		
		$.getJSON(url_c3, function(c3_data){
			if(song_c3 != c3_data.song)
			{
				song_c3 = c3_data.song;
				$("#info_music_c3").append("I");
				$('#playing_c3').html('<center><img src="'+ c3_data.img_album +'" width="150">' + "<br>"
									+ 'Cancion: ' + c3_data.song + "<br>"
									+ 'Album: ' + c3_data.album + "<br>"
									+ 'Autor: ' + c3_data.autor + "</center>");
				$('#c3_played').append('<div><center><img src="'+ c3_data.img_album + '" width="50"><br>'+ c3_data.album +'</center></div>');										
			}
		});
		
	};
	
/*	var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true
    }) 
*/

});

function exitFromApp()
{
	navigator.app.exitApp();
}

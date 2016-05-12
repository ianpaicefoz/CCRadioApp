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
	
	$(".nav_button").click(function(){
		if($(".menu").css('display') == 'none'){
			$(".menu").animate({width:'toggle'},350);
		}else{
			$(".menu").animate({width:'toggle'},350);
		}
	});
	
	$(".link_button").click(function(){
		$(".menu").hide();
	});
	
	setInterval(function(){ reloadInfoMusic(); }, 5000);
	
	var c1_albums = 0;
	var c1_aux = 1;
		
	var c2_albums = 0;
	var c2_aux = 1;
		
	var c3_albums = 0;
	var c3_aux = 1;
	
	function reloadInfoMusic(){
		//alert("Prueba" + url_song_c1 + url_song_c2 + url_song_c3);
		$.getJSON(url_c1, function(c1_data){
			if(song_c1 != c1_data.song)
			{
				song_c1 = c1_data.song;
				c1_albums = c1_albums + 1;
				if(c1_albums > 3)
				{
					$("#c1_" + c1_aux).remove();
					c1_aux = c1_aux + 1;
				}
				//$("#info_music_c1").append("I" + c1_albums);
				$('#playing_c1').html('<center><img src="'+ c1_data.img_album +'" width="150">' + "<br>"
									+ 'Cancion: ' + c1_data.song + "<br>"
									+ 'Album: ' + c1_data.album + "<br>"
									+ 'Autor: ' + c1_data.autor + "</center>");
				$('#c1_played').append('<div id="c1_'+c1_albums+'" style="float:left;text-align:center;margin-left:5px;width:30%;"><img src="'+ c1_data.img_album + '" width="50"><br>'+ c1_data.song +'<br>'+ c1_data.album +'</div>');								
			}
		});
		
		$.getJSON(url_c2, function(c2_data){
			if(song_c2 != c2_data.song)
			{
				song_c2 = c2_data.song;
				c2_albums = c2_albums + 1;
				if(c2_albums > 3)
				{
					$("#c2_" + c2_aux).remove();
					c2_aux = c2_aux + 1;
				}				
				//$("#info_music_c2").append("I");
				$('#playing_c2').html('<center><img src="'+ c2_data.img_album +'" width="150">' + "<br>"
									+ 'Cancion: ' + c2_data.song + "<br>"
									+ 'Album: ' + c2_data.album + "<br>"
									+ 'Autor: ' + c2_data.autor + "</center>");
				$('#c2_played').append('<div id="c2_'+c2_albums+'" style="float:left;text-align:center;margin-left:5px;width:30%;"><img src="'+ c2_data.img_album + '" width="50"><br>'+ c2_data.song +'<br>'+ c2_data.album +'</div>');									
			}
		});
		
		$.getJSON(url_c3, function(c3_data){
			if(song_c3 != c3_data.song)
			{
				song_c3 = c3_data.song;
				c3_albums = c3_albums + 1;
				if(c3_albums > 3)
				{
					$("#c3_" + c3_aux).remove();
					c3_aux = c3_aux + 1;
				}	
				//$("#info_music_c3").append("I");
				$('#playing_c3').html('<center><img src="'+ c3_data.img_album +'" width="150">' + "<br>"
									+ 'Cancion: ' + c3_data.song + "<br>"
									+ 'Album: ' + c3_data.album + "<br>"
									+ 'Autor: ' + c3_data.autor + "</center>");
				$('#c3_played').append('<div id="c3_'+c3_albums+'"style="float:left;text-align:center;margin-left:5px;width:30%;"><img src="'+ c3_data.img_album + '" width="50"><br>'+ c3_data.song +'<br>'+ c3_data.album +'</div>');										
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

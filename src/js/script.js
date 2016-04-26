var bannerAdUnit = "ca-app-pub-3096329003114803/7523999379";
var interstitialAdUnit = "ca-app-pub-4906074177432504/1649035673";
var isOverlap = true; //true: overlap, false: split
var isTest = false;


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
	
	$.ajax({
		type: "GET",
		url: "http://radioserver01.ccradio.es/adminradio/info/info_stream.php?stream=canal_1",
		dataType: "json",
        success: function(data) { 
			//alert(JSON.stringify(data));		
			//data downloaded so we call parseJSON function 
			//and pass downloaded data
			var json = $.parseJSON(JSON.stringify(data));
			//now json variable contains data in json format
			//let's display a few items
			
			$('#playing_c1').html('<center><img src="'+ json.img_album +'" width="150">' + "<br>"
								+ 'Cancion: ' + json.song + "<br>"
								+ 'Album: ' + json.album + "<br>"
								+ 'Autor: ' + json.autor + "</center>");
        }
	});

	$.ajax({
		type: "GET",
		url: "http://radioserver01.ccradio.es/adminradio/info/info_stream.php?stream=canal_2",
		dataType: "json",
        success: function(data) { 
			//alert(JSON.stringify(data));		
			//data downloaded so we call parseJSON function 
			//and pass downloaded data
			var json = $.parseJSON(JSON.stringify(data));
			//now json variable contains data in json format
			//let's display a few items
			
			$('#playing_c2').html('<center><img src="'+ json.img_album +'" width="150">' + "<br>"
								+ 'Cancion: ' + json.song + "<br>"
								+ 'Album: ' + json.album + "<br>"
								+ 'Autor: ' + json.autor + "</center>");
        }
	});

	$.ajax({
		type: "GET",
		url: "http://radioserver01.ccradio.es/adminradio/info/info_stream.php?stream=canal_3",
		dataType: "json",
        success: function(data) { 
			//alert(JSON.stringify(data));		
			//data downloaded so we call parseJSON function 
			//and pass downloaded data
			var json = $.parseJSON(JSON.stringify(data));
			//now json variable contains data in json format
			//let's display a few items
			
			$('#playing_c3').html('<center><img src="'+ json.img_album +'" width="150">' + "<br>"
								+ 'Cancion: ' + json.song + "<br>"
								+ 'Album: ' + json.album + "<br>"
								+ 'Autor: ' + json.autor + "</center>");
        }
	});	

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

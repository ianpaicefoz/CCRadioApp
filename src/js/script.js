var bannerAdUnit = "ca-app-pub-3096329003114803/7523999379";
//var interstitialAdUnit = "ca-app-pub-4906074177432504/1649035673";
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

	
/*	var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true
    }) 
*/

});

function loadMenu(){
	if($(".menu").css('display') == 'none'){
		$(".menu").show('slow');
	}
	else
		$(".menu").hide('slow');
	
}

function exitFromApp()
{
	navigator.app.exitApp();
}

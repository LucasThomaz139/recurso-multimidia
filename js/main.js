var video = document.getElementById("midia");
 var volvideo = document.getElementById("volumeVideo");
 var volume_valor = document.getElementById("vv");
 var duracao=document.getElementById("tempo");
 var tempo_valor=document.getElementById("tempo_valor");
console.log(duracao);
var aud = document.getElementById("au");
var dura=document.getElementById("temp");
var tempvalor=document.getElementById("tempovalores");
var volaudio=document.getElementById("volumeaudio");
var vvolume=document.getElementById("vaaudio");
var viddeo = ["midia/triple.mp4","midia/dance.mp4"];
var audio=["midia/musica.mp3","midia/maitre.mp3"]

var vv=0;


function play() {
  if(aud.play()){
      aud.pause();
      video.play();
  }
  
    
}
var c = 0;
function pass(){
  if(c == 0){
     video.poster="img/tri.png";
      video.src=viddeo[0];        
      c = 1;
      console.log('AQUI');
      
  } else if(c == 1){
     video.poster="img/dances.png";
      video.src=viddeo[1];
      c = 0;
      console.log("não");
  }  
}


function voltar(){
    if(c== 0){
       video.poster="img/dances.png";
        video.src=viddeo[1];        
        c=1;
        
    } else if(c == 1){
        video.poster="img/tri.png";
        video.src=viddeo[0];
        c=0;
    }
};

function display(){
    video.pause();
}
function stop(){
    console.log(video.currentSrc);
      
    video.pause();
    //video.poster="img/dances.png"; 
    video.currentTime=0;
     
}
function mutar(){
    if(video.muted==false){
        video.muted=true;
    }
    else{
        video.muted=false;
    }
}
function volume(){
    
    var vol = (parseFloat(volvideo.value)*100).toFixed(2);
    console.log(vol);
    video.volume = volvideo.value; //0-1
    volume_valor.innerHTML = vol+"%";
}

duracao.addEventListener("change", function(){
    var tempo = video.duration * (duracao.value / 100);
    video.currentTime = tempo;
    
 });
 video.addEventListener("timeupdate", function() {
    var valor = (100 / video.duration) * video.currentTime;
    duracao.value = valor;
    tempo_valor.innerHTML = duracao.value;
    //console.log(duracao.value);
 });
 function telaCheia(){
     if(video.requestFullscreen){
         video.requestFullscreen();
     }
 }
 
 function voltou(){
     if(vv== 0){
       
        aud.src=audio[1];        
        vv=1;
        
    } else if(vv == 1){
        
        aud.src=audio[0];
        vv=0;
    }
 }
 function player(){
     if(video.play()){
      video.pause();
      aud.play();
  }
     
 }
 function para(){
     aud.pause();
 }
 function passou(){
    if(vv== 0){
     
      aud.src=audio[0];        
      vv = 1;
      
      
  } else if(vv == 1){
     
      aud.src=audio[1];
      vv = 0;
      
  }  
 }
 
 function terminar(){
     aud.pause();
     aud.currentTime=0;
 }
 dura.addEventListener("change", function(){
    var temp = aud.duration * (dura.value / 100);
    aud.currentTime = temp;
    
 });
 aud.addEventListener("timeupdate", function() {
    var valoress = (100 / aud.duration) * aud.currentTime;
    dura.value = valoress;
    tempvalor.innerHTML = dura.value;
    //console.log(duracao.value);
 });
 function mudo(){
    if(aud.muted==false){
        aud.muted=true;
    }
    else{
        aud.muted=false;
    }
}
function volumeaud(){
    
    var volumi = (parseFloat(volaudio.value)*100).toFixed(2);
    console.log(volumi);
    aud.volume = volaudio.value; //0-1
    vvolume.innerHTML = volumi+"%";
}
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
(function($) {
	"use strict"

	// Mobile Nav toggle
	$('.menu-toggle > a').on('click', function (e) {
		e.preventDefault();
		$('#responsive-nav').toggleClass('active');
	})

	// Fix cart dropdown from closing
	$('.cart-dropdown').on('click', function (e) {
		e.stopPropagation();
	});

	/////////////////////////////////////////

	// Products Slick
	$('.products-slick').each(function() {
		var $this = $(this),
				$nav = $this.attr('data-nav');

		$this.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			infinite: true,
			speed: 300,
			dots: false,
			arrows: true,
			appendArrows: $nav ? $nav : false,
			responsive: [{
	        breakpoint: 991,
	        settings: {
	          slidesToShow: 2,
	          slidesToScroll: 1,
	        }
	      },
	      {
	        breakpoint: 480,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	        }
	      },
	    ]
		});
	});

	// Products Widget Slick
	$('.products-widget-slick').each(function() {
		var $this = $(this),
				$nav = $this.attr('data-nav');

		$this.slick({
			infinite: true,
			autoplay: true,
			speed: 300,
			dots: false,
			arrows: true,
			appendArrows: $nav ? $nav : false,
		});
	});

	/////////////////////////////////////////

	// Product Main img Slick
	$('#product-main-img').slick({
    infinite: true,
    speed: 300,
    dots: false,
    arrows: true,
    fade: true,
    asNavFor: '#product-imgs',
  });

	// Product imgs Slick
  $('#product-imgs').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
		centerPadding: 0,
		vertical: true,
    asNavFor: '#product-main-img',
		responsive: [{
        breakpoint: 991,
        settings: {
					vertical: false,
					arrows: false,
					dots: true,
        }
      },
    ]
  });

	// Product img zoom
	var zoomMainProduct = document.getElementById('product-main-img');
	if (zoomMainProduct) {
		$('#product-main-img .product-preview').zoom();
	}

	/////////////////////////////////////////

	// Input number
	$('.input-number').each(function() {
		var $this = $(this),
		$input = $this.find('input[type="number"]'),
		up = $this.find('.qty-up'),
		down = $this.find('.qty-down');

		down.on('click', function () {
			var value = parseInt($input.val()) - 1;
			value = value < 1 ? 1 : value;
			$input.val(value);
			$input.change();
			updatePriceSlider($this , value)
		})

		up.on('click', function () {
			var value = parseInt($input.val()) + 1;
			$input.val(value);
			$input.change();
			updatePriceSlider($this , value)
		})
	});

	var priceInputMax = document.getElementById('price-max'),
			priceInputMin = document.getElementById('price-min');

	priceInputMax.addEventListener('change', function(){
		updatePriceSlider($(this).parent() , this.value)
	});

	priceInputMin.addEventListener('change', function(){
		updatePriceSlider($(this).parent() , this.value)
	});

	function updatePriceSlider(elem , value) {
		if ( elem.hasClass('price-min') ) {
			console.log('min')
			priceSlider.noUiSlider.set([value, null]);
		} else if ( elem.hasClass('price-max')) {
			console.log('max')
			priceSlider.noUiSlider.set([null, value]);
		}
	}

	// Price Slider
	var priceSlider = document.getElementById('price-slider');
	if (priceSlider) {
		noUiSlider.create(priceSlider, {
			start: [1, 999],
			connect: true,
			step: 1,
			range: {
				'min': 1,
				'max': 999
			}
		});

		priceSlider.noUiSlider.on('update', function( values, handle ) {
			var value = values[handle];
			handle ? priceInputMax.value = value : priceInputMin.value = value
		});
	}

})(jQuery);

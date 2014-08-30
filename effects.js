$(function(){

	var arrayNav = $("nav ul li");
	var parentNav = $("nav ul");
	var arrayId = $('.wrapper').children();	
	var divs = [];
	
	$('header').hover(function(){
		$(this).css({"background": "rgba(0,0,0,1)"});
	},function(){
		$(this).css({"background": "rgba(0,0,0,0.7)"});
	});




arrayId.each(function(){		
	if($(this).attr('id')!=undefined && $(this).attr('id')!='photogal' ){				
		divs.push({id:$(this).attr('id'),
				slide:slider($(this).attr('id')),
			

				//fu: fadeInOut($(this).attr('id')),
				//an: animateF($(this).attr('id'))
		});
	}				
});
	
function slider(id){
	return function(){		
	$('#'+id).find('.jcarousel').jcarousel({
		wrap: 'circular',
	animation: {
		duration:1000,
		easing:  'easeInOutCubic'}
	});
	$('#'+id+' .btn_prev').on('click', function(e) {		
   	e.preventDefault();    	
    $('#'+id).find('.jcarousel').jcarousel('scroll', '-=1');
	});
	$('#'+id+' .btn_next').on('click', function(e) { 
    $('#'+id).find('.jcarousel').jcarousel('scroll', '+=1');
	});
	}
}


$(document).ready(function() {
divs.forEach(function(e,i){
		e.slide();	

	});	
var gal1 = slider('gal_L_top');
var gal2 = slider('gal_L_bottom');
var gal3 = slider('gal_R');
gal1();
gal2();
gal3();
});


var win = $(window);

 var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };



		//	QueryLoader.selectorPreload="body";
		//	QueryLoader.init();

/*	$(document).scroll(function(e){

		e.stopPropagation();
		divs.forEach(function(e,i){	
		e.check();	
	});	
		//this.posY = $(document).scrollTop();		
		//navigation(this.posY);
		//check(this.posY);	
	});	
	/*

	function animateF(attr){
			var flag1 = false;
			var flag2 = false;
			var flag3 = false;
			var flag4 = false;
			var q;	

			function anim(){
				
				if(!flag1){
		
					$("#"+attr).animate({opacity:q},600);				
					flag1=true;	
					flag2=false;
					flag3=false;
					flag4 = false;		
				}
			};
			anim.stage1 = function(){
				if(!flag1){
					console.log('stage1');
					$("#"+attr).animate({opacity:"0"},300);				
					flag1=true;	
					flag2=false;
					flag3=false;
					flag4 = false;	
					}	
			};
			anim.stage2 = function(){
				if(!flag2){
					console.log('stage2');
					$("#"+attr).animate({opacity:"0.3"},300);				
					flag1=false;	
					flag2=true;
					flag3=false;
					flag4 = false;	
				}
			};
			anim.stage3 = function(){
				if(!flag3){
					console.log('stage3');
					$("#"+attr).animate({opacity:"0.8"},300);				
					flag1=false;	
					flag2=false;
					flag3=true;
					flag4 = false;
					}	
			};
				anim.stage4 = function(){
				if(!flag4){
					console.log('stage4');
					$("#"+attr).animate({opacity:"1"},600);				
					flag1=false;	
					flag2=false;
					flag3=false;
					flag4 = true;
					}	
			};
			anim.On = function(){
				flag=true;
			};
			anim.Off = function(){
				flag=false;
			};
			return anim;			
	}

	
	function check(posY){
		var id;
		for(i=0;i<divs.length;i++){
			if (posY>divs[i].fu.posOut(0.1)){	
				divs[i].an.stage1();
				}else if(posY>divs[i].fu.posOut(0.25)){
						divs[i].an.stage2();
				}else if(posY>divs[i].fu.posOut(0.3)){
						divs[i].an.stage3();
				}else if(posY<divs[i].fu.posOut(0.1)){
						divs[i].an.stage4();
				}
			}
		return id;
	}

	function fadeInOut(attr){
		var coef;
		var coefRev;
		var result;
		var posStart;
		var posEnd;
		var posStart2;
		var posEnd2;
		var positionY;
		var offset;	
		var blockH;
		var nextBlockH;
		var switcher = false;
		var limitMin;
		var limitMax;   
		var heightBlock;
		var targetPos;		
   		var point1;



   		heightBlock = $('#'+attr).height();
		targetPos = $('#'+attr).next().offset().top;

		limitMin = $('#'+attr).attr('limitMin')-0;
		limitMax = $('#'+attr).attr('limitMax')-0;
		blockH = parseInt($('#'+attr).css('height'));

	
		posStart = $('#'+attr).offset().top-blockH*(limitMin/10);
		posEnd = $('#'+attr).offset().top+blockH*(limitMax/10);	
	

		function fadeInOutRes(){
			console.log('create2');
			console.log(targetPos);
			autoFade(attr);		
			coef =(positionY-posStart)/(posEnd - posStart);
		    result = coef;		   
			/*	if( result >0.25 && result <0.65){					
					$('#'+attr+' .fade').css({'opacity':result});
				} else if(result >0.65){
					$('#'+attr+' .fade').css({'opacity':1});
				}else if(result <0.25){
					$('#'+attr+' .fade').css({'opacity':0});
				}	*/								
			/*

			};
			

			fadeInOutRes.posMin = function(){
				return posStart;
			};
			fadeInOutRes.posMax = function(){
				return posEnd;
			};
			fadeInOutRes.id = function(){
				return "#"+attr;
			};
			fadeInOutRes.position = function(PosY,offsetattr){
				positionY = PosY;
				offset = offsetattr;				
			};
			fadeInOutRes.posOut = function(coef){
				return targetPos-(heightBlock*coef);				
			};
			fadeInOutRes.on = function(){
				switcher = true;						
			};
			fadeInOutRes.switch1 = function(){
				return switcher;						
			};
			return fadeInOutRes;
		}	




*/








/******========================= Chernovik ===============**********/

	/*function navigation(posY){	

		if ($("#about").isOnScreen()){
			console.log('about:isOnScreen');
		}


		if(posY > welcome.posMin() && posY < about.posMin()){			aboutAnim();
			welcome.position(posY,0);
			welcome();
		} else if(posY > about.posMin() && posY < about.posMin()){			
			$(about.id()).animate({opacity:"1"},1000, function(){
			});
			about.position(posY,0);
			about();
		} else if(posY > process.posMin() && posY < process.posMin()){
			$(process.id()).animate({opacity:"1"},1000);
			process.position(posY,0);
			process();
		}else if(posY > products.posMin() && posY < products.posMin()){
			$(products.id()).animate({opacity:"1"},1000);			
			products.position(posY,0);
			products();
		}else if(posY > photogal.posMin() && posY < photogal.posMin()){
			$(photogal.id()).animate({opacity:"1"},1000);
			console.log('photogal');
			photogal.position(posY,0);
			photogal();
		}else if(posY > contacts.posMin() && posY < contacts.posMax()){
			$(contacts.id()).animate({opacity:"1"},1000);
			contacts.position(posY,0);
			contacts();
		}
	*/
	/**============ SCROLLING NAVIGATION ===========================**/
	/*function scrollingTo(attr){
		this.posToscroll =$("#"+attr).offset().top;
		if(attr=="contacts"){
			$('html,body').finish().animate({scrollTop:this.posToscroll-500},1000);
		}else{
		
	  	$('html,body').finish().animate({scrollTop:this.posToscroll-70},1000);
	  }
	}*/
/*
	function clearActive(){
		parentNav.find('.active').removeClass("active");
	}
	arrayNav.each(function(){
		var el = $(this);
		el.click(function(e){
			e.stopPropagation();
			scrollingTo(el.attr('link'));						
		});
	});    	
		
	$('.logo_icon').click(function(e){
		e.stopPropagation();		
		scrollingTo("welcome");
	});
	
*/


});



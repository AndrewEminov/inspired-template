function header425() {
	let click = document.querySelector('.menu425'),
	menu = document.querySelector('.menu425__list425');
	menu.classList.add('close');
	
	function toggle() {
		if (menu.classList.contains('close')) {
			menu.classList.remove('close');
			menu.classList.add('open');
		}
		else if(menu.classList.contains('open')){
			menu.classList.remove('open');
			menu.classList.add('close');
		}
	}
	click.addEventListener('click', toggle);
}
function sliderContent425() {
	let click = document.querySelector('.slider-content'),
		description = document.querySelector('.slider-content__description'),
		slider = document.querySelector('.slider-content__slider'),
		removeBorder = document.querySelector('.slider-content__title');
	function toggle() {
		description.classList.toggle('open');
		slider.classList.toggle('open');
		removeBorder.classList.toggle('open');
	}
	click.addEventListener('click', toggle);
}
function blogContent425() {
	let click = document.querySelector('.blog-content'),
		description = document.querySelector('.blog-content__description'),
		posts = document.querySelector('.blog-content__wrap-posts'),
		removeBorder = document.querySelector('.blog-content__title');

	function toggle() {
		description.classList.toggle('open');
		posts.classList.toggle('open');
		removeBorder.classList.toggle('open');
	}
	click.addEventListener('click', toggle);
}
function eventContent425() {

	let click = document.querySelector('.event-content'), 
		ceremony = document.querySelector('.ceremony__description'),
		img = document.querySelector('.ceremony__wrap-img'),
		invited = document.querySelector('.invited__description'),
		removeBorder = document.querySelector('.event-content__invited');
		form = document.querySelector('.invited__form'),
		submit = document.querySelector('.invited__submit');

	function contnetMobileEvent() {
		ceremony.classList.toggle('open');
		img.classList.toggle('open');
		invited.classList.toggle('open');
		form.classList.toggle('open');
		submit.classList.toggle('open');
		removeBorder.classList.toggle('open');
	}
	click.addEventListener('click', contnetMobileEvent);
}
function navigation425() {
	let click = document.querySelector('.footer__navigation'),
		list = document.querySelector('.navigation__list');
		
	function toggle() {
		list.classList.toggle('open-foot');
	}
	click.addEventListener('click', toggle);
}
function getintouch425() {
	let click = document.querySelector('.footer__getintouch'),
		list = document.querySelector('.getintouch__list'),
		email = document.querySelector('.email-text');
		
	function toggle() {
		list.classList.toggle('open-foot');
		email.classList.toggle('open-foot');
	}
	click.addEventListener('click', toggle);
}
function share425() {
	let click = document.querySelector('.footer__share'),
		list = document.querySelector('.share__list'),
		twitter = document.querySelector('.twitter-text');
		
	function toggle() {
		list.classList.toggle('open-foot');
		twitter.classList.toggle('open-foot');
	}
	click.addEventListener('click', toggle);
}
eventContent425();
header425();
blogContent425();
sliderContent425();
navigation425();
getintouch425();
share425();

	let list=document.querySelectorAll('.imglink');
		
  		list[0].classList.add('open');

		function toggleRight() {
			for(let i=0; i<list.length; i++){
				if(list[i].classList.contains('open') /*&& list[i] != list[list.length-1]*/){	
					if (list[i] == list[list.length-1]) {
						list[i].classList.toggle('open');
  						list[0].classList.toggle('open');
  						break;
					}else{
						list[i].classList.toggle('open');
	  					list[i+1].classList.toggle('open');
	  					break; 
					}
				}
			}
		}
		function toggleLeft() {
			for(let i=0; i<list.length; i++){
				if(list[i].classList.contains('open') /*&& list[i] != list[0]*/){

					if (list[i] == list[0]) {
						list[i].classList.toggle('open');
  						list[list.length-1].classList.toggle('open');
  						break;
					}else{
						list[i].classList.toggle('open');
  						list[i-1].classList.toggle('open');
  						break;
	  				} 
				}
			}
		}
		previous.addEventListener('click', toggleLeft);
		following.addEventListener('click', toggleRight);
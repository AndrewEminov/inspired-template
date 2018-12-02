function windoWidth425() {
	let click = document.querySelector('.container');
	let event;
	function toggle(event) {
		event = event.target;
		if(window.innerWidth < 426){
			while(event != event.classList.contains('container')){
				if (event.classList.contains('toggle425')) {
					for(i = 0; i < event.children.length; i++){				
						event.children[i].classList.toggle('open');
					}
				return;
				}
				else if (event.classList.contains('toggle-foot425')) {
					for(i = 0; i < event.children.length; i++){				
						event.children[i].classList.toggle('open-foot');
					}
				return;
				}
			event = event.parentNode;
			}
		}
	}
	click.addEventListener('click', toggle);
}
windoWidth425();

/// slider

	let back=document.querySelector('.back');
	let next=document.querySelector('.next');
	let back768=document.querySelector('.toggle-tablet768__back');
	let next768=document.querySelector('.toggle-tablet768__next');
	let event;
	let list=document.querySelectorAll('.imglink');
	list[0].classList.add('open');

	function toggleRight(){
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
	back.addEventListener('click', toggleLeft);
	next.addEventListener('click', toggleRight);
	back768.addEventListener('click', toggleLeft);
	next768.addEventListener('click', toggleRight);
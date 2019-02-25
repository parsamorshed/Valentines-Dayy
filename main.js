// Buttons
let btn1 = document.querySelector('#btn1'),
	btn2 = document.querySelector('#btn2'),
	btn3 = document.querySelector('#btn3'),
	btn4 = document.querySelector('#btn4');

// Audios
let bowie = new Audio('audio/bowie.mp3'),
	sound1 = new Audio('audio/sound1.mp3'),
	sound2 = new Audio('audio/sound2.mp3'),
	sound3 = new Audio('audio/sound3.mp3');	

// Cards
let leftCard = document.querySelector('#left-card'),
	rightCard = document.querySelector('#right-card');

// Flex
let flex = document.querySelector('.flex');	

// Select
let select = document.querySelector('#select');	

btn1.addEventListener('click', () => {
	btn2.style.display = 'inline-block';
	sound1.play();
});

btn2.addEventListener('click', () => {
	btn3.style.display = 'inline-block';
	sound2.play();
});

btn3.addEventListener('click', () => {
	flex.style.display = 'flex';
	rightCard.style.display = 'none';
	sound3.play();
});

btn4.addEventListener('click', () => {
	rightCard.style.display = '';
	bowie.play();
});

select.addEventListener('click', () => {
	if(select.selectedIndex > 0){
		setInterval(() => {
			document.querySelector('.heart').style.display = 'block';
			document.querySelector('.fa-heart').style.fontSize = '2rem';
			setTimeout(() => {
				document.querySelector('.fa-heart').style.fontSize = '3rem';
			}, 200)
		}, 500);
	}
});
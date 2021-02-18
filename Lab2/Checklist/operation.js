let checklist = document.querySelector('#checklist');
let add = document.querySelector('#add');

add.addEventListener('blur', function() {
	let li = document.createElement('li');
	checklist.appendChild(li);
	
	let span = document.createElement('span');
	span.innerHTML = this.value;
	this.value = '';
	li.appendChild(span);
	span.addEventListener('click', function func() {
		let input = document.createElement('input');
		input.value = this.innerHTML;
		this.innerHTML = '';
		this.appendChild(input);
		
		this.removeEventListener('click', func);
		
		input.addEventListener('blur', function() {
			span.innerHTML = this.value;
			span.addEventListener('click', func);
		});
	});
	//нажатие кнопки галочки и зачеркивание
	let checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	li.appendChild(checkbox);
	checkbox.addEventListener('click', function() {
		li.classList.toggle('done');
	});
	//добавление к Li крестик и чекбокс
	let remove = document.createElement('a');
	remove.innerHTML = 'X';
	remove.href = '';
	li.appendChild(remove);
	remove.addEventListener('click', function(event) {
		li.parentElement.removeChild(li);
		
		event.preventDefault();
	});
});
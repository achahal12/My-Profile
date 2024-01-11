let title = document.querySelector ('.text');
let name = "FrontEnd Develpoer"
let index =1;

const typeWriter =() => {
	let new_title =name.slice(0,index);
	title.innerText = new_title;

	index > name.lenght ? index = 1 : index++;

	setTimeout(handler() => typeWriter(), Timeout: 600)
}

typeWriter();
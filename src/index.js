import _ from 'lodash';
import './style.css';

class Counter{
	constructor(){
		this.state = {
			currentNum: 0
		}
	}

	this.add.bind(this);
	this.sub.bind(this);
	
	add = () => this.state.currentNum=this.state.currentNum+1;
	sub = () => this.state.currentNum=this.state.currentNum-1;

}

function component(){
	let myCounter = new Counter();

	//Element declarations
	const element = document.createElement('div');
	const btns = [document.createElement('button'), document.createElement('button')];	

	//Lodash
	element.innerHTML = _.join(['Count:', myCounter.currentNum], ' ');
	
	//Add in CSS files
	element.classList.add('hello');

	//Add a br
	element.appendChild(document.createElement('br'));

	btns[0].innerHTML = '+';
	btns[1].innerHTML = '-';
	btns[0].onclick = myCounter.add;
	btns[1].onclick = myCounter.sub;

	element.appendChild(btns[0]);
	element.appendChild(btns[1]);
	return element;
}

document.body.appendChild(component());

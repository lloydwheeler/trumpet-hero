/*  --------------------------------------------------- 
    Our app entrypoint which crawls the DOM for components
------------------------------------------------------- */

// import './common';
// import { resolveComponent } from './components';

// // Search the DOM for required components
// let components = $('*[data-component]');

// // Load each component
// components.each(function() {

// 	let $element = $(this);
// 	let componentPath = $element.data('component');
// 	let Component = resolveComponent(componentPath);
	
// 	this.component = new Component($element);
// });

import 'web-midi-api/WebMIDIAPI.min.js';


class Main {

	constructor() {
		navigator.requestMIDIAccess().then(this.onFulFilled, this.onRejected);
	}

	onFulFilled() {
		console.log('supported');
	}

	onRejected() {
		console.log('rejected');
	}
}




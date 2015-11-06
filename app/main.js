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

import 'WebMIDIAPI.min';

navigator.requestMIDIAccess().then(onFulFilled, onRejected);
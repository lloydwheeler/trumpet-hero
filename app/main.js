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

class Main {

	constructor() {

		console.log('test');

		this.midi = null;
		this.data = null;

		if (navigator.requestMIDIAccess) {
			navigator.requestMIDIAccess({
				sysex: false
			}).then(::this.onMidiSuccess, ::this.onMidiFailure);
		} else {
			alert("No MIDI support in your browser.");
		}
	}

	onMidiSuccess(midiAccess) {
		// when we get a succesful response, run this code
		this.midi = midiAccess; // this is our raw MIDI data, inputs, outputs, and sysex status

		var inputs = this.midi.inputs.values();
		// loop over all available inputs and listen for any MIDI input
		for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
				// each time there is a midi message call the onMIDIMessage function
				input.value.onmidimessage = this.onMidiMessage;
		}
	}

	onMidiFailure() {
		console.log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + error);
	}

	onMidiMessage(message) {
		this.data = message.data; // this gives us our [command/channel, note, velocity] data.
		console.log('MIDI data', this.data); // MIDI data [144, 63, 73]
	}
}


const main = new Main();




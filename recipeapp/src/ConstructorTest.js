import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ConstructorTest extends Component { 

	constructor(props) {
		
	}

	render() {
		ReactDOM.render(<GeneratorForm />, document.getElementbyId('root'));
	}

}


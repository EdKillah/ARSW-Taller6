import React from 'react';
import ReactDOM from 'react-dom';
import Sketch from 'react-p5';
import './styles.css';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h1>Sketch</h1>
				<Sketch
					setup={(p5, parent) => {
						p5.createCanvas(600, 600).parent(parent);
					}}
					draw={p5 => {
						//p5.background(0);
						if (p5.mouseIsPressed === true) {
							p5.fill(0, 0, 0);
							p5.ellipse(p5.mouseX, p5.mouseY, 20, 20);
						}
						if (p5.mouseIsPressed === false) {
							p5.fill(255, 255, 255);
						}
					}}
				/>
			</div>
		);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
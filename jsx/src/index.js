// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a reactcomponent
const App = () => {
	const buttonText = 12;
	const lableText = 'enter name: ';
	return (
		<div>
			<label className='lable' htmlFor='name'>
				{lableText}
			</label>
			<input id='name' type='text' />
			<button style={{ backgroundColor: 'blue', color: 'white' }}>
				{buttonText}
			</button>
		</div>
	);
};
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));

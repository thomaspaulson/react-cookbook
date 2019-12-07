import React from 'react';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import Todo from './Todo/Todo';
import Timer from './Pomodoro/Timer';
import './App.css';




function App() {	
		return (
		<div className="App">
			<Header title ="Todo task"/>
			{/* Here we add our Home component to be render it */}
			<Content>
				<Todo />   			
				<Timer />   			
			</Content>			
			<Footer />
		</div>
		);
}

export default App;

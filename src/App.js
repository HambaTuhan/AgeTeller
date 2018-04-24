import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';
import AgeStats from './components/AgeStats.js'

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = { 
    	newDate : '' ,
    	birthday : '1992-02-28'

  }
}

changeBirthday() {
	console.log(this.state);
	this.setState({birthday: this.state.newDate})
}

  render() {
    return (
      <div className="App">
      	<Form inline>
      	<h2>Input your birthday</h2>
      	<FormControl 
      		type="date" 
      		onChange={ event => this.setState({ newDate: event.target.value }) } >

    	 </FormControl>
			{' '}
		<Button onClick={() => this.changeBirthday()}>Submit</Button>
		<AgeStats date={this.state.birthday}/>
      </Form>
      </div>
    );
  }
}


export default App;

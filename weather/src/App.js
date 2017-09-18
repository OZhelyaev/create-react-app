import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherDisplay from './WeatherDisplay.js';

const PLACES = [
  {name: "Москва", zip:"38057"},
  {name: "Питер", zip: "33701"}
];

class App extends Component {

  constructor() {
   super();
   this.state = {
     activePlace: 0,
   }	
  }

  render() {
    const activePlace = this.state.activePlace;	
    return (
      <div className="App">

        {PLACES.map((place, index) => 
          <button
	   key={index}
           onClick={ () =>{
//		console.log('current state ' + {this.state});
                this.setState({activePlace : index})
		}}
           >
           {place.name}
           </button>
            )
        }
        <WeatherDisplay 
          key={activePlace}
          zip={PLACES[activePlace].zip}
        />            
      </div>
    );
  }
}

export default App;


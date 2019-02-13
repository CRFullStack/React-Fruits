import React, { Component } from 'react';
import  HeaderApp  from "./components/Header";
import  CatergoryApp  from "./components/Categories";
import  DisplayFruitsApp  from "./components/Displayfruits";
import Strawberry from "./images/strw.jpeg"
import Banana from "./images/banana.jpg"
import Grape from "./images/grape.png"
import Lemon from "./images/lemon.jpeg"
import Cherry from "./images/cherry.png"
import Cranberry from "./images/cranberry.jpg"
import Peach from "./images/peach.jpeg"
import Pear from "./images/pear.jpg"
import Plum from "./images/plum.jpg"
import Apple from "./images/apple.jpeg"
import Lime from "./images/lime.jpg"
import Blackberry from "./images/blackberry.jpg"

import './App.css';

class App extends Component {

  allFruits = {
    sweet: [
      { fruit: "Strawberry",
        image: Strawberry
      },
      {
        fruit: "Banana",
        image: Banana
      },
      {
        fruit: "Grape",
        image: Grape
      }
    ],
    sour: [
      {
        fruit: "Lemon",
        image: Lemon
      },
      {
        fruit: "Cherry",
        image: Cherry
      },
      {
        fruit: "Cranberry",
        image: Cranberry
      }
    ],
    dry: [
      {
        fruit: "Peach",
        image: Peach
      },
      {
        fruit: "Pear",
        image: Pear
      },
      {
        fruit: "Plum",
        image: Plum
      }
    ],
    bitter: [
      {
        fruit: "Apple",
        image: Apple
      },
      {
        fruit: "Lime",
        image: Lime
      },
      {
        fruit: "Blackberry",
        image: Blackberry
      }
    ]
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "option1"
    };
  }

  handleOptionChange = changeEvent => {
    this.setState({
        selectedOption: changeEvent.target.value
    }, () => console.log(`The state is now: ${this.state.selectedOption}`));
    
  };

  render() {
    return (
      <div className="App">
        
        <div>
            <HeaderApp/>
        </div>
        
        <div className="row mt-5">
          <div className="col-sm-12">
            <CatergoryApp radioButtonChange={this.handleOptionChange} radioButtonState={this.state.selectedOption}/>
          </div>
        </div>

        <div className="row mt-5 h-card" >
          <div className="col-sm-12" onChange={this.handleOptionChange}>
            <DisplayFruitsApp allFruits={this.allFruits} radioButtonState={this.state.selectedOption}/>
          </div>
        </div>
      
      </div> 
    );
  }
}

export default App;

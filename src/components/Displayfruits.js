import React, { Component } from 'react';



class DisplayFruits extends Component {
  render() {
    var currentRadioButtonSelection = this.props.radioButtonState;
    let fruitCategory;

    switch (currentRadioButtonSelection) {
      //bitter
      case "option1":
        fruitCategory = this.props.allFruits.bitter;
        break;
      //sweet
      case "option2":
        fruitCategory = this.props.allFruits.sweet;
        break;
      //sour
      case "option3":
        fruitCategory = this.props.allFruits.sour;
        break;
      //dry
      case "option4":
        fruitCategory = this.props.allFruits.dry;
        break;
    
      default:
        fruitCategory = this.props.allFruits.bitter;
        break;
    }
    return (
      <div>
        {
          fruitCategory.map(function(fruit, index){
            return <p key={ index }>{fruit.fruit} <img className={"fruit"} src={fruit.image} /></p>;
          })
        }
      </div>
    );
  }
}

export default DisplayFruits;

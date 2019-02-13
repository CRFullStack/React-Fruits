import React, { Component } from "react";

class App extends Component {
    
    
    handleOptionChange = changeEvent => {
        this.props.radioButtonChange(changeEvent);
    };

    
    render() {
        return (

            <form>
                
                <div className="form-check">
                <label>
                    <input
                    type="radio"
                    name="react-tips"
                    value="option1"
                    checked={this.props.radioButtonState === "option1"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                    />
                    Bitter
                </label>
                </div>

                <div className="form-check">
                <label>
                    <input
                    type="radio"
                    name="react-tips"
                    value="option2"
                    checked={this.props.radioButtonState === "option2"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                    />
                    Sweet
                </label>
                </div>

                <div className="form-check">
                <label>
                    <input
                    type="radio"
                    name="react-tips"
                    value="option3"
                    checked={this.props.radioButtonState === "option3"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                    />
                    Sour
                </label>
                </div>

                <div className="form-check">
                <label>
                    <input
                    type="radio"
                    name="react-tips"
                    value="option4"
                    checked={this.props.radioButtonState === "option4"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                    />
                    Dry
                </label>
                </div>

            </form>
            
        );
    }
}

export default App;

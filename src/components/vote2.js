import React, { Component } from "react";
class Vote2 extends Component{
    state={
        number : this.props.value
    };

// make an event to click on button
    handleClick = () =>{
        this.setState({number: this.state.number+1});
    }

// function for changing the number when clicking on button
// to return number of votes
    Count() {
        const { number } = this.state;
        return number === 0 ? 0 : number;
      }
    //   The data values
    render(){
        return(
            <div className="vote">
                <span className ='number'>{this.Count()}</span>
                <span className = 'language'>{this.props.name}</span>
                <button onClick={this.handleClick}>Click here</button>
            </div>
        );
    }
    
}
export default Vote2;
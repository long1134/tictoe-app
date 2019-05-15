import React, { Component } from 'react';

class Move extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    displayMove=()=>
    {
        let index = this.props.index
        return index === 0 ? "Go to game start " : ("Go to move "+(index))
    }

    gotoMove=()=>
    {
        console.log(this.props.index)
        this.props.gotoMove(this.props.index)
    }

    render() { 
        let index = this.props.index
        return (
            <div>
                {index} . <button onClick={this.gotoMove}><this.displayMove/></button>  
            </div>
        );
    }
}
 
export default Move;
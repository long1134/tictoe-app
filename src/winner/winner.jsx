import React, { Component } from 'react';

class Winner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    displayWinner=()=>
    {
        const winner = this.props.winner
        // console.log(winner)
        if(winner!==null)
        {
            return <p>Winner is : {winner!=="0"?"X":"O"}</p>
        }
           
        return null
    }

    render() { 
        return ( 
            <this.displayWinner/>
        );
    }
}
 
export default Winner;
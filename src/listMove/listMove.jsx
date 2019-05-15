import React, { Component } from 'react';
import Move from './Move/Move';

class ListMove extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    DisplayMove=()=>
    {
        const arrMove = this.props.ListMove
        // console.log(arrMove)
        return arrMove.map((move,i)=>{
            return <Move gotoMove={this.gotoMove} key={i} index={i}></Move>
        })
    }

    gotoMove=(index)=>
    {
        this.props.gotoMove(index)
    }

    render() { 
        return (  
            <div>
                <this.DisplayMove></this.DisplayMove>
            </div>
        );
    }
}

export default ListMove;
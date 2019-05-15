import React, { Component } from 'react';
import Board from "./board/board";
import Winner from './winner/winner';
import ListMove from './listMove/listMove';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: null,
            listMove: [
                { squares: Array(9).fill(null) }
            ],
            indexTemp: 0
        }
    }

    setWinner = (winner) => {
        this.setState({
            winner
        })
    }

    handleBoard = async (board) => {
        // let newBoard = this.state.listMove
        // console.log(newBoard)
        await console.log(this.state.listMove)
        if(this.state.listMove[this.state.indexTemp+1])
        if(board !== this.state.listMove[this.state.indexTemp+1].squares && this.state.indexTemp+1 <= this.state.listMove.length )
        {
            this.setState({
                listMove : this.state.listMove.splice(0,this.state.indexTemp+1)
            })
            
            console.log(this.state.indexTemp+1)
        }
        this.setState({
            listMove : this.state.listMove.concat({
                squares : board
            })
        })
        this.setState({
            indexTemp: this.state.indexTemp + 1
        })
    }

    gotoMove = async (index) => {
        await this.setState({
            indexTemp: index
        })
        console.log(this.state.indexTemp)
    }

    render() {
        let current = []
        current = current.concat(this.state.listMove[this.state.indexTemp])
        return (
            <div>
                <Board handleBoard={this.handleBoard} indexTemp={this.state.indexTemp} board={current[0]} setWinner={this.setWinner} />
                <Winner winner={this.state.winner}></Winner>
                <ListMove gotoMove={this.gotoMove} ListMove={this.state.listMove}></ListMove>
            </div>
        );
    }
}

export default App;
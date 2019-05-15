import React, { Component } from 'react';
import Square from "../square/square";
import "./board.css"

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isXO: 0,
            winner: null
        }
    }


    DisplaySquare = () => {
        let count = 0
        let arrBoard = this.props.board.squares
        return arrBoard.map((x, indexX) => {
            return (
                <Square  indexX={indexX} indexTemp={this.props.indexTemp} key={count++} setIsXO={this.setIsXO} isXO={this.state.isXO} winner={this.state.winner} XO={x} />
            )
        })
    }

    setIsXO = async (status, indexX) => {
        await this.setState({
            isXO: status
        })
        let newArr = []
        newArr = newArr.concat(this.props.board.squares)
        console.log(newArr)
        newArr[indexX] = status
        await this.props.handleBoard(newArr)
        if (this.findWinner()) {
            this.setState({
                winner: this.findWinner()
            })
            this.props.setWinner(this.findWinner())
        }
    }

    findWinner() {
        let arrInfo = this.props.board.squares.join(",").split(",")
        let line = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < line.length; i++) {
            const [a, b, c] = line[i]
            if (arrInfo[a] && arrInfo[a] === arrInfo[b] && arrInfo[a] === arrInfo[c])
                return arrInfo[a]
        }
        return null
    }

    render() {
        return (
            <div className="Board row">
                <this.DisplaySquare />
            </div>
        );
    }
}

export default Board;
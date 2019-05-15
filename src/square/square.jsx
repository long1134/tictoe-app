import React, { Component } from 'react';
import "./square.css"

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            XO: "",
        }
    }

    tickButton = () => {
        console.log(this.props.indexTemp)
        let setXO = (this.props.indexTemp%2===0 ? "X":"O")
        console.log(setXO)
        if(this.props.XO === 1 || this.props.XO === 0)
            return
        if(this.props.winner)
            return
        console.log(this.props.indexTemp)
        if (!(this.props.indexTemp%2)) {
            this.props.setIsXO(1,this.props.indexX)
            this.setState({
                XO: setXO
            })
        }
        else {
            this.props.setIsXO(0,this.props.indexX)
            this.setState({
                XO: setXO
            })
        }
    }

    render() {
        let alpha = this.props.XO===null? "" : (this.props.XO===1?"X":"O")
        return (
            <button className="Square col-4" onClick={this.tickButton}>
                {alpha}
            </button>
        );
    }
}

export default Square;
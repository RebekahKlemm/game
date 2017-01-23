import React, {Component} from 'react';
import { connect } from 'react-redux';
// import Canvas from './Canvas';


class Try2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            currRectY: 3,
            currRectX: 425,
            mazeWidth: 556,
            mazeHeight: 556,
            interval: null,
            newX: null,
            newY: null,
            canMove: 1,
            movingAllowed: null,
        }

        // this.canMoveTo=this.canMoveTo.bind(this);
        this.moveRect=this.moveRect.bind(this);

    }


    componentDidMount() {
        this.context = this.canvas.getContext("2d");
        this.drawMazeAndRectangle(425, 3);
        window.addEventListener("keydown", this.moveRect, true);
    }

    render(){
        return (
            <canvas width="616" height="556"  ref={(element) => this.canvas = element}></canvas>


            )
    }

    makeWhite(x, y, w, h) {
        this.context.beginPath();
        this.context.rect(x, y, w, h);
        this.context.closePath();
        this.context.fillStyle = "white";
        this.context.fill();
    }

    drawMazeAndRectangle(rectX, rectY) {
        this.makeWhite(0, 0, this.canvas.width, this.canvas.height);
        var mazeImg = new Image();
        mazeImg.onload = () => { // when the image is loaded, draw the image, the rectangle and the circle
            this.context.drawImage(mazeImg, 0, 0);
            this.drawRectangle(rectX, rectY, "#0000FF", false, true);
            this.context.beginPath();
            this.context.arc(542, 122, 7, 0, 2 * Math.PI, false);
            this.context.closePath();
            this.context.fillStyle = '#00FF00';
            this.context.fill();
        };
        mazeImg.src = "maze.gif";
}
    drawRectangle(x, y, style) {
        this.makeWhite(this.state.currRectX, this.state.currRectY, 15, 15);
        this.setState({
            currRectX: x,
            currRectY: y,
        });
        this.context.beginPath();
        this.context.rect(x, y, 15, 15);
        this.context.closePath();
        this.context.fillStyle = style;
        this.context.fill();
    }

    canMoveTo(destX, destY) {
        console.log('desX, destY', destX, destY)
        console.log('inside canMoveTo, here is this', this)
        var imgData = this.context.getImageData(destX, destY, 15, 15);
        console.log('canMoveTo, imgData', imgData)
        var data = imgData.data;
        this.setState({
            canMove:1
        })
        console.log('canMoveTo, this', this);
        if (destX >= 0 && destX <= this.state.mazeWidth - 15 && destY >= 0 && destY <= this.state.mazeHeight - 15) { // check whether the rectangle would move inside the bounds of the canvas
            for (var i = 0; i < 4 * 15 * 15; i += 4) { // look at all pixels
                if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0) { // black
                    this.setState({
                        canMove: 0
                    })
                    break;
                }
                else if (data[i] === 0 && data[i + 1] === 255 && data[i + 2] === 0) { // lime: #00FF00
                    this.setState({
                        canMove:2
                    })
                    break;
                }
            }
        }
        else {
            this.setState({
                canMove:0
            })
        }
        console.log('this.canMove, line 107, this', this);
        return this.state.canMove;
    }


    moveRect(e) {
        console.log('here is e', e)
    e = e || window.event;
    console.log('inside moveRect, here is this before', this)
        e.preventDefault();
    switch (e.keyCode) {
        case 38:   // arrow up key
        case 87: // W key
            this.setState({
                newX:this.state.currRectX,
                newY:this.state.currRectY-3
            })
            break;
        case 37: // arrow left key
        case 65: // A key
            this.setState({
                newX:this.state.currRectX-3,
                newY:this.state.currRectY
            })
            break;
        case 40: // arrow down key
        case 83: // S key
        // case 91:
            this.setState({
                newX:this.state.currRectX,
                newY:this.state.currRectY+3
            })
            break;
        case 39: // arrow right key
        case 68: // D key
            this.setState({
                newX:this.state.currRectX+3,
                newY:this.state.currRectY
            })
            break;
        default: return;
    }
        console.log('inside moveRect, here is this after', this)

        console.log('newX, newY', this.state.newX, this.state.newY)
    let allowed=this.canMoveTo(this.state.newX, this.state.newY)
        console.log('allowed', allowed);
    this.setState({
        movingAllowed: allowed
    })
        console.log('line 147, this', this);
    if (this.state.movingAllowed === 1) {      // 1 means 'the rectangle can move'
        console.log('YYYYYEEEESSSS, you are allowed to move')
        this.drawRectangle(this.state.newX, this.state.newY, "#0000FF");
        this.setState({
                currRectX: this.state.newX,
                currRectY: this.state.newY
        })

    }
    else if (this.state.movingAllowed === 2) { // 2 means 'the rectangle reached the end point'
        // clearInterval(intervalVar); // we'll set the timer later in this article
        this.makeWhite(0, 0, this.canvas.width, this.canvas.height);
        this.context.font = "40px Arial";
        this.context.fillStyle = "blue";
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.fillText("Congratulations!", this.canvas.width / 2, this.canvas.height / 2);
        window.removeEventListener("keydown", this.moveRect, true);
    }
}




}



const mapStateToProps = (state, ownProps) => {
    return {
    };
}



const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Try2);


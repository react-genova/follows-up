import React, { Component } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
    flex-grow: 1;
`;

class Drawer extends Component {
    
    constructor(props) {
        super(props);

        this.canvas = React.createRef();
    }

    componentDidMount() {
        this.ctx = this.canvas.current.getContext("2d");
        this.drawing = false;
    }

    onMouseDown = ({ clientX:x, clientY:y, button, preventDefault, stopPropagate }) => {
        const { lineColor, lineWidth:size, mode } = this.props;
        console.log("MOUSEDOWN", button, this.canvas.current.offsetLeft, this.canvas.current.offsetTop);
        if("eraser"!==mode) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
            this.ctx.strokeStyle = lineColor;
            this.ctx.lineWidth = size;
        }
        else {
            this.ctx.clearRect(x - size,y - size, size * 2, size * 2);
        }
        this.drawing = true;
    };

    onMouseUp = () => {
        const { mode } = this.props;
        this.drawing = false;
        if("eraser"!==mode) this.ctx.closePath();        
        console.log("MOUSEUP");
    };
    
    onMouseMove = ({ clientX:x, clientY:y }) => {
        if(this.drawing) {
            const { mode, lineWidth:size } = this.props;
            if("eraser"===mode) {
                this.ctx.clearRect(x - size,y - size, size * 2, size * 2);
            }
            else {
                this.ctx.lineTo(x, y);
                this.ctx.stroke();
            }
        }
    };

    render() {
        const { onMouseDown, onMouseMove, onMouseUp, props: { width, height} } = this;
        return (
            <canvas
                ref={this.canvas}
                width={width}
                height={height}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
            />
        );
    }
}

export default Drawer;
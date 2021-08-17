import React, { Component } from 'react'
import withCounter from './WithCounter';
class HoverCounter extends Component {
    render() {
        const {count,incrementCount}=this.props;
        return (
            <div>
                <button onMouseOver={incrementCount}>{this.props.name} Hovered {count} times</button>
            </div>
        )
    }
}

export default  withCounter(HoverCounter,10);
import React, { Component } from 'react'

export class Comp3 extends Component {
    render() {
        return (
            <div className="text1">
                Component 3 - {this.props.match.params.item}
            </div>
        )
    }
}

export default Comp3

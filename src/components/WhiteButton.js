import React, { Component } from 'react'

export default class WhiteButton extends Component {
    render() {
        return (
            <button class="white-button">
                {this.props.text.toUpperCase()}
            </button>
        )
    }
}

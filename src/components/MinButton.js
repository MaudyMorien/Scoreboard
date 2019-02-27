import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MinButton extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired
    }
    
    render() {

        return (
            <button className="min-button" onClick={this.props.onClick}>-</button>
        )
    }
}
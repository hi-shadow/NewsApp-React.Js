import React, { Component } from 'react'
import SpinnerGIF from './SpinnerGIF.gif'
export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={SpinnerGIF} alt="SpinnerGif" height={this.props.height} width={this.props.width} />
            </div>
        )
    }
}

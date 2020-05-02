import React, { Component } from 'react';
import './css/SliderButton.css'

var state = false

export default class extends Component {
    constructor (props) {
        super(props)

        // eslint-disable-next-line
        this.state = {
            sliderState: false
        } 
        this.props = props
        this.changeState = this.changeState.bind(this)
    }

    changeState() {
        state = !state
        this.setState({sliderState: state})
    }

    render () {
        return (
            <>
                <div className="slider-container">
                    <div className={this.state.sliderState ? "slider-body-dark" : "slider-body-light"} onClick={this.changeState}>
                        {/* {this.state.sliderState ? <div className="slider-on"></div> : <div className="slider-off"></div>} */}
                        <div className={this.state.sliderState ? "slider-on" : "slider-off"}></div>
                    </div>
                </div>
            </>
        )
    }
}
import React, { Component } from 'react';

class Weather extends Component {
    render() {
        return (
            <><small className="text-muted">For {this.props.date.date}: {this.props.date.description}</small><br /></>
        );
    }
}

export default Weather;
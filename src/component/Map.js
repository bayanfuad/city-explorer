import React from "react";
class Map extends React.Component {
    render() {
      return (
        <div>
          <img src={this.props.source} alt="Map image"/>
        </div>
      )
    }
  }
  export default Map;
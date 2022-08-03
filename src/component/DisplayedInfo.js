import React from "react";
  class DisplayedInfo extends React.Component{
    render(){
        return(
<div>
<hr></hr>
<p>City name :{this.props.name}</p>
<p>Latitude :{this.props.lat}</p>
<p>Longitude :{this.props.lon}</p>
<hr></hr>
</div>
        )
    }
  }
  export default DisplayedInfo;
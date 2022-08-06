import react from 'react'

class Weather extends react.Component {

  render() {
    return (
      <div className='weather'>
      <h2>Weather Information</h2>
      <hr></hr>
      {this.props.weatherData.map( (item,i) => { return(
        <>
            <p>Day:0{i+1}</p>
            <p>{item.date} : {item.description}</p>
            <hr></hr>
        </>)})}
      </div>
    )
  }
}

export default Weather
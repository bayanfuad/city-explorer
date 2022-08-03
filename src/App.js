 
import React from 'react';
import SearchForm from './component/SearchForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import axios from 'axios';
import DisplayedInfo from './component/DisplayedInfo';
import Map from './component/Map';

class App extends React.Component {


  constructor(props) {
    super(props)
    this.state= {
      cityName :'',
      latitude :'',
      longitude :'',
      imgSrc : '',
      showData : false,
      showErr:false,
    }
  }

  displayLocation = async (event) => {
    event.preventDefault();
    let userInput = event.target.nameField.value;
    let requestUrl = `https://eu1.locationiq.com/v1/search?key=${process.env.REACT_APP_KEY}&q=${userInput}&format=json`;

    try {
      let responseFromIQ = await axios.get(requestUrl);
      let cityData = responseFromIQ.data[0];
      this.displayMap(cityData.lat,cityData.lon);
      this.setState({
        cityName:cityData.display_name,
        latitude:cityData.lat,
        longitude:cityData.lon,
        showData : true,
        showErr : false,
        });
    }catch (error){

      this.setState({
        showData : false,
        showErr : true,
        });
    }


  }

 

  displayMap = (lat,lon) => {
    let requestMapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${lat},${lon}&zoom=10`;
    this.setState({imgSrc : requestMapUrl});

  }

  render() {

    return (
      <>
        <Header/>
        <SearchForm display={this.displayLocation}/>

        { this.state.showData &&
        <>
        <DisplayedInfo name={this.state.cityName} lat={this.state.latitude} lon={this.state.longitude} />
        <Map source={this.state.imgSrc}/>
        </>
        }
        {this.state.showErr && <p>City Not Found</p>}
      </>
    )
  }
}

export default App;

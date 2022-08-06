import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import SearchForm from './component/SearchForm';
import Header from './component/Header';
import DisplayedInfo from './component/DisplayedInfo';
import Map from './component/Map';

import Movie from './component/Movie';
import './App.css';
import Weather from './component/Weather';

import './App.css';
import Weather from './component/Weather';




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
      weather : [],
      showWeather : false,

      movie : [],
      showMovie : false,




    }
  }

  displayLocation = async (event) => {
    event.preventDefault();
    let userInput = event.target.nameField.value;
    let requestUrl = `https://eu1.locationiq.com/v1/search?key=${process.env.REACT_APP_KEY}&q=${userInput}&format=json`;

    try {
      let responseFromIQ = await axios.get(requestUrl);
      let cityData = responseFromIQ.data[0];
      console.log(cityData);
      this.displayMap(cityData.lat,cityData.lon);
      this.displayWeather(userInput,cityData.lat,cityData.lon)

      this.displayMovie(userInput);

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



  displayWeather = async (searchQuery,lat,lon) => {

    try {
      let serverData = await axios.get(`${process.env.REACT_APP_API}/weather?searchQuery=${searchQuery}&lat=${lat}&lon=${lon}`);
      let weatherData = serverData.data;
      this.setState({weather:weatherData , showWeather : true});
    }catch(error) {
      console.log(error);
      this.setState({ showWeather : false});
    }




  displayWeather = async (searchQuery,lat,lon) => {

    try {
      let serverData = await axios.get(`${process.env.REACT_APP_API}/weather?searchQuery=${searchQuery}&lat=${lat}&lon=${lon}`);
      let weatherData = serverData.data;
      this.setState({weather:weatherData , showWeather : true});
    }catch(error) {
      console.log(error);
      this.setState({ showWeather : false});
    }
  }


  displayMovie = async (searchQuery) =>{

    try {
      let Movie = await axios.get(`${process.env.REACT_APP_API}/movie?searchQuery=${searchQuery}`);
      let  MovieData = Movie.data;
      this.setState({movie : MovieData , showMovie : true});

    }catch(error) {
      console.log(error);
      this.setState({ showMovie: false});
    }
  }



  render() {

    return (
      < div className='App'>
        <Header/>
        <br></br>
        <SearchForm display={this.displayLocation}/>
        {this.state.showData &&
        <>
        <DisplayedInfo name={this.state.cityName} lat={this.state.latitude} lon={this.state.longitude} />
        <Map  className='pic' source={this.state.imgSrc}/>
        
        </>}

        { this.state.showWeather && <Weather weatherData={this.state.weather}/> }
        { this.state.showMovie && <Movie movieData={this.state.movie}/>}
        {this.state.showErr && <p>Enter valid Value Please</p>}

         { this.state.showWeather && <Weather weatherData={this.state.weather}/> }
        {this.state.showErr && <p>Not valid Value </p>}

      </div>
    )
  }
}


export default App;


import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      locationName : '',
      allOutputs : {},
    //  location:'',

    }
  }
  

viewLocation = async (event) => {

  event.preventDefault();
  await this.setState({locationName:event.target.Cityname.value});
  let url = `https://eu1.locationiq.com/v1/search?key=${process.env.REACT_APP_KEY}&q=${this.state.locationName}&format=json`;
  let response =await axios.get(url);
  // console.log(response);
  this.setState({allOutputs:response.data[0]})

}


render() {
  return (
  <>
    <div>
      <h1>City Explorer</h1>

      <Form onSubmit={this.viewLocation}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" name="Cityname" placeholder="Enter Place" />
        </Form.Group>
        <Button variant="primary" type="submit">
           Explore!
        </Button>
      </Form>
    <br>
    </br>
   
    <>
    <p> Place Name : {this.state.allOutputs.display_name}</p>
    <p> Latitude : {this.state.allOutputs.lat}</p>
    <p> Longitude :{this.state.allOutputs.lon}</p>
    <br>
  </br>
  <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.state.allOutputs.lat},${this.state.allOutputs.lon}&zoom=10`} alt='here we are'/>
  </>
    
    

    </div>
    </>
  )
}
}

export default App;

  
  
  
  
  
  


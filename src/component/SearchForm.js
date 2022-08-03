import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class SearchForm extends React.Component{

    constructor(props){
        super(props)
    }

render(){

return(

<Form onSubmit={this.props.display}>
      <Form.Group className="mb-3" controlId="nameField">
        <Form.Label>City Name</Form.Label>
        <Form.Control type="text" placeholder="Enter city name" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Explore !
      </Button>
    </Form>
)


}
}

export default SearchForm;
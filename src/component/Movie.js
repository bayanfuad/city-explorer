import React, { Component } from 'react'


export class Movie extends Component {
  render() {
    return (
        <div className='movie'>
        <h2>Movies List</h2>
        <hr></hr>
        {this.props.movieData.map( (item,i) => { return(
          <>
              <h6>{item.title}</h6>
              <p>{item.released_on}</p>
              <p>🎞{item.popularity} </p>
              
              <hr></hr>
          </>)})}
        </div>
    )
  }
}

export default Movie
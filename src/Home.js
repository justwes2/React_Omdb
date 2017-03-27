import React, { Component } from 'react'
import SearchContainer from './SearchContainer'
// import Search from './Search'

class Home extends Component {
  render() {
    return(
      <div className="seachBox">
      <h1><a href="/">Movie Seeker</a></h1>
      <SearchContainer />
   </div>
    )
  }
}

export default Home

import React, {Component} from "react"

class Search extends Component {
  render(){
    let {handleSearchInput, handleSubmitQuery, query} = this.props
    return (
      <div className="searchBox">
        <form onSubmit={(evt) => handleSubmitQuery(evt)}>
          <input
          onChange={(evt) => handleSearchInput(evt)}
          value={query}
          type="text"
          placeholder="Enter a Movie Title..." />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default Search
// mine:
// import React, { Component } from 'react'
//
// class Search extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       query: ''
//     }
//   }
//
//
//   handleSearchInput(event) {
//     this.setState({
//       query: event.target.value
//     })
//   }
//
//   handleSubmitQuery(event){
//     event.preventDefault()
//     console.log(this.state.query)
//   }
//
//   render() {
//     let {handleSearchInput, onSubmitQuery, query} = this.props
//     return(
//       <div>
//       <h3>React Movie Search</h3>
//       <form onSubmit={(event) => this.handleSubmitQuery(event)}>
//       <input onChange={(event) => this.handleSearchInput(event)}
//       value={query} type="text" placeholder="Enter a Movie Title..."/>
//       <button  type="submit">Search</button>
//       </form>
//       </div>
//     )
//   }
// }
//
// export default Search

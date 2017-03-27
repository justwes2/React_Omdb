
import React, {Component} from "react"
import Search from "./Search"
import Results from "./Results"
import {queryOmdb} from "./Utils"

class SearchContainer extends Component {
 constructor(props){
   super(props)
   this.state = {
     query: '',
     hasSearched: false,
     movies: []
   }
 }

 onSearchInput (evt) {
   this.setState({
     query: evt.target.value
   })
 }

 onSubmitQuery(evt){
   evt.preventDefault();
   let component = this
   queryOmdb(this.state.query).then(data => {
     component.setState({
       query: '',
       hasSearched: true,
       movies: data
     })
   })
 }

 render(){

   if (this.state.hasSearched){
    return (
      <Results movies={this.state.movies} />
    )
  }else{
   return (
     <Search
       handleSearchInput={ (evt) => this.onSearchInput(evt) }
       handleSubmitQuery={ (evt) => this.onSubmitQuery(evt) }
       query={this.state.query}
     />
   )
  }
  }
}

export default SearchContainer
// mine:
// import React, { Component } from 'react'
// import Search from './Search'
//
// class SearchContainer extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       query: ''
//     }
//   }
//
//
//   onSearchInput(event) {
//     this.setState({
//       query: event.target.value
//     })
//   }
//
//   onSubmitQuery(event){
//     event.preventDefault()
//     console.log(this.state.query)
//     this.setState({
//       query: ''
//     })
//   }
//
//   render() {
//     return (
//       <Search
//         handleSearchInput = { (event) => this.onSearchInput(event)}
//         handleSubmitQuery={ (event) => this.onSubmitQuery(event)}
//         query={this.state.query} />
//     )
//   }
// }
//
// export default SearchContainer

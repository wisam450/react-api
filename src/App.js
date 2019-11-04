import React, { Component } from 'react'
import Inputfield from './Component/Inputfield'
import './App.css'
import Images from './Component/Images'
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       root : 'https://pixabay.com/api/',
       key : '13971347-7c2a43c947111c0ee989944ed',
       query : '',
       url: '',
       letSearch: false,
       loadedImages: null
    }
  }
  saveQuery = (e) => {
    this.setState({
      query: e.target.value, letSearch: false
    })
  }
  searchImages = () =>{
    let word = this.state.query.split(' ');
    let newUrl = this.state.root+'?key='+this.state.key+'&per_page=50'+'&q=';
    word.map((w)=>{
      newUrl += w +'+'
      console.log(newUrl)
    });
    this.setState({url: newUrl, letSearch:true , loadedImages: null})
  }
  loadImage = () =>{
    let newImage = <Images url={this.state.url}/>
    this.setState({loadedImages: newImage, letSearch: false})
  }

  
  render() {
    if(this.state.letSearch){
      this.loadImage()
    }
    return (
      <div>
        <Inputfield change={this.saveQuery} click={this.searchImages}/>
        {this.state.loadedImages}
        
      </div>
    )
  }
}

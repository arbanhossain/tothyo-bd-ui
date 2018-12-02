import React, { Component } from 'react';
import $ from 'jquery';
//import logo from './logo.svg';
//import './App.css';
import ItemList from './Components/ItemList';
import Item from './Components/Item'
import Zilas from './Components/Zilas'

class App extends Component {

  constructor(){
    super();
    this.state = {
      originalData: [],
      Data: [],
      zila: ''
    }
  }

  getItems(){
    $.ajax({
      url: 'http://tothyobangladesh-env.8mj2vjzjpz.us-east-1.elasticbeanstalk.com/api/zila/'+this.state.zila,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({Data: data})
      },
      error: (xhr, status, err) => {
        console.log(err);
      }
    })
  }

  changeZila(){
    var zilas = document.getElementById("zilas");
    var zila = zilas.options[zilas.selectedIndex].value;
    console.log(zila);
    this.setState({zila: zila})//returns -> this.setState is not a function
  }

  componentWillMount(){
    //this.getOriginalData();
    this.getItems();
  }

  render() {

    document.addEventListener('change', this.changeZila)

    //console.log(this.state.Data.location_data.zila);
    return ( 
      <div>
        <Zilas data={this.state.Data}/>
        {
          this.state.zila == '' &&
          <ItemList itemList={this.state.Data} />
        }
        {
          this.state.zila != '' &&
          <div>
            <h3>{this.state.zila}</h3>
            <Item item={this.state.Data} />
          </div>
        }
      </div>
    );
  }
}

export default App;

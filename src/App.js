import React, { Component } from 'react';
import $ from 'jquery';
//import logo from './logo.svg';
//import './App.css';
import ItemList from './Components/ItemList';
import Item from './Components/Item'

class App extends Component {

  constructor(){
    super();
    this.state = {
      Data: [],
      zila: 'DHAKA'
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

  componentWillMount(){
    this.getItems();
  }

  render() {
    //console.log(this.state.Data.location_data.zila);
    return ( 
      <div>
        {
          this.state.zila == '' &&
          <ItemList itemList={this.state.Data} />
        }
        {
          this.state.zila != '' &&
          <div>
            <Item item={this.state.Data} />
          </div>
        }
      </div>
    );
  }
}

export default App;

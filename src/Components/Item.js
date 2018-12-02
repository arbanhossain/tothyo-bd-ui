import React, { Component } from 'react';
//import ItemProp from './ItemProp';

class Item extends Component{
    render(){

        let returners = [];

        let showItem = (item) => {
            for(let prop in item) {
                let returner = [];
                let subreturner = [];
                if(item.hasOwnProperty(prop)){
                    //console.log(item[prop])
                    if(typeof item[prop] === 'object'){
                        returners.push(<h3 className="itemHeading">{prop}</h3>)
                        showItem(item[prop])              
                    } else {
                        if(prop == '_id'){
                            returners.push(<span><strong>{prop}</strong>: {item[prop]}</span>)
                        } else {
                            //console.log(item[prop])
                            returner.push(<li><strong>{prop}: </strong>{item[prop]}</li>)
                        }
                    }
                    //returner.push(<li>{subreturner}</li>)
                }
                if(returner.length>0) returners.push(returner);
            }
            return <div> {returners} </div>;
        }

        return(
            <div className="Item">
                {showItem(this.props.item)}
            </div>
        );
    }
}

export default Item;
import React, { Component } from 'react';

class ItemProp extends Component{
    render(){

        let showItemProp = (item) => {
            for(let prop in item) {
                if(item.hasOwnProperty(prop)){
                    console.log(prop, item[prop])
                }
            }
        }

        return(
            <div>
                {showItemProp(this.props.itemProp)}
            </div>
        );
    }
}

export default ItemProp;
import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component{
    render(){
        
        let items;
        if(this.props.itemList){
            items = this.props.itemList.map(item => {
                //console.log(item);
                return(
                    <div>
                        <h3>{item.location_data.zila}</h3>
                        <Item item={item} />
                    </div>
                );
            })
        }

        return(
            <div>
                {items}
            </div>
        );
    }
}

export default ItemList;
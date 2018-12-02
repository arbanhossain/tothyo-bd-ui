import React, { Component } from 'react';

class Zilas extends Component{
    render(){
        let zilas;
        if(this.props.data){
            zilas = this.props.data.map(item => {
                console.log(item.location_data.zila);
                return(
                    <option>{item.location_data.zila}</option>
                );
            })
        }

        return(
            <select id="zilas">
                <option value=''>All</option>
                {zilas}
            </select>
        )
    }
}

export default Zilas;
import React, { Component } from 'react';
import '../App.css';

class Promos extends Component {

    constructor(props) {
        super(props);
            this.state = {
                data: null,
            }
        }

    componentWillReceiveProps(newProps) {
        const index = newProps.selected;
        const productData = Number.isInteger(index) ? newProps.productData[index] : null;
        if (productData !== null) {
            this.setState({ data: productData });
            }
        }

    getPromoList = ((promos) => {
        return promos.map(promo => (
            <li key={promo.promotionIdentifier}>{promo.Description[0].shortDescription}</li>
        ))
    })
    
    
}

export default Promos;
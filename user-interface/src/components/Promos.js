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
    
    render() {
        const promos = this.state.data ? this.state.data.Promotions : null;
        const promoList = promos ? this.getPromoList(promos) : null;
    
        return (
            <div>
            <hr></hr>
          <ul className="promotions">
            {promoList}
          </ul>
            <hr></hr>
          </div>
        )
      }
    
    }
    
    export default Promos;
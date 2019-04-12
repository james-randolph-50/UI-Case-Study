import React, { Component } from 'react';
import '../App.css';

class PurchaseOptions extends Component {

    constructor(props) {
        super(props);
            this.state = {
                data: null
            }
        }

        componentWillReceiveProps(newProps) {
            const index = newProps.selected;
            const productData = Number.isInteger(index) ? newProps.productData[index] : null;
            if (productData !== null) {
                this.setState({ data: productData });
            }
        }

        render() {
            const pCCode = this.state.data ? parseInt(this.state.data.purchasingChannelCode, 10) : null;
            const addToCartEnabled = Number.isInteger(pCCode) ? (pCCode === 0 || pCCode === 1) : null;
            const addToCart = addToCartEnabled ? "Add to Cart is Enabled" : "Add to Cart is Disabled";
        
            const pickupInStoreEnabled = Number.isInteger(pCCode) ? (pCCode === 0 || pCCode === 2) : null;
            const pickupInStore = pickupInStoreEnabled ? "Pickup in Store is Enabled" : "Pickup in Store is Disabled";

            return (
                <div className="purchase-section">
                    <div className="purchase-item">{addToCart}</div>
                    <div className="purchase-item">{pickupInStore}</div>      
                </div>
            )
        }
    
}

export default PurchaseOptions;
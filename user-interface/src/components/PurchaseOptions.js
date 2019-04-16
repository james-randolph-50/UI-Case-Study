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
            const addToCart = addToCartEnabled ? "Add to Cart" : "Not Available";
        
            const pickupInStoreEnabled = Number.isInteger(pCCode) ? (pCCode === 0 || pCCode === 2) : null;
            const pickupInStore = pickupInStoreEnabled ? "Pickup in Store" : "Not Available";

            return (
                <div className="purchase-section">
                    <div className="purchase-item"><button className="add-to-cart">{addToCart}</button></div>
                    <div className="purchase-item"><button className="pickup-in-store">{pickupInStore}</button></div>      
                </div>
            )
        }
    
}

export default PurchaseOptions;
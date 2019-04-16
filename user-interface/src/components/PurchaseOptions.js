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
            const addToCart = addToCartEnabled ? "ADD TO CART" : "Not Available";
        
            const pickupInStoreEnabled = Number.isInteger(pCCode) ? (pCCode === 0 || pCCode === 2) : null;
            const pickupInStore = pickupInStoreEnabled ? "PICK UP IN STORE" : "Not Available";

            return (
                <div>
                    <div className="purchase-section">
                        <div className="purchase-item">
                            <button className="pickup-in-store">{pickupInStore}</button>
                            <p>find in a store</p>
                        </div> 
                        <div className="purchase-item">
                            <button className="add-to-cart">{addToCart}</button>
                        </div>
                    </div>
                        <div className="return-policy">
                            <h3>Returns</h3>
                            <p>This item must be returned within 30 days of the ship date. See <strong>return policy</strong> for details. Prices, promotions, styles and availability may vary by store and online.</p>
                        </div>
                        <div className="share-buttons">
                            <button className="gray-button">ADD TO REGISTRY</button>
                            <button className="gray-button">ADD TO LIST</button>
                            <button className="gray-button">SHARE</button>
                        </div>
                    
                </div>
            )
        }
    
}

export default PurchaseOptions;
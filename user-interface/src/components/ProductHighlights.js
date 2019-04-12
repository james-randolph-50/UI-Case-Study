import React, { Component } from 'react';
import '../App.css';

class ProductHighlights extends Component {

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

    
}

export default ProductHighlights;
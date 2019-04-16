import React, { Component } from 'react';
import '../App.css';

class ProductHighlights extends Component {

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

  getFeatureList = ((itemDescription) => {
    return itemDescription[0].features.map((feature, index) => (
      <li key={index}> { feature }</li>
    ))
  })

  render() {
    const itemDescription = this.state.data ? this.state.data.ItemDescription : null;
    const featureList = itemDescription ? this.getFeatureList(itemDescription) : null;

    return (
      <div className="product-highlights-container">
        <div className="product-highlights-title">product highlights</div>
        <ul className="product-features">
          {featureList}
        </ul>
      </div>
    )
  }

}

export default ProductHighlights;
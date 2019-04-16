import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import itemJsonData from './item-data.json';
import Promos from './components/Promos';
import ProductHighlights from './components/ProductHighlights';
import Reviews from './components/Reviews';
import PurchaseOptions from './components/PurchaseOptions';
import ProductOffers from './components/ProductOffers';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        allData: null,
        selectedIndex: null
      }
  }

  async componentDidMount() {
    const catalogData = await itemJsonData ? itemJsonData.CatalogEntryView : null;
    const index = catalogData ? 0 : null;
    if (Number.isInteger(index)) {
      this.setState({ allData: catalogData, selectedIndex: index });
    }
  } 


  render() {
    return (
      <div className="product-container">
        <div className="product-info-item">
          <SelectedProductContainer productData={this.state.allData}
          selected={this.state.selectedIndex} />
        </div>
      </div>
    );
  }
}

export default App;

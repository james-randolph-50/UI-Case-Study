import React, { Component } from 'react';
import '../App.css';
import Slider from 'react-slick';

class ImageSlider extends Component {
    render() {
        var settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
          <Slider {...settings}>
            <div>
              <img src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt01" alt="" />
            </div>
            <div>
            <img src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt02" alt=""/>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        );
      }
}

export default ImageSlider;
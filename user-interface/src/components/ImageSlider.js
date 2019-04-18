// import React, { Component } from 'react';
// import '../App.css';
// import Slider from 'react-slick';
// import renderHTML from 'react-render-html';


// class ImageSlider extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//     }
//   }

//   componentWillReceiveProps(newProps) {
//     const index = newProps.selected;
//     const imageData = Number.isInteger(index) ? newProps.imageData[index] : null;

//     if (imageData !== null) {
//       this.setState({ data: imageData });
//     }
//   }

//   getImages = ((alternativeImage) => {
//     return alternativeImage[0].features.map((feature, index) => (
//       <li key={index}>{renderHTML(feature)}</li>
//     ))
//   })
//     render() {

//       const alternativeImages = this.state.data ? this.state.data.Images : null;
//       const featureList = alternativeImage ? this.getFeatureList(alternativeImage) : null;

//         var settings = {
//           dots: false,
//           infinite: true,
//           speed: 500,
//           slidesToShow: 1,
//           slidesToScroll: 1
//         };
//         return (
//           <Slider {...settings}>
//             <div>
//               <img src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt01" alt="" />
//             </div>
//             <div>
//             <img src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt02" alt=""/>
//             </div>
//             <div>
//               <h3>3</h3>
//             </div>
//             <div>
//               <h3>4</h3>
//             </div>
//             <div>
//               <h3>5</h3>
//             </div>
//             <div>
//               <h3>6</h3>
//             </div>
//           </Slider>
//         );
//       }
// }

// export default ImageSlider;
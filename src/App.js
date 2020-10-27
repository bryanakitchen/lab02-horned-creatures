import React from 'react';
import './App.css';
import images from './Data.js';
import Header from './Header';
import ImageList from './ImageList';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <ImageList imagesProp={images} />
      </div>
    )
  }
}

// line 13, imageProp, comes from ImageList.js, line 22.
// and {images} comes from our imported data. 
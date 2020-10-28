import React from 'react';
import './App.css';
import images from './Data.js';
import DropDown from './DropDown.js';
import Header from './Header.js';
import ImageList from './ImageList.js';

export default class App extends React.Component {

  state = {
    filter: '',
    horns: '',
    cool: '',
}

handleChange = e => {
    this.setState({
        filter: e.target.value,
    });
}

handleChangeHorns = e => {
    this.setState({
        horns: e.target.value,
    });
}

handleChangeCool = e => {
    this.setState({
        cool: e.target.value,
    });
}

  render() {
    return (
      <div>
        <Header />
        <DropDown handleChange={this.handleChange} handleChangeHorns={this.handleChangeHorns} handleChangeCool={this.handleChangeCool} />
        <ImageList imagesProp={images} horns={this.state.horns} filter={this.state.filter} cool={this.state.cool} />
      </div>
    )
  }
}

// line 13, imageProp, comes from ImageList.js, line 73-ish.
// and {images} comes from our imported data. 
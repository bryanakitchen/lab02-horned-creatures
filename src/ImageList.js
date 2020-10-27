import React from 'react';
import ImageItem from './ImageItem.js';

// LOGIC lives here
// Data being rendered in

export default class ImageList extends React.Component {
    
    state = {
        filter: '',
        horns: '',
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

    render() {

    const filteredImages = this.props.imagesProp.filter((image) => {
      if (!this.state.filter) return true;

      if (image.keyword === this.state.filter) return true;
      
      return false;
    });

    // const filteredImages = this.props.imagesProp.filter((image) => {
    //     if (!this.state.filter) return true;
  
    //     if (image.keyword === this.state.filter) return true;
        
    //     return false;
    //   });
  

        return (
            <>
                <div className="drop-down-one" >
                    <select onChange={this.handleChange}>
                        <option value=''>Show All Types</option>
                        <option value='narwhal'>Narwhal</option>
                        <option value='rhino'>Rhino</option>
                        <option value='unicorn'>Unicorn</option>
                        <option value='unilego'>Unilego</option>
                        <option value='triceratops'>Triceratops</option>
                        <option value='markhor'>Markhor</option>
                        <option value='mouflon'>Mouflon</option>
                        <option value='addax'>Addax</option>
                        <option value='chameleon'>Chameleon</option>
                        <option value='lizard'>Lizard</option>
                        <option value='dragon'>Dragon</option>
                    </select>
                </div>
                <div className="drop-down-one" >
                    <select onChange={this.handleChangeHorns}>
                        <option value=''>Show All Horns</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='100'>100</option>
                    </select>
                </div>

                <div className="whole-group">
                    {filteredImages.map(image => {
                        return <ImageItem title={image.title} url={image.url} description={image.description} horns={image.horns} keyword={image.keyword} />
                    })}
                </div>
            </>
        )
    }
}

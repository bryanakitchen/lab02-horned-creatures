import React from 'react';
import ImageItem from './ImageItem.js';

// LOGIC lives here / not anymore. 
// Data being rendered in

export default class ImageList extends React.Component {

    render() {  

        return (
            <>
                <div className="whole-group">
                    {
                        this.props.imagesProp.filter((image) => {
                            if (!this.props.filter) return true;
                            if (image.keyword === this.props.filter) return true;
                            return false;
                          })

                        .filter((image) => {
                            if (!this.props.horns) return true;
                            if (image.horns === +this.props.horns) return true;
                            return false;
                          })

                        .filter((image) => {
                            if (!this.props.cool) return true;
                            if (image.cool === this.props.cool) return true;
                            return false;
                          })
                    
                        .map(image => {
                        return <ImageItem title={image.title} url={image.url} description={image.description} horns={image.horns} keyword={image.keyword} cool={image.cool} />
                    })}
                </div>
            </>
        )
    }
}

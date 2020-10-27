import React from 'react';

// THIS IS A TEMPLATE - Presentational Component
// Styling goes here

export default class ImageItem extends React.Component {
    render() {
        return (
            <div className="each-unit">
                <h3 className="title">{this.props.title}</h3>
                <img className="images" src={this.props.url} alt={this.props.title}></img>
                <p className="description">{this.props.description}</p>
                <p className="horns">Number of Horns: {this.props.horns}</p>
                <p className="keyword">Keyword: {this.props.keyword}</p>
                <p className="cool">Cool Factor: {this.props.cool}</p>
            </div>
        )
    }
}

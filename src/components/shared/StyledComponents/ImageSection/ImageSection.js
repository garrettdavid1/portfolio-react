import React, { Component } from 'react';
import { styles } from './styles';

export class ImageSection extends Component{
    render(){
        return (
            <div className='imageSection' style={{...styles.container, ...this.props.style, ...{backgroundImage: `url(${this.props.src})`}}}>
                {this.props.children}
            </div>
        )
    }
}
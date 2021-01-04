import React, { Component } from 'react';
import { styles } from './styles';

export default class ContentSection extends Component{
    render(){
        return (
            <div 
                {...this.props}
                className="contentSection" 
                style={
                    {
                        ...styles.container,
                        ...this.props.style, 
                        ...{
                            display: this.props.visible ? 'flex' : 'none'
                        }
                    }
                }
            >
                {this.props.heading && <h3 className="contentSectionHeader" style={styles.heading}>{this.props.heading}</h3>}
                <br />
                {this.props.children}
            </div>
        )
    }

    componentWillMount(){
        window.addEventListener('resize', () => { this.forceUpdate() });
    }
}
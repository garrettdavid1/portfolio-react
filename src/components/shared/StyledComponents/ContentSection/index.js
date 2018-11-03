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
                            top: this.props.visible ? 'calc(25vh + 10px)' : '-50vh',
                            zIndex: this.props.visible ? 5 : 1
                        }
                    }
                }
            >
                {this.props.heading && <h3 className="contentSectionHeader" style={styles.heading}>{this.props.heading}</h3>}
                {this.props.children}
            </div>
        )
    }

    componentWillMount(){
        window.addEventListener('resize', () => { this.forceUpdate() });
    }
}
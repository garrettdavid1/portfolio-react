import React, { Component } from 'react';
import { styles } from './styles';

export default class ContentSection extends Component{
    render(){
        return (
            <div className="contentSection" style={{...styles.container, ...{width: 'calc(65vw - 20px)',}}} {...this.props}>
                {this.props.heading && <h3 className="contentSectionHeader" style={styles.heading}>{this.props.heading}</h3>}
                {this.props.children}
            </div>
        )
    }

    componentWillMount(){
        window.addEventListener('resize', () => { this.forceUpdate() });
    }
}
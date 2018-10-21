import React, { Component } from 'react';
import { styles } from './styles';
import { OnVis } from '../OnVis/OnVis';

export default class ContentSection extends Component{
    render(){
        return (
            <div className="contentSection" style={{...styles.container, ...{width: 'calc(65vw - 20px)',}}} {...this.props}>
                {this.props.title && <h3 className="contentSectionHeader" style={styles.title}>{this.props.title}</h3>}
                {this.props.children}
            </div>
        )
    }

    componentWillMount(){
        window.addEventListener('resize', () => { this.forceUpdate() });
    }
}
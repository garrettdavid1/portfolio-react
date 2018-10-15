import React, { Component } from 'react';
import { styles } from './styles';
import { OnVis } from '../OnVis/OnVis';

export default class ContentSection extends Component{
    render(){
        return (
            <div className="contentSection" style={{...styles.container, ...{width: 'calc(65vw - 20px)',}}}>
                <OnVis className="contentSectionHeader" onVisible={this.props.onVisible} name={this.props.title} style={styles.title}>{this.props.title}</OnVis>
                {this.props.children}
            </div>
        )
    }

    componentWillMount(){
        window.addEventListener('resize', () => { this.forceUpdate() });
    }
}
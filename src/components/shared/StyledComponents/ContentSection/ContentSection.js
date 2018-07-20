import React, { Component } from 'react';
import { styles } from './styles';
import { OnVis } from '../OnVis/OnVis';

export class ContentSection extends Component{
    render(){
        return (
            <div className="contentSection" style={styles.container}>
                <OnVis className="contentSectionHeader" style={styles.title}>{this.props.title}</OnVis>
                {this.props.children}
            </div>
        )
    }
}
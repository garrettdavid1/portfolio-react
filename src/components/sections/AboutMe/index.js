import React, { Component } from 'react';
import { styles } from './styles';
import ContentSection from '../../shared/StyledComponents/ContentSection';
import lib from '../../../lib/Lib';

let hasBeenSeen = false;
export default class AboutMe extends Component{
    state = {
        text: '',
        hasBeenSeen: false
    }

    render(){
        return (
            <ContentSection title='About Me' onVisible={this.typeText}>
                <div style={{color: 'white'}}>{this.state.text}</div>
            </ContentSection>
        )
    }

    typeText = (isVisible) => {
        if(isVisible && !hasBeenSeen){
            hasBeenSeen = true;
            lib.typeWriter('This is all about me.', this, 'text');
        }
    }

}
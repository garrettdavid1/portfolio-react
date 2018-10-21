import React, { Component } from 'react';
import ContentSection from '../../shared/StyledComponents/ContentSection';
import { styles } from './styles';
import { settings } from '../../../constants/Settings';
import lib from '../../../lib/Lib';

export default class AboutMe extends Component{
    state = {
        text: ''
    }

    text = 'This is all about me.';
    hasBeenSeen = false;

    componentWillReceiveProps(nextProps){
        if(nextProps.useTypeWriter && nextProps.visible && !this.hasBeenSeen){
            this.hasBeenSeen = true;
            setTimeout(() => { lib.typeWriter(this.text, this, 'text'); }, settings.carouselTransitionTime);
        } else if(nextProps.visible && !this.hasBeenSeen){
            this.setState({ text: this.text });
        }
    }

    render(){
        return (
            <ContentSection title='About Me'>
                <div style={{color: 'white'}}>{this.state.text}</div>
            </ContentSection>
        )
    }

}
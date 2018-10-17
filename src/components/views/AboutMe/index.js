import React, { Component } from 'react';
import ContentSection from '../../shared/StyledComponents/ContentSection';
import { styles } from './styles';
import { settings } from '../../../constants/Settings';
import lib from '../../../lib/Lib';

let hasBeenSeen = false;
export default class AboutMe extends Component{
    state = {
        text: ''
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.visible && !hasBeenSeen){
            hasBeenSeen = true;
            setTimeout(() => { lib.typeWriter('This is all about me.', this, 'text'); }, settings.carouselTransitionTime);
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
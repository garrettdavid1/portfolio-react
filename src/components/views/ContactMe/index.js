import React, { Component } from 'react';
import ContentSection from '../../shared/StyledComponents/ContentSection';
import { settings } from '../../../constants/Settings';
import lib from '../../../lib/Lib';

let hasBeenSeen = false;
export default class ContactMe extends Component{
    state = {
        text: ''
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.visible && !hasBeenSeen){
            hasBeenSeen = true;
            setTimeout(() => { lib.typeWriter('Call me, maybe?', this, 'text'); }, settings.carouselTransitionTime);
        }
    }

    render(){
        return (
            <ContentSection title='Get in Touch'>
                <div>{this.state.text}</div>
            </ContentSection>
        )
    }
}
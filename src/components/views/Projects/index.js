import React, { Component } from 'react';
import ContentSection from '../../shared/StyledComponents/ContentSection';
import { settings } from '../../../constants/Settings';
import lib from '../../../lib/Lib';

let hasBeenSeen = false;
export default class Projects extends Component{
    state = {
        text: ''
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.visible && !hasBeenSeen){
            hasBeenSeen = true;
            setTimeout(() => { lib.typeWriter('Clearly, I haven\'t gotten to this section yet...', this, 'text'); }, settings.carouselTransitionTime);
        }
    }

    render(){
        return (
            <ContentSection title='Projects'>
                <div>{this.state.text}</div>
            </ContentSection>
        )
    }
}
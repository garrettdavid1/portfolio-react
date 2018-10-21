import React, { Component } from 'react';
import ContentSection from '../../shared/StyledComponents/ContentSection';
import { settings } from '../../../constants/Settings';
import lib from '../../../lib/Lib';

export default class Projects extends Component{
    state = {
        text: ''
    }

    hasBeenSeen = false;
    text = 'Clearly, I haven\'t gotten to this section yet...';

    componentWillReceiveProps(nextProps){
        if(nextProps.useTypeWriter && !this.hasBeenSeen && nextProps.visible){
            this.hasBeenSeen = true;
            setTimeout(() => { lib.typeWriter(this.text, this, 'text'); }, settings.carouselTransitionTime);
        } else if(nextProps.visible && !this.hasBeenSeen){
            this.setState({ text: this.text });
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
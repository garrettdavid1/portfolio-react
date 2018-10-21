import React, { Component } from 'react';
import ContentSection from '../../shared/StyledComponents/ContentSection';
import { settings } from '../../../constants/Settings';
import lib from '../../../lib/Lib';

export default class ContactMe extends Component{
    state = {
        text: ''
    }
    hasBeenSeen = false;
    text = 'Call me, maybe?';

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
            <ContentSection title='Get in Touch'>
                <div>{this.state.text}</div>
            </ContentSection>
        )
    }
}
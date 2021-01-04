import React, { Component } from 'react';
import ContentSection from '../../shared/StyledComponents/ContentSection';
import { settings } from '../../../constants/Settings';
import lib from '../../../lib/Lib';

export default class ContactMe extends Component{
    state = {
        text: '',
        useTypeWriter: true
    }
    hasBeenSeen = false;
    text = 'The easiest way, for now, is to drop me a message on LinkedIn: ';

    componentWillReceiveProps(nextProps){
        if(nextProps.useTypeWriter && !this.hasBeenSeen && nextProps.visible){
            this.hasBeenSeen = true;
            setTimeout(() => { lib.typeWriter(this.text, this, 'text'); }, settings.carouselTransitionTime);
        } else if((nextProps.visible && !this.hasBeenSeen) || nextProps.useTypeWriter === false){
            this.hasBeenSeen = true;
            this.setState({ text: this.text, useTypeWriter: nextProps.useTypeWriter !== undefined ? nextProps.useTypeWriter : true });
        }
    }

    render(){
        return (
            <ContentSection heading='Get in Touch' visible={this.props.visible} style={{alignItems: 'center'}}>
                <a href='https://www.linkedin.com/in/david-garrett-dev/' className='sectionText' target='_blank' style={{color: 'white'}}>LinkedIn</a>
            </ContentSection>
        )
    }
}
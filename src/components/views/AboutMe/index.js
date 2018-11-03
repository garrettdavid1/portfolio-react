import React, { Component } from 'react';
import ContentSection from '../../shared/StyledComponents/ContentSection';
import { styles } from './styles';
import { settings } from '../../../constants/Settings';
import lib from '../../../lib/Lib';

export default class AboutMe extends Component{
    state = {
        text: '',
        useTypeWriter: true
    }

    text = 'This is all about me.';
    hasBeenSeen = false;

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
            <ContentSection heading='About Me' visible={this.props.visible}>
                <div style={{color: 'white'}}>{this.state.text}</div>
            </ContentSection>
        )
    }

}
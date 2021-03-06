import React, { Component } from 'react';
import ContentSection from '../../shared/StyledComponents/ContentSection';
import { settings } from '../../../constants/Settings';
import lib from '../../../lib/Lib';

export default class Projects extends Component{
    state = {
        text: '',
        useTypeWriter: true
    }

    hasBeenSeen = false;
    text = 'Oops! It looks like I haven\'t gotten to this section yet... Seems I should take some time off from working for the man to get it done. ¯\\_(ツ)_/¯';

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
            <ContentSection heading='Projects' visible={this.props.visible}>
                <div className='sectionText'>{this.state.text}</div>
            </ContentSection>
        )
    }
}
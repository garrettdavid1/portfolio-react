import React, { Component } from 'react';
import ContentSection from '../../shared/StyledComponents/ContentSection';
import { settings } from '../../../constants/Settings';
import lib from '../../../lib/Lib';

export default class AboutMe extends Component{
    state = {
        text: '',
        useTypeWriter: true
    }

    text = 'Hey, thanks for stopping by! I\'m David, a self-taught mobile and web developer. I started learning how to create web apps back in 2016, landed my first dev job in 2017, and have been chugging away ever since. I love developing mainly with the MERN stack, from the front end to the back, and also have years of experience with C# & ASP.NET. My philosophy is simple: I can learn and build anything. If I don\'t know how to do it right now, I can look it up and (eventually) master it. I am available for freelance or part-time development work. ';
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
                <div className='sectionText' style={{color: 'white'}}>{this.state.text}</div>
            </ContentSection>
        )
    }

}
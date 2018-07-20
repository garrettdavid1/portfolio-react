import React, { Component } from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';

setDefaultProps({
    bounce: true,
    visibleClassName: 'appear',
    percent: 10
});

export class OnVis extends Component{
    render(){
        return (
            <OnVisible {...this.props}>
                {this.props.children}
            </OnVisible>
        )
    }
}
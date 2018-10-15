import React, { Component } from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';

setDefaultProps({
    bounce: false,
    visibleClassName: 'appear',
    percent: 10
});

export class OnVis extends Component {
  state = {
    isVisible: false
  };

  render() {
    return (
      <OnVisible
        {...this.props}
        onChange={isVisible => {
          if (isVisible !== this.state.isVisible) {
            this.setState({
                isVisible
            })

            if(isVisible && this.props.onVisible !== undefined){
                this.props.onVisible(isVisible);
            }
          }
        }}
      >
        {this.props.children}
      </OnVisible>
    );
  }
}
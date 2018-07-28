import React, {Component } from 'react';
import { images } from '../../../constants/Images';
import { ImageSection } from '../../shared/StyledComponents/ImageSection/ImageSection';
import { OnVis } from '../../shared/StyledComponents/OnVis/OnVis';
import { styles } from './styles';

export class SiteHeader extends Component{

    render(){
        const isLargeScreen = window.innerWidth > 450;
        const isWideScreen = window.innerWidth > window.innerHeight;
        return <ImageSection style={styles.container} src={images.header}>
            <div style={styles.centerContainer}>
              <div style={{ ...styles.headshotContainer, ...{ height: isLargeScreen ? "100%" : "50%", width: isLargeScreen ? "50%" : "100%" } }}>
                <OnVis 
                    className={this.getHeadshotClasses()} 
                    style={{ 
                        ...styles.headshot, 
                        ...{ height: isWideScreen ? "20vw" : "20vh", width: isWideScreen ? "20vw" : "20vh" } 
                    }} 
                />
              </div>
              <div style={{ ...styles.taglineContainer, ...{ height: isLargeScreen ? "100%" : "50%", width: isLargeScreen ? "50%" : "100%" } }}>
                <div
                  style={{
                    ...styles.taglineRow,
                    ...{
                      display: "flex",
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "flex-end"
                    }
                  }}
                >
                  David Garrett
                </div>
                <div style={styles.taglineRow}>
                  Mobile/Web Developer
                </div>
              </div>
            </div>
          </ImageSection>;
    }

    componentWillMount(){
        window.addEventListener('resize', () => { this.forceUpdate() });
    }

    getHeadshotClasses = () => {
        return window.innerWidth > window.innerHeight ? 'headshot wide' : 'headshot tall';
    }
}
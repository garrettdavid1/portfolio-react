import React, {Component } from 'react';
import { images } from '../../../constants/Images';
import { ImageSection } from '../../shared/StyledComponents/ImageSection/ImageSection';
import { styles } from './styles';

export class SiteHeader extends Component{
    render(){
        console.log('window.innerWidth: ' + window.innerWidth);
        return (
            <ImageSection style={styles.container} src={images.header}>
                <div style={styles.centerContainer}>
                    <div style={styles.headshotContainer}>
                        <div style={styles.headshot}></div>
                    </div>
                    <div style={styles.taglineContainer}>
                        <div style={{...styles.taglineRow, ...{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}}>David Garrett</div>
                        <div style={styles.taglineRow}>Mobile/Web Developer</div>
                    </div>
                </div>
            </ImageSection>
        );
    }
}
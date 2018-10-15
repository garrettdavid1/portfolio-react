import React, {Component } from 'react';
import { images } from '../../../constants/Images';
import ImageSection from '../../shared/StyledComponents/ImageSection';
import { OnVis } from '../../shared/StyledComponents/OnVis/OnVis';
import Tab from './Tab';
import AboutMe from '../AboutMe';
import Projects from '../Projects';
import ContactMe from '../ContactMe';
import { styles } from './styles';

export default class SiteHeader extends Component{
	state={
		selectedTab: -1,
		contentMarginLeft: 0
	}

    render(){
        const isLargeScreen = window.innerWidth > 450;
		const isWideScreen = window.innerWidth > window.innerHeight;
		const {contentMarginLeft} = this.state;
        return <ImageSection style={styles.container} src={images.header}>
            <div style={styles.topContainer} />
            <div style={styles.centerRow}>
              <div style={styles.centerContainer}>
			  	<div style={{...styles.carousel, ...{marginLeft: contentMarginLeft}}}>
					<div style={styles.homeContent}>
						<div style={{ ...styles.headshotContainer, ...{ height: isLargeScreen ? "100%" : "50%", width: isLargeScreen ? "50%" : "100%" } }}>
						<OnVis className={this.getHeadshotClasses()} style={{ ...styles.headshot, ...{ height: isWideScreen ? "20vw" : "20vh", width: isWideScreen ? "20vw" : "20vh" } }} />
						</div>
						<div style={{ ...styles.taglineContainer, ...{ height: isLargeScreen ? "100%" : "50%", width: isLargeScreen ? "50%" : "100%" } }}>
						<div style={{ ...styles.taglineRow, ...{ display: "flex", flex: 1, justifyContent: "center", alignItems: "flex-end" } }}>
							David Garrett
						</div>
						<div style={styles.taglineRow}>
							Mobile/Web Developer
						</div>
						</div>
					</div>
					<AboutMe />
					<Projects />
					<ContactMe />
				</div>
              </div>
              {this.getTabs()}
            </div>
          </ImageSection>;
    }

    componentWillMount(){
        window.addEventListener('resize', () => { this.forceUpdate() });
    }

    getHeadshotClasses = () => {
        return window.innerWidth > window.innerHeight ? 'headshot wide' : 'headshot tall';
	}
	
	getTabs = () => {
		const tabTitles = ['Home', 'About Me', 'Projects', 'Get in Touch'];
		return tabTitles.map((title, index) => 
			<Tab 
				title={title} 
				key={title.replace(/\s/g, '')} 
				index={index} 
				setSelectedTab={this.selectTab} 
				selected={this.state.selectedTab === index}
			/>
		);
	}

	selectTab = (selectedTab) => {
		const containerWidth = window.innerWidth * .65;
		this.setState({
			selectedTab,
			contentMarginLeft: selectedTab * (-1 * containerWidth)
		})
	}
}
import React, {Component } from 'react';
import { images } from '../../../constants/Images';
import { settings } from '../../../constants/Settings';
import { layout } from '../../../constants/Layout';
import ImageSection from '../../shared/StyledComponents/ImageSection';
import Tab from './Tab';
import Mugshot from '../Mugshot';
import AboutMe from '../AboutMe';
import Projects from '../Projects';
import ContactMe from '../ContactMe';
import { styles } from './styles';

export default class Main extends Component{
	state={
		selectedTab: 0,
		carouselMarginLeft: 0,
		carouselShouldTransition: true,
		useTypeWriter: true
	}

    render(){
		const {selectedTab, carouselMarginLeft, carouselShouldTransition, useTypeWriter} = this.state;
        return <ImageSection style={styles.container} src={images.header}>
            <div style={styles.topContainer} />
			<div style={{...layout.button, ...styles.dismissTypeWriterBtn, ...{}}} onClick={this.stopTyping}>Stahp the typing...</div>
            <div style={styles.centerRow}>
              <div style={styles.centerContainer}>
			  	<div style={{...styles.carousel, ...{marginLeft: carouselMarginLeft}}} className={carouselShouldTransition ? '' : 'noTransition'}>
					<Mugshot visible={selectedTab === 0} useTypeWriter={useTypeWriter}/>
					<AboutMe visible={selectedTab === 1} useTypeWriter={useTypeWriter}/>
					<Projects visible={selectedTab === 2} useTypeWriter={useTypeWriter}/>
					<ContactMe visible={selectedTab === 3} useTypeWriter={useTypeWriter}/>
				</div>
              </div>
              {this.getTabs()}
            </div>
          </ImageSection>;
	}
	
	componentDidUpdate(){
		if(!this.state.carouselShouldTransition){
			setTimeout(() => {
				this.setState({
					carouselShouldTransition: true
				})
			}, settings.carouselTransitionTime);
		}
	}

    componentWillMount(){
        window.addEventListener('resize', () => {this.selectTab(this.state.selectedTab, false)});
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

	selectTab = (selectedTab, carouselShouldTransition = true) => {
		const containerWidth = window.innerWidth * .65;
		this.setState({
			selectedTab,
			carouselShouldTransition,
			carouselMarginLeft: selectedTab * (-1 * containerWidth),
		})
	}

	stopTyping = () => {
		console.log('Clicked "stop typing" button')
		if(this.state.useTypeWriter !== false){
			this.setState({
				useTypeWriter: false
			});
		}
	}
}
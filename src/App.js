import React, { Component } from 'react';
import './App.css';
import { images } from './constants/Images';
import { SiteHeader } from './components/sections/SiteHeader/SiteHeader';
import { AboutMe } from './components/sections/AboutMe/AboutMe';
import { Projects } from './components/sections/Projects/Projects';
import { ContactMe } from './components/sections/ContactMe/ContactMe';
import { ImageSection } from './components/shared/StyledComponents/ImageSection/ImageSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SiteHeader />
        <AboutMe />
        <ImageSection style={{height: 200}} src={images.milkyWay} />
        <Projects />
        <ImageSection style={{height: 200}} src={images.starsPurpleToGreen} />
        <ContactMe />
      </div>
    );
  }
}

export default App;

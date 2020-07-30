import React from 'react';
import '../src/assets/css/App.css';
import Aux from './hoc/Aux';
import Topbar from './components/Topbar/Topbar';
import Header from './components/Header/Header';
import Content from '../src/containers/Content';
import HeroCarousel from './components/HeroCarousel/HeroCarousel';
import ThreeUpGrid from './components/ThreeUpGrid/ThreeUpGrid';
import ProductCarousel from './components/ProductCarousel/ProductCarousel';
import Hero from './components/Hero/Hero';
import ImageGrid from './components/ImageGrid/ImageGrid';


function App() {
  return (
    <Aux>
      <Topbar />
      <Header />
       <Content>
        <HeroCarousel />
        <ThreeUpGrid />
        <ProductCarousel />
        <Hero />
        <ImageGrid />
       </Content>
        {/*
        
        Subscribe Banner
      Footer */}
        
    </Aux>
  );
}

export default App;

import React from 'react';
import '../src/assets/css/App.css';
import Aux from './hoc/Aux';
import Topbar from './components/Topbar/Topbar';
import Header from './components/Header/Header';
import Content from '../src/containers/Content';
import HeroCarousel from './components/HeroCarousel/HeroCarousel';

function App() {
  return (
    <Aux>
      <Topbar />
      <Header />
       <Content>
        <HeroCarousel />
       </Content>
        {/*Three Up Grid
        Four Up Slider
        Hero Image
        Four Up Grid
        Subscribe Banner
      Footer */}
        
    </Aux>
  );
}

export default App;

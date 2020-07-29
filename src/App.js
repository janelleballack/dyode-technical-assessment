import React from 'react';
import '../src/assets/css/App.css';
import Aux from './hoc/Aux';
import Topbar from './components/Topbar/Topbar';
import Header from './components/Header/Header';

function App() {
  return (
    <Aux>
      <Topbar />
      <Header />
      {/* 
      Content
        Hero Slider
        Three Up Grid
        Four Up Slider
        Hero Image
        Four Up Grid
        Subscribe Banner
      Footer */}
        
    </Aux>
  );
}

export default App;

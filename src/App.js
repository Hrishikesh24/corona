import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import Barchart from './components/Barchart';
import Tips from './components/Tips';
import Countries from './components/Countries';
import Helpline from './components/Helpline';
import Maps from './components/Maps';
import Video from './components/Video';
import Article from './components/Article';



function App() {
  return (
    <div className="App">
      <div className="part-1">
        <div className="maps">
          <Maps />
        </div>
<div className="part-1-2"> 
        <div className="video-section">
          <Video />

        </div>

        <div className="article-section">
          <Article />
</div>
        </div>
      </div>
      <div className="part-2">
        <div className="tips-section">
          <Tips />
        </div>

        <div className="line-graph">
          <Chart />

        </div>

        <div className="helpline-section">
          <Helpline />
        </div>

        <div className="bar-graph">
          <Barchart />
        </div>






        <div className="country-section">
          <Countries />
        </div>








      </div>

    </div>
  );
}

export default App;

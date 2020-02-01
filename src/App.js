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
import Text from './components/Text';
import Schedule from './components/Schedule';
import Alert from './components/Alert';




function App() {
  return (
    <div className="App">

      <div className="text-section">
        <Text />
      </div>

      <div className="schedule-section">
        <Schedule />
      </div>

      <div className="part-1">
        <div className="maps">
          <Maps />
        </div>

        <div className="video-section round">
        <Video />

      </div>

      <div className="article-section round">
        <Article />
      </div>

      </div>

      <div className="part-2">

        <div className="tips-section round">
          <Tips />
        </div>


        <div className="alert-section round">
          <Alert />
        </div>




        <div className="line-graph round">
          <Chart />

        </div>

        <div className="country-section round">
          <Countries />
        </div>


        <div className="bar-graph round">
          <Barchart />
        </div>

        <div className="helpline-section round">
          <Helpline />
        </div>





      </div>







    </div>
  );
}

export default App;

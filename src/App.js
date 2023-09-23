//import logo from './logo.svg';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import './App.css';

function App() {
  return (
    <div className="app">
     {/* <h1>Hello Tushar, ,Let's build Youtube-clone</h1>*/}
      <Header />
      <div className='app__page'>
         <Sidebar />
         <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;

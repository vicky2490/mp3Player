import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrap">
      <div className="box">
        <div className="list-box"></div>
        <div className="list-box flex-column">
          <div className="list-word ">List</div>
          <div className="list-line"></div>
          <div className="list-line"></div>
          <div className="list-line"></div>
        </div>
      </div>
      <div className="content">
        <div className="rec rec-bottom"></div>
        <div className="rec rec-right-border">
          <div className="rec rec-right"></div>                    
        </div>
        
      </div>
    </div>
  );
}

export default App;

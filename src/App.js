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
        <div className="upper-half">
          <div className="pic">
            <div className="circle"></div>
          </div>
          <div className="right-half-btn">
            <div className="control-btn">
              <div className="btn-gray"></div> 
              <div className="btn previous"></div>
            </div>
            <div className="control-btn margin-auto">
              <div className="btn-gray"></div> 
              <div className="btn next"></div>
            </div>
            <div className="control-btn">
              <div className="btn-gray"></div> 
              <div className="btn shuffle-mode"></div>
            </div>
          </div>
        </div>
        <div className="control"></div>
        <div className="rec rec-bottom"></div>
        <div className="rec rec-right-border">
          <div className="rec rec-right"></div>                    
        </div>  
      </div>
    </div>
  );
}

export default App;

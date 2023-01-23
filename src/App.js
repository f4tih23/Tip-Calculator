import React from "react";
import './components/app.css';
import Bill from "./components/bill";



 function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-10">
            
            <Bill/>
          </div>
          
        </div>
      </div>
      
    
    </div>
  );
}

export default App;

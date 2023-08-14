import React from "react";
import './App.css';
import Board from './component/Board/Board'
import Board2 from "./component/Board/Board2";
import Board3 from "./component/Board/Board3";
import Board4 from "./component/Board/Board4";
import Board5 from "./component/Board/Board5";
function App() {
  return (
    <div className="App">
      <div className="app_navbar">
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Display
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  
    <a class="dropdown-item" href="#"></a>
  </div>
</div>
      </div>

      <div className="app_outer">

        <div className="app_boards">
          <Board/>
          <Board2/>
          <Board3/>
          <Board4/>
          <Board5/>
        </div>
      </div>

    </div>
  );
}

export default App;

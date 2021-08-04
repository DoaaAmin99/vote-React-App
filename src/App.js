import React,{Fragment} from 'react';
import Vote from './components/vote';
import './App.css';
function App() {
    return (
      // read all components
      <Fragment>
        <h1>Vote Your Language</h1>
        <Vote/>
      </Fragment>
    );
  }
 

export default App;

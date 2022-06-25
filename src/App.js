import React from 'react';
import NavBar from './components/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card  from './components/ItemCount'


function App() {
  return (
    <div className='App' >
      <div className="row">
        <div className='col-4'></div>
        <div className='col-4'>
          <Card stock={45} name='Fideo' />
        </div>
        <div className='col-4'></div>
      </div>    
    </div>
  );
}

export default App;

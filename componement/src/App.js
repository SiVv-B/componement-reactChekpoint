import React from 'react';
import './App.css';
import FullName from './componement/Profile/FullName.js';
import Address from './componement/Profile/Address.js';
import MaPhoto from './componement/Profile/ProfilePhoto.js';
function App() {
  return (
    <div className='App'>
      <FullName/>
      <Address/>
      <MaPhoto/> 
    </div>
  );
};
export default App;

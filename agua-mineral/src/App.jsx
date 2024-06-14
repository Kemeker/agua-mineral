import React from 'react';
import { Router} from 'react-router-dom';
import AppRoutes from '../src/Routes';

function App() {
  return (
    <Router>
      <AppRoutes/> 
    </Router> 
  );
}

export default App;
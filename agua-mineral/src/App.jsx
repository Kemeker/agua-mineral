import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from '../src/Routes';

function App() {
  return (
    <Router>
      <AppRoutes/> 
    </Router> 
  );
}

export default App;
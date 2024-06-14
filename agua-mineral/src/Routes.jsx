import React from 'react';
import { Route, Routes, BrowserRouter} from 'react-router-dom';

// import das paginas
import Home from '../src/pages/Home';  
import NotFound from '../src/pages/NotFound'

// import de componentes
import Header from '../src/components/NavBar'



const AppRoutes = () => {
  return (
      
      <BrowserRouter>
        <Header />
        <Routes>
          
          <Route path="/" element={<Home />} /> 
          <Route path='/*' element={<NotFound />} />
          
          
        </Routes>
        </BrowserRouter>
  );
};

export default AppRoutes;
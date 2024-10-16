import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/Home';
import Error404 from './components/Error404';
import DetailsUtilisateur from './components/DetailsUser';
import ListUsers from './components/ListUsers';
import Formulaire from './components/Formulaire';

const RoutesConfig = () => (
  <Router>
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/details/:id" element={<DetailsUtilisateur />} /> {/* Route pour les détails */}
      <Route path='/personnes' element={<ListUsers ageMin={18} order={'desc'} />} />
      <Route path='/formulaire' element={<Formulaire />} />
    </Routes>
  </Router>
);

export default RoutesConfig;

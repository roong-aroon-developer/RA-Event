import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'

const App = ()=> {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
}
export default App;

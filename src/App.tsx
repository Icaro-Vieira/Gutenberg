import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import { Routers } from './Routes/routes';

function App() {
  return (
    <Router>
      <Routers/>
    </Router>
  )
}

export default App;

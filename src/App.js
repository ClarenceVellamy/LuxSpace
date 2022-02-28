import 'assets/css/app.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from 'pages/HomePage';
import Details from 'pages/Details';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/categories/:idc' element={<Details/>} />
      </Routes>
    </Router>
  );
}

export default App;

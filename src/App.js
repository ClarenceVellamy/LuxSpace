import 'assets/css/app.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from 'pages/HomePage';
import Details from 'pages/Details';
import Cart from 'pages/Cart';
import Congratulation from 'pages/Congratulation';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/categories/:idc' element={<Details/>} />
        <Route exact path='/cart' element={<Cart/>} />
        <Route exact path='/congratulation' element={<Congratulation/>} />
        <Route exact path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;

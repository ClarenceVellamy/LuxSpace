import 'assets/css/app.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from 'pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
      </Routes>
    </Router>
  );
}

export default App;

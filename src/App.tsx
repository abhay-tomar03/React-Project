import React from 'react';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css';
import Nav from './components/NavBar';
import CreatePost from './pages/create-post/create-post';
import Login from './pages/Login';
import { Main } from "./pages/main/main";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/createpost' element={<CreatePost/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

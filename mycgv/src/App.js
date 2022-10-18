import React from 'react';
import Header from './components/header';
import Reserve from './components/reserve';
import Movies from './components/movies';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div id="mycgv">
      <Header />
      <Routes>
        <Route path='/' exact element={<Reserve />} />
        <Route path='/moviechart' element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
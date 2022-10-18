import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Header from './components/Header';
import Home from './routes/Home';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Menulist from './routes/Menulist';
import Menuview from './routes/Menuview';
import Joinstep from './routes/Joinstep';
import NoPage from './routes/Nopage';

export default function App() {
  return (
    <div className='wrap'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="menu/menulist" element={<Menulist />} />
          <Route path="menu/menuview" element={<Menuview />} />
          <Route path="join/join_step1" element={<Joinstep />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

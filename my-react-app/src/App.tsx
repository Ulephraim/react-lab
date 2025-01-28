/** @format */

import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './projects/CRUD/home';
import Create from './projects/CRUD/create';
import Update from './projects/CRUD/update';
import Read from './projects/CRUD/read';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Read />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

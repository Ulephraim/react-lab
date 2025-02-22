/** @format */

import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './../src/projects/CRUD/home';
import UseStateHook from './projects/Hooks/useStateHook';
import UseReducerHook from './projects/Hooks/useReducerHook';
import Create from './projects/CRUD/create';
import Update from './projects/CRUD/update';
import Read from './projects/CRUD/read';
import HomePage from './projects/Home';
import Donate from './projects/PAYMENTINTEGRATION/Donate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/donate" element={<Donate />} />
        <Route path="/usestatehook" element={<UseStateHook />}>
          UseStateHook
        </Route>
        <Route path="/reducer" element={<UseReducerHook />}>
          Reducer
        </Route>
        <Route path="/crud-home" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Read />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

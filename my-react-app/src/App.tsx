/** @format */

import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './projects/REDUX/counter/Counter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />}></Route>

        {/* <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Read />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

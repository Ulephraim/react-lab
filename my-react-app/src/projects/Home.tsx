/** @format */

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      Welcome Home <br />
      <Link to="/crud-home">CRUD</Link> <br />
      <Link to="/donate">Donate</Link> <br />
      <Link to="/payment">Payment</Link> <br />
      <Link to="/mail">Mail</Link> <br />
      <Link to="/grid">Grid</Link>
    </div>
  );
}

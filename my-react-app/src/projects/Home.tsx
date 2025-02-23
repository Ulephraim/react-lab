/** @format */

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      Welcome Home <br />
      <Link to="/crud-home">CRUD</Link> <br />
      <Link to="/donate">Donate</Link> <br />
      <Link to="/payment">Payment</Link>
    </div>
  );
}

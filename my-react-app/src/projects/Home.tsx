/** @format */

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome Home</h1>
      <div className="button-group">
        <Link to="/crud-home" className="btn">
          CRUD
        </Link>
        <Link to="/donate" className="btn">
          Donate
        </Link>
        <Link to="/payment" className="btn">
          Payment
        </Link>
        <Link to="/mail" className="btn">
          Mail
        </Link>
        <Link to="/grid" className="btn">
          Grid
        </Link>
        <Link to="/query" className="btn">
          React Query
        </Link>

        <Link to="/zustand" className="btn">
          Zustand State
        </Link>
      </div>
    </div>
  );
}

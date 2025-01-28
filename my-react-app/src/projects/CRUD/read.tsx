/** @format */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

interface User {
  name: string;
  email: string;
  phone: string;
}

function Read() {
  const [data, setData] = useState<User[]>([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('http://localhost:5000/ users/' + id)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="user-details-container">
      <h1>User Details</h1>
      <div className="user-details">
        <div className="user-info">
          <strong>Name:</strong> {data.name}
        </div>
        <div className="user-info">
          <strong>Email:</strong> {data.email}
        </div>
        <div className="user-info">
          <strong>Phone:</strong> {data.phone}
        </div>
      </div>
      <div className="actions">
        <Link to={`/update/${id}`} className="edit-btn">
          Edit
        </Link>
        <Link to="/" className="back-btn">
          Back
        </Link>
      </div>
    </div>
  );
}

export default Read;

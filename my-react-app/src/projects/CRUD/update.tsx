/** @format */

import axios from 'axios';
import React, { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

interface User {
  name: string;
  email: string;
  phone: string;
}

function Update() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // const [data, setData] = useState<User[]>([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('http://localhost:5000/ users/' + id)
      .then((response) => {
        setValues(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .put('http://localhost:5000/ users/' + id, values)
      .then((res) => {
        console.log(res);
        // setValues(res.data);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="form-container">
      <h1>Edit a User</h1>
      <form className="user-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input-field"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-field"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="input-field"
          value={values.phone}
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
        />
        <div>
          <button type="submit" className="submit-btn">
            Update
          </button>
          <button className="back-btn">
            <Link to="/">Back</Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Update;

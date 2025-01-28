/** @format */

import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/ users', values)
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
      <h1>Add User</h1>
      <form className="user-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input-field"
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-field"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="input-field"
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
        />
        <div>
          <button type="submit" className="submit-btn">
            Add User
          </button>
          <button className="back-btn">
            <Link to="/">Back</Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;

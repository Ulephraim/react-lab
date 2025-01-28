/** @format */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

function Home() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/ users')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm('would you like to delete');
    if (confirm) {
      axios
        .delete('http://localhost:5000/ users/' + id)
        .then((res) => {
          console.log(res.data);
          location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <h1>List of Users</h1>
      <div>
        <div className="create-btn">
          <Link to="/create">Add +</Link>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>
                    <Link to={`/read/${data.id}`} className="btn-info">
                      Read
                    </Link>
                    <Link to={`/update/${data.id}`} className="btn-primary">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(data.id)}
                      className="btn-secondary"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;

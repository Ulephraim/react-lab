/** @format */

import { useEffect, useState } from 'react';
import axios from 'axios';

interface FetchDataProps {
  id: string;
  name: string;
  email: string;
  address: string;
  city: string;
}

export default function FetchData() {
  const [data, setData] = useState<FetchDataProps[]>([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h3>Fetching Data from API in React with Axios</h3>
      <table className="table">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
        </thead>
        <tbody>
          {data.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/** @format */

import axios from 'axios';
import React, { useState } from 'react';

const SendMails: React.FC = () => {
  const [email, setEMail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEMail(e.target.value);
  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSubject(e.target.value);
  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMessage(e.target.value);

  const sendMail = (event: React.FormEvent) => {
    event.preventDefault();
    axios
      .get('http://localhost:5000/', { params: { email, subject, message } })
      .then(() => console.log('Success'))
      .catch(() => console.log('Failure'));
  };

  return (
    <form className="mail-container" onSubmit={sendMail}>
      <input
        className="mail-input"
        type="email"
        placeholder="Recipient Email"
        onChange={handleEmailChange}
      />
      <input
        className="mail-input"
        type="text"
        placeholder="Subject"
        onChange={handleSubjectChange}
      />
      <input
        className="mail-input"
        type="text"
        placeholder="Message"
        onChange={handleMessageChange}
      />
      <button type="submit" className="btn-primary">
        Send Email
      </button>
    </form>
  );
};

export default SendMails;

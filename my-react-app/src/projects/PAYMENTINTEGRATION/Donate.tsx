/** @format */

import { useState } from 'react';
import '../../index.css';
import { PaystackButton } from 'react-paystack';

export default function Donate() {
  const PUBLIC_KEY = 'pk_test_e451f88b427f525b31c594a485cd831e18466a7d';
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');

  const componentProps = {
    email,
    amount: Number(amount) * 100,
    metadata: {
      custom_fields: [
        {
          display_name: 'Full Name',
          variable_name: 'name',
          value: name,
        },
        {
          display_name: 'Phone Number',
          variable_name: 'phoneNumber',
          value: phoneNumber,
        },
      ],
    },
    publicKey: PUBLIC_KEY,
    text: 'Paystack Donate',
    onSuccess: () => alert('Thank you for donating'),
    onClose: () => alert('Are you sure you want to close?'),
  };

  return (
    <div className="donate-container">
      <h2 className="donate-title">Make your Payment Here</h2>
      <div className="donate-form">
        <input
          type="text"
          value={name}
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
          className="donate-input"
        />
        <input
          type="email"
          required
          value={email}
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          className="donate-input"
        />
        <input
          type="text"
          value={amount}
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
          className="donate-input"
        />
        <input
          type="text"
          value={phoneNumber}
          placeholder="Phone Number"
          onChange={(e) => setphoneNumber(e.target.value)}
          className="donate-input"
        />
      </div>
      <PaystackButton {...componentProps} className="donate-button" />
    </div>
  );
}

/** @format */

import { useState } from 'react';
import '../../index.css';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { useNavigate } from 'react-router-dom';

export default function FlutterPayment() {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const navigate = useNavigate();

  interface FlutterwaveResponse {
    status: string;
    transaction_id?: string;
    tx_ref?: string;
  }

  const amountValue = parseFloat(amount) || 0;

  const config = {
    public_key: 'FLWPUBK_TEST-561a4bfc67c807f616b0d924b3c066e3-X',
    tx_ref: Date.now().toString(),
    amount: amountValue,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email,
      phone_number: phoneNumber,
      name,
    },
    customizations: {
      title: 'My Payment Page',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave',
    callback: (response: FlutterwaveResponse) => {
      if (response.status !== 'completed') {
        console.log('Failed Transaction');
      } else {
        navigate('/');
        console.log('Success');
      }

      closePaymentModal();
    },
    onClose: () => {
      alert('Modal has been closed');
    },
  };

  return (
    <div className="donate-container">
      <h2 className="donate-title">Make your Flutter Payment Here</h2>
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
          type="number"
          value={amount}
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
          className="donate-input"
        />
        <input
          type="tel"
          value={phoneNumber}
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="donate-input"
        />
      </div>

      <FlutterWaveButton className="donate-button" {...fwConfig} />
    </div>
  );
}

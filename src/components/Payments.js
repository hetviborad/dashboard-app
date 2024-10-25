import React, { useState } from 'react';

const Payments = () => {
  // Initial mock data for payments
  const [payments, setPayments] = useState([
    { id: 1, amount: 150.0, status: 'Unpaid' },
    { id: 2, amount: 200.0, status: 'Paid' },
    { id: 3, amount: 100.0, status: 'Unpaid' },
  ]);

  // Function to mark a payment as paid
  const markAsPaid = (id) => {
    setPayments(
      payments.map((payment) =>
        payment.id === id ? { ...payment, status: 'Paid' } : payment
      )
    );
  };

  return (
    <div className="my-4">
      <h2>Payments</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>${payment.amount.toFixed(2)}</td>
              <td>{payment.status}</td>
              <td>
                {payment.status === 'Unpaid' ? (
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => markAsPaid(payment.id)}
                  >
                    Mark as Paid
                  </button>
                ) : (
                  <span className="text-muted">Paid</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;

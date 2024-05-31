import React from "react";

const CheckoutForm = () => {
  const handlePayment = () => {
    // Redirect to the payment page
    window.location.href = "https://buy.stripe.com/eVaaGk58D4VlaYg8ww";
  };

  return (
    <section id="checkout" className="checkout">
      <div className="container">
        <h2>Fitness Course</h2>
        <p>This comprehensive course covers:</p>
        <ul className="benefits-list-style">
          <li>
            <strong>Strength training techniques</strong>
          </li>
          <li>
            <strong>Cardiovascular exercises</strong>
          </li>
          <li>
            <strong>Motivational support</strong>
          </li>
        </ul>
        <p>Join us now to achieve your fitness goals!</p>
        <div className="price">Price: 50 RON</div>
        <button className="btn-primary" onClick={handlePayment}>
          Pay for Plan
        </button>
      </div>
    </section>
  );
};

export default CheckoutForm;

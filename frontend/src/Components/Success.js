import React from "react";
import { useEffect } from "react";

const Success = () => {
  useEffect(() => {
    alert("Payment was successful! 🎉");
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Payment Success</h1>
      <p>Thank you for your purchase.</p>
    </div>
  );
};

export default Success;

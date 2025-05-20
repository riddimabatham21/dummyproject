import React from "react";
import axios from "axios";
const Payment = () => {
  const buyFunction = async () => {
    let response = await axios.post("http://localhost:3000/api/payment/buy");
    if (response.status == 200) {
      console.log(response.data);
        window.location.href = response.data.url;
        
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={buyFunction}>Buy Now</button>
      </header>
    </div>
  );
};

export default Payment;

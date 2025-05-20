import "./App.css";
import Payment from "./Components/Payment";
import Success from "./Components/Success";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import ProtectRoute from "./Components/ProtectRoute";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route
          // path="/buy"
          path="/Home"
          element={
            <ProtectRoute>
              {/* <Payment /> */}
              <Home />
            </ProtectRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;

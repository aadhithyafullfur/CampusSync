import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/test")
      .then(res => setMessage(res.data.message))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Campus Resource Booking System</h1>
      <p>Frontend is running ✅</p>
      <p>Backend says: <b>{message}</b></p>
    </div>
  );
}

export default App;

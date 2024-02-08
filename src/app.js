import "./styles.css";
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import React, { useEffect, useState } from "react";

export default function App() {
  const firebaseConfig = {};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [token, setToken] = useState("");
  useEffect(() => {
    new RecaptchaVerifier("test", { size: "invisible" }, auth)
      .verify()
      .then(setToken);
  }, []);

  return (
    <div className="App">
      <div id="test"></div>
      <p>{token}</p>
    </div>
  );
}

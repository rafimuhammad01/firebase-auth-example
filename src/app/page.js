"use client"
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { initializeApp } from "firebase/app";
import React, { useEffect, useState } from "react";

export default function Home() {
  const firebaseConfig = {};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [token, setToken] = useState("");
  useEffect(() => {
    new RecaptchaVerifier(auth, "test", { size: "invisible" })
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

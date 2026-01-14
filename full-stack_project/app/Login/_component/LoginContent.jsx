'use client'
import React, { useEffect, useState } from "react";
import "./Login.css";

const LoginContent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    animateText();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      setError("⚠️ يجب ملء جميع الحقول!");
    } else {
      setError("");
      alert("تم تسجيل الدخول بنجاح! ✅"); 
    }
  };

  return (
    <div className="box">
      <div className="login">
        <h2 className="header2" id="animated-text">LOGIN</h2>
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            className="InnerInput"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="InnerInput"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input 
            className="InnerInput" type="submit" value="Login" />
        </form>

        <div className="btnsDiv group">
          <a id="groupAnchor" href="#">Forgot Password?</a>
          <a  id="groupAnchor" href="#">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginContent;

function animateText() {
  const text = document.getElementById("animated-text");
  if (!text) return;

  let letters = text.innerText.split("");
  text.innerText = "";

  letters.forEach((letter, index) => {
    let span = document.createElement("span");
    span.className = "innerSpan" 
    span.innerText = letter;
    span.style.display = "inline-block";
    span.style.animation = `wave 1.5s infinite ease-in-out ${index * 0.1}s`;
    text.appendChild(span);
  });
}
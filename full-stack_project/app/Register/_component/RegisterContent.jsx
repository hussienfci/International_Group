import React, { useEffect, useState } from "react";
import "./Register.css";

const RegisterContent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    animateText();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      username.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setError("⚠️ يجب ملء جميع الحقول!");
    } else if (password !== confirmPassword) {
      setError("❌ كلمتا المرور غير متطابقتين!");
    } else {
      setError("");
      alert("تم التسجيل بنجاح! ✅");
    }
  };

  return (
    <div className="mainDiv box">
      <div className="login">
        <h2 className="header2" id="animated-text">REGISTER</h2>
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
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
          className="InnerInput"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input type="submit" 
          className="InnerInput" value="Register" />
        </form>

        <div className="btnsDiv group">
          <a id="groupAnchor" href="#">لديك حساب؟ تسجيل دخول</a>
        </div>
      </div>
    </div>
  );
};

export default RegisterContent;

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
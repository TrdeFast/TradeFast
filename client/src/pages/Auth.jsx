import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import logo from "../assets/logo.png";
import googleLogo from "../assets/google-logo.png";

const Auth = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Здесь можно вставить проверку логина/пароля
    navigate("/accounts");
  };

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const particlesOptions = {
    fullScreen: { enable: true, zIndex: 0 },
    background: { color: { value: "#140f3a" } },
    particles: {
      number: { value: 40 },
      size: { value: 3 },
      color: { value: ["#ff6b6b", "#feca57", "#48dbfb", "#1dd1a1"] },
      opacity: { value: 0.7 },
      move: { enable: true, speed: 1, direction: "none", outModes: "out" },
    },
  };

  return (
    <div style={styles.container}>
      <Particles init={particlesInit} options={particlesOptions} />
      <div style={styles.card}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h2 style={styles.title}>Войти в аккаунт</h2>
        <input type="email" placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Пароль" style={styles.input} />
        <button style={styles.gradientButton} onClick={handleLogin}>
          Войти
        </button>
        <p style={styles.or}>или</p>
        <button style={styles.googleButton}>
          <img
            src={googleLogo}
            alt="Google"
            style={{ width: "20px", height: "20px", objectFit: "contain", marginRight: "8px" }}
          />
          Войти через Google
        </button>
        <p style={styles.register}>
          Нет аккаунта?{" "}
          <Link to="/register" style={{ color: "#409eff" }}>
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#140f3a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 0,
  },
  card: {
    position: "relative",
    zIndex: 1,
    backgroundColor: "#0c0924",
    padding: "50px 40px",
    borderRadius: "21px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
    width: "90%",
    maxWidth: "500px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    width: "120px",
    marginBottom: "25px",
  },
  title: {
    color: "#fff",
    marginBottom: "25px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    maxWidth: "370px",
    padding: "14px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "none",
    fontSize: "14px",
    outline: "none",
  },
  gradientButton: {
    background: "linear-gradient(270deg, #ff7a18, #af002d, #ff7a18)",
    backgroundSize: "600% 600%",
    animation: "gradientFlow 4s ease infinite",
    border: "none",
    color: "#fff",
    fontWeight: "bold",
    padding: "14px",
    width: "100%",
    maxWidth: "370px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
  },
  or: {
    color: "#ccc",
    margin: "18px 0 12px",
    fontSize: "13px",
  },
  googleButton: {
    background: "#fff",
    color: "#000",
    padding: "15px",
    borderRadius: "17px",
    width: "100%",
    maxWidth: "370px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
    fontSize: "15px",
  },
  register: {
    color: "#ccc",
    marginTop: "25px",
    fontSize: "14px",
  },
};

export default Auth;

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
    // Здесь можно добавить реальную проверку логина/пароля (fetch/axios к бэкенду).
    // Пока просто перенаправляем в Личный кабинет:
    navigate("/profile");
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
            style={{
              width: "20px",
              height: "20px",
              objectFit: "contain",
              marginRight: "8px",
            }}
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
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#140f3a",
  },
  card: {
    position: "relative",
    zIndex: 1,
    width: "350px",
    padding: "40px",
    borderRadius: "10px",
    backgroundColor: "#1e1e2e",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  logo: {
    width: "100px",
    height: "100px",
    marginBottom: "20px",
    objectFit: "contain",
  },
  title: {
    fontSize: "24px",
    color: "#ffffff",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#2e2e3c",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
  },
  gradientButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "12px 0",
    marginBottom: "15px",
    borderRadius: "5px",
    background: "linear-gradient(90deg, #ff6b6b, #feca57)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
    transition: "background 0.3s ease",
  },
  or: {
    color: "#8e8ea0",
    margin: "10px 0",
  },
  googleButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "10px 0",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #fff",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "transparent",
  },
  register: {
    color: "#8e8ea0",
    fontSize: "14px",
  },
};

export default Auth;

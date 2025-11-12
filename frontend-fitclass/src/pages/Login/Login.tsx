import LoginForm from "../../components/loginForm/LoginForm";
import imgBackground from "../../assets/img/runningImage.png";
import "./index.css";

export default function Login() {
  return (
    <div className="login">
      <div className="image">
        <img src={imgBackground} alt="" />
      </div>

      <h1 className="header-title">
        <span>Treine no seu ritmo, </span>
        <span className="title-span">sem filas e sem lotação</span>
      </h1>

      <div className="login-form-container">
        <LoginForm />
      </div>

      <div className="options">
        <p className="forget-password">Esqueceu sua senha?</p>

        <p className="registerSection">
          <span>Não tem conta? </span>
          <a className="register-link" href="/register">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
}

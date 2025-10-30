import imgBackground from "../../assets/img/runningImage.png";
import RegisterForm from "../../components/registerForm/RegisterForm.tsx";
import "./register.css";

export default function Register() {
    return (
        <div className="register">
            <div className="image">
                <img src={imgBackground} alt="" />
            </div>

            <h1 className="header-title">
                <span>Treine no seu ritmo, </span>
                <span className="title-span">sem filas e sem lotação</span>
            </h1>

            <div className="register-form-container">
                <RegisterForm />
            </div>

        </div>
    )
}
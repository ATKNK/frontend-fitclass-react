import { useState } from "react";
import { saveToken } from "../../utils/api/auth";
import { apiFetch } from "../../utils/api/api";
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";
import "./LoginForm.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setError("");
      const data = await apiFetch<{ token: string }>("/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      saveToken(data.token);
      window.location.href = "/home";
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido");
      }
    }
  };

  return (
    <form className="loginForm">
      <div className="inputContainer">
        <label htmlFor="email" className="label">Email: </label>
        <Input
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />
      </div>

      <div className="inputContainer">
        <label htmlFor="password" className="label">Senha: </label>
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />
      </div>

      <div className="buttonContainer">
        <Button onClick={handleLogin} title="Entrar"/>
      </div>

      {error && <div className="error">{error}</div>}

    </form>
  );
}

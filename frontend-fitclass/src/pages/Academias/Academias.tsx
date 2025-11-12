import { useEffect } from "react";
import { isAuthenticated, removeToken } from "../../utils/api/auth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login"); 
    }
  }, [navigate]);

  const handleLogout = () => {
    removeToken();
    navigate("/login");
  };

  return (
    <div>
        <h1>Olá, Usuário!</h1>
        <p>Você está autenticado</p>
        <button onClick={handleLogout}>
            Deslogar
        </button>
    </div>
  )
}
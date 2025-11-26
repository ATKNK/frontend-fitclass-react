import { useState } from "react";
import Button from "../../components/ui/button/Button";
import InputAlt from "../../components/formInputAlt/InputAlt";
import "./Profile.css";

function Profile() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");

  return (
    <div className="profileMain">
      <div className="title">
        <p className="meu">Meu</p>
        <p className="perfil">Perfil</p>
      </div>

      <div className="buttons">
        <Button title="Editar Dados" />
        <Button title="Redefinir Senha" />
      </div>

      <form className="forms">
        <div className="inputContainerAlt">
          <label className="formLabel" htmlFor="name">
            Nome
          </label>
          <InputAlt
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
          />
        </div>

        <div className="inputContainerAlt">
          <label className="formLabel" htmlFor="birthDate">
            Data de nascimento
          </label>
          <InputAlt
            type="text"
            placeholder="DD/MM/AAAA"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            id="birthDate"
          />
        </div>

        <div className="inputContainerAlt">
          <label className="formLabel" htmlFor="email">
            Email
          </label>
          <InputAlt
            type="email"
            placeholder="seuemail@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
        </div>

        <div className="inputContainerAlt">
          <label className="formLabel" htmlFor="cep">
            CEP
          </label>
          <InputAlt
            type="text"
            placeholder="XXXXX-XXX"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            id="cep"
          />
        </div>
      </form>

      <div className="lowerButtons">
        <Button title="Fale Conosco" />
        <Button title="Excluir Conta" />
      </div>
    </div>
  );
}

export default Profile;

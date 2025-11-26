import { useState } from "react";
import InputAlt from "../../../components/formInputAlt/InputAlt";
import "./CreateClass.css";
import Button from "../../../components/ui/button/Button";

export default function CreateClass() {
  const [academia, setAcademia] = useState("");
  const [category, setCategory] = useState("");
  const [vacancy, setVacancy] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  // const [error, setError] = useState("");

  // const handleCreateClass = () => {
  //   if (!academia || !category || !vacancy || !start || !end) {
  //     alert("Preencha todos os campos.");
  //     return;
  //   }

  //   try {
  //     setError("");
  //     await apiFetch("/classes", {
  //       method: "POST",
  //       body: JSON.stringify({
          
  //       }),
  //     });

  //     window.location.href = "/classes";
  //   } catch (error: unknown) {
  //     if (error instanceof Error) {
  //       setError(error.message);
  //     } else {
  //       setError("Erro desconhecido!");
  //     }
  //   }
  // };

  return (
    <div className="createClassMain">
      <div className="createTitle">
        <p className="criar">Criar</p>
        <p className="aula">Aula</p>
      </div>

      <form action="" className="createForm">
        {/* Fazer um select pro personal poder selecionar apenas as academias em que ele trabalha */}
        <div className="createContainer">
          <label className="createLabel" htmlFor="gym">
            Academias
          </label>
          <InputAlt
            type="text"
            placeholder="Selecione a academia"
            value={academia}
            onChange={(e) => setAcademia(e.target.value)}
            id="gym"
          />
        </div>

        <div className="createContainer">
          <label className="createLabel" htmlFor="category">
            Categoria
          </label>
          <InputAlt
            type="text"
            placeholder="Categoria da aula"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="category"
          />
        </div>

        <div className="createContainer">
          <label htmlFor="vacancy">Limite de pessoas</label>
          <InputAlt
            type="text"
            placeholder="- 30 + "
            value={vacancy}
            onChange={(e) => setVacancy(e.target.value)}
            id="vacancy"
          />
        </div>

        <div className="createContainer">
          <label htmlFor="start">Hora Inicio</label>
          <InputAlt
            type="text"
            placeholder="00:00"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            id="start"
          />
        </div>

        <div className="createContainer">
          <label htmlFor="end">Hora Inicio</label>
          <InputAlt
            type="text"
            placeholder="00:00"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            id="end"
          />
        </div>

        <Button title="Criar Aula" />
      </form>
    </div>
  );
}

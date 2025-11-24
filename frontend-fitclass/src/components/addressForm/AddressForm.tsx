import "./AddressForm.css"
import { useState } from "react";
import { apiFetch } from "../../utils/api/api";
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";

export default function AddressForm() {
  const [cep, setCep] = useState("");
  const [number, setNumber] = useState("");
  const [street, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [town, setTown] = useState("");
  const [province, setProvince] = useState("");
  const [error, setError] = useState("");

  const handleAddressSubmit = async () => {
    if (!cep || !number || !street || !neighborhood || !town || !province) {
      alert("Preencha todos os campos.");
      return;
    }

    try {
      setError("");
      await apiFetch("/address", {
        method: "POST",
        body: JSON.stringify({
          cep,
          number,
          street,
          neighborhood,
          town,
          province,
        }),
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Erro desconhecido!");
      }
    }
  };

  return (
    <form className="addressForm">
        <div className="inputContainer">
            <label htmlFor="cep" className="label">CEP: </label>
            <Input
                type="text"
                placeholder="00000-000"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                id="cep"    
            />
        </div>

        <div className="inputContainer">
            <label htmlFor="number" className="label">Número: </label>
            <Input 
                type="text"
                placeholder="Número da residência"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                id="number"
            />
        </div>

        <div className="inputContainer">
            <label htmlFor="street" className="label">Rua: </label>
            <Input 
                type="text"
                placeholder="Insira o nome da rua"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                id="street"
            />
        </div>

        <div className="inputcontainer">
            <label htmlFor="neighborhood" className="label">Bairro: </label>
            <Input 
                type="text"
                placeholder="Insira o nome do bairro"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                id="neighborhood"
            />
        </div>

        <div className="inputContainer">
            <label htmlFor="town" className="label">Cidade: </label>
            <Input 
                type="text"
                placeholder="Insira o nome da cidade"
                value={town}
                onChange={(e) => setTown(e.target.value)}
                id="town"
            />
        </div>

        <div className="inputContainer">
            <label htmlFor="province" className="label">Estado: </label>
            <Input 
                type="text"
                placeholder="Insira a Sigla do estado (Ex: SP)"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                id="province"
            />
        </div>

        <div className="buttonContainer">
            <Button onClick={handleAddressSubmit} title="Salvar"/>
        </div>

        {error && <div className="error">{error}</div>}

    </form>
  )
}

import "./RegisterForm.css";  
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";
import { useState } from "react";
import { apiFetch } from "../../utils/api/api";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const [cep, setCep] = useState("");
    const [number, setNumber] = useState("");
    const [street, setStreet] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [town, setTown] = useState("");
    const [province, setProvince] = useState("");

    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("");

    const [error, setError] = useState("");

    const handleRegister = async () => {
        if (
            !name || !birthDate || !cpf || !email || !password || !passwordConfirmation ||
            !cep || !number || !street || !neighborhood || !town || !province ||
            !phoneNumber || !gender
        ) {
            alert("Preencha todos os campos.");
            return;
        }

        if (password !== passwordConfirmation) {
            alert("As senhas não coincidem.");
            return;
        }

        try {
            setError("");
            await apiFetch("/gym-owner", {
                method: "POST",
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    phoneNumber,
                    cpf,
                    gender,
                    birthDate,
                    street,
                    cep,
                    number,
                    neighborhood,
                    town,
                    province
                })
            });

            window.location.href = "/login";
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("Erro desconhecido!");
            }
        }
    };

    return (
        <form className="registerForm">
            <div className="inputContainer">
                <label htmlFor="name" className="label">Nome:</label>
                <Input
                    type="text"
                    placeholder="Seu Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                />
            </div>

            <div className="inputContainer">
                <label htmlFor="birthDate" className="label">Data de Nascimento:</label>
                <Input
                    type="text"
                    placeholder="DD/MM/AAAA"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    id="birthDate"
                />
            </div>

            <div className="inputContainer">
                <label htmlFor="cpf" className="label">CPF:</label>
                <Input
                    type="text"
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    id="cpf"
                />
            </div>

            <div className="inputContainer">
                <label htmlFor="email" className="label">Email:</label>
                <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                />
            </div>

            <div className="inputContainer">
                <label htmlFor="password" className="label">Senha:</label>
                <Input
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                />
            </div>

            <div className="inputContainer">
                <label htmlFor="passwordConfirmation" className="label">Confirme sua senha:</label>
                <Input
                    type="password"
                    placeholder="Confirme sua senha"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    id="passwordConfirmation"
                />
            </div>

            <div className="inputContainer">
                <label htmlFor="phoneNumber" className="label">Telefone:</label>
                <Input
                    type="text"
                    placeholder="(00) 00000-0000"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    id="phoneNumber"
                />
            </div>

            <div className="inputContainer">
                <label htmlFor="gender" className="label">Gênero:</label>
                <select
                    id="gender"
                    className="inputSelect"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="">Selecione...</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                </select>
            </div>

            <div className="inputContainer">
                <label htmlFor="cep" className="label">CEP:</label>
                <Input
                    type="text"
                    placeholder="00000-000"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    id="cep"
                />
            </div>

            <div className="inputContainer">
                <label htmlFor="number" className="label">Número:</label>
                <Input
                    type="text"
                    placeholder="Número da residência"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    id="number"
                />
            </div>

            <div className="inputContainer">
                <label htmlFor="street" className="label">Rua:</label>
                <Input
                    type="text"
                    placeholder="Insira o nome da rua"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    id="street"
                />
            </div>

            <div className="inputContainer">
                <label htmlFor="neighborhood" className="label">Bairro:</label>
                <Input
                    type="text"
                    placeholder="Insira o nome do bairro"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    id="neighborhood"
                />
            </div>

            <div className="inputContainer">
                <label htmlFor="town" className="label">Cidade:</label>
                <Input
                    type="text"
                    placeholder="Insira o nome da cidade"
                    value={town}
                    onChange={(e) => setTown(e.target.value)}
                    id="town"
                />
            </div>

            <div className="inputContainer">
                <label htmlFor="province" className="label">Estado:</label>
                <Input
                    type="text"
                    placeholder="Sigla do estado (Ex: SP)"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    id="province"
                />
            </div>

            <div className="buttonContainer">
                <Button onClick={handleRegister} title="Cadastrar" />
            </div>

            {error && <div className="error">{error}</div>}
        </form>
    );
}

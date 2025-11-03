import Button from "../../components/ui/button/Button";
import "./Profile.css";

function Profile() {
    return (<div className="profileMain">
        <div className="title">
            <p className="meu">Meu</p><p className="perfil">Perfil</p>
        </div>

        <div className="buttons">
            <Button title="Editar Dados" />
            <Button title="Redefinir Senha" />
        </div>

        <form className="forms">
            <label className="formLabel">Nome</label>
            <input className="formInput" type="text" placeholder="Seu nome"></input>

            <label className="formLabel">Data de Nascimento</label>
            <input className="formInput" type="text" placeholder="DD/MM/AAAA"></input>

            <label className="formLabel">Email</label>
            <input className="formInput" type="text" placeholder="seuemail@exemplo.com"></input>

            <label className="formLabel">CEP</label>
            <input className="formInput" type="text" placeholder="XXXXX-XXX"></input>
        </form>

        <div className="lowerButtons">
            <Button title="Fale Conosco" />
            <Button title="Excluir Conta" />
        </div>
    </div>
    );
}

export default Profile;
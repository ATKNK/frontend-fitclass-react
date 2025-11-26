import './Academias.css';
import { useEffect } from "react";
import { isAuthenticated, removeToken } from "../../utils/api/auth";
import { useNavigate } from "react-router-dom";
import Button from '../../components/ui/button/Button';
import AcademiasCard from '../../components/card/AcademiasCard';

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
    <div className='academiasMain'>
        <div className='academiasTitle'>
          <p>Encontre sua <span>Academia</span></p>
        </div>

        <form>
          <input className='academiasBuscar'type='text' placeholder='Buscar academia ou aula...'/>
        </form>
        
        <Button title='Filtros'/>

        <div className='academiasMap'>
          <img className='academiasMapImg' src="https://media.discordapp.net/attachments/1114346105426161685/1443012769312936036/image.png?ex=692785de&is=6926345e&hm=39e274cc9bcc034641c54efff5143dee2aa4ef669b19574fbefcd0995be2afd1&=&format=webp&quality=lossless"/>
        </div>
        
        <p className='academiasLabel'>Academias Próximas</p>

        <AcademiasCard title="PowerFit Academia" address='Av. Jocione Mendonça' distance="0.69 km"/>
    </div>
  )
}
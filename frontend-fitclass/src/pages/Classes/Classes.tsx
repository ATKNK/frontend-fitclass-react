import './Classes.css';
import Button from '../../components/ui/button/Button';
import Card from '../../components/card/Card';

function Classes(){
    return(
        <div className='classesMain'>
            <div className="title">
                <p className="proximas">Próximas</p><p className="aulas">Aulas</p>
            </div>

        <div className="classesButtons">
            <Button title="Todos" />
            <Button title="Manhã" />
            <Button title="Tarde"/>
            <Button title="Noite"/>
        </div>

        <div className="classesCards">
            <Card title="Karate" time="17:30" duration="60" trainer="Marcos Rodrigues" gym="Academia Teste" vacancy="10" vacancyLimit="20"/>
        </div>
        </div>
    )
}

export default Classes;
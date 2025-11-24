import Button from '../ui/button/Button';
import './Card.css';

interface CardProps{
    title: string;
    time: string;
    duration: string;
    trainer: string;
    gym: string;
    vacancy: string;
    vacancyLimit: string;
}

function Card({title, time, duration, trainer, gym, vacancy, vacancyLimit}: CardProps){
    return(
        <div className='cardMain'>

            <div className='cardTitle'>
                <p className='cardTitleName'>{title}</p>
                <div className='cardTitleTimeRelated'>
                    <p className='cardTitleTime'>{time}</p>
                    <p className='cardTitleDuration'>{duration} min</p>
                </div>
            </div>

            <div className='cardInfo'>
                <p>{trainer}</p>
                <p>{gym}</p>
                <p>{vacancy}/{vacancyLimit} vagas</p>
            </div>

            <div>
                <Button title="Reservar Vaga"/>
            </div>
        </div>
    )
}

export default Card;
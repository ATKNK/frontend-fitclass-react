import ClassesListing from '../classesListing/ClassesListing';
import Button from '../ui/button/Button';
import './Card.css';

interface CardProps {
    title: string;
    address: string;
    distance: string;
}

function AcademiasCard({ title, address, distance }: CardProps) {
    return (
        <div className='cardMain'>

            <div className='cardTitle'>
                <p className='cardTitleName'>{title}</p>
            </div>

            <div className='cardInfo'>
                <p>{address}</p>
                <p>{distance}</p>
            </div>

            <div className='cardNextClasses'>
                <p className='cardProximasAulas'>Próximas Aulas:</p>
                <ClassesListing/>
            </div>
            <Button title="Ver Academia" />
        </div>
    )
}

export default AcademiasCard;
import React from "react";
import './Reservations.css';
import Button from "../../components/ui/button/Button";
import Card from "../../components/card/Card";

function Reservations() {
    return (
        <div className="reservationsMain">

            <div className="title">
                <p className="proximas">Próximas</p><p className="aulas">Aulas</p>
            </div>

        <div className="reservationsButtons">
            <Button title="Todos" />
            <Button title="Manhã" />
            <Button title="Tarde"/>
            <Button title="Noite"/>
        </div>

        <div className="reservationsCards">
            <Card title="Karate" time="17:30" duration="60" trainer="Marcos Rodrigues" gym="Academia Teste" vacancy="10" vacancyLimit="20"/>
        </div>

        </div>
    );
}

export default Reservations;
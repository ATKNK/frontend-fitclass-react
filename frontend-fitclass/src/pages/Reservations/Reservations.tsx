import React from "react";
import './Reservations.css';
import Button from "../../components/ui/button/Button";
import Card from "../../components/card/Card";
import DateHeader from "../../components/dateHeader/DateHeader";

function Reservations() {
    return (
        <div className="reservationsMain">

        <div className="title">
            <p className="proximas">Próximas</p><p className="aulas">Aulas</p>
        </div>

        <div className="reservationsDates">
            <DateHeader date="Hoje"/>
        </div>

        <div className="reservationsCards">
            <Card title="Karate" time="17:30" duration="60" trainer="Marcos Rodrigues" gym="Academia Teste" vacancy="10" vacancyLimit="20"/>
        </div>

        <div className="reservationsDates">
            <DateHeader date="11 / 11 / 1444"/>
        </div>

        <div className="reservationsCards">
            <Card title="Karate" time="17:30" duration="60" trainer="Marcos Rodrigues" gym="Academia Teste" vacancy="10" vacancyLimit="20"/>
        </div>

        </div>
    );
}

export default Reservations;
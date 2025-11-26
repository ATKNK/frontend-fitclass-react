import React from "react";
import './Navbar.css';
import NavbarIcon from "../navbarIcon/NavbarIcon";

function Navbar() {
    return (
        <nav className='navbarMain'>
            <NavbarIcon label="Academias" imgSrc="https://upload.wikimedia.org/wikipedia/commons/f/fb/Pin-in-the-map.svg" pathTo="/gyms" />
            <NavbarIcon label="Aulas" imgSrc="https://upload.wikimedia.org/wikipedia/commons/6/67/Alarm_%28CoreUI_Icons_v1.0.0%29.svg" pathTo="/classes" />
            <NavbarIcon label="Reservas" imgSrc="https://upload.wikimedia.org/wikipedia/commons/9/98/Check_font_awesome.svg" pathTo="/reservations" />
            <NavbarIcon label="Perfil" imgSrc="https://upload.wikimedia.org/wikipedia/commons/4/45/Person_icon_%28the_Noun_Project_2817719%29.svg" pathTo="/profile" />
            <NavbarIcon label="Gerenciar" imgSrc="https://upload.wikimedia.org/wikipedia/commons/9/92/Cog_font_awesome.svg" pathTo="/manage"/>
        </nav>
    )
}

export default Navbar;
import './NavbarIcon.css';

function NavbarIcon({pathTo, imgSrc, label}:{pathTo: string, imgSrc: string, label:string}) {
    return (
        <a href={pathTo} className='navbarIcon'>
            <img className='icon' src={imgSrc} />
            <p className='label'>{label}</p>
        </a>
    )
}

export default NavbarIcon;
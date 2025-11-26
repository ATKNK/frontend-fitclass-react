import './DateHeader.css';

function DateHeader(props: {date: string}){
    return(
        <div className="dateHeaderMain">
            <p>{props.date}</p>
        </div>
    )
}

export default DateHeader;
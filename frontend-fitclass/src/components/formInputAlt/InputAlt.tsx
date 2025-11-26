import "./InputAlt.css"

interface Props {
    type: string;
    placeholder: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id?: string;
}

export default function InputAlt({type, placeholder, value, onChange, id}: Props) {
    return (
        <div className="inputAltMain">
            <input 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                id={id}
            />
        </div>
    )
}
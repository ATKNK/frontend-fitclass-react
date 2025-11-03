import './Input.css'
interface Props {
  type: string;
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
}

function Input({ type, placeholder, value, onChange, id }: Props) {
  return <input type={type} 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                id={id} 
                className="input" 
                />;
}
export default Input;

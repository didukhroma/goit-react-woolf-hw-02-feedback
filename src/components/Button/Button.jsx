import { capitalize } from 'helpers/capitalize';

function Button({ text, cbOnClick }) {
  const title = capitalize(text);

  const handleClick = () => {
    cbOnClick(text);
  };

  return <button onClick={handleClick}>{title}</button>;
}

export default Button;

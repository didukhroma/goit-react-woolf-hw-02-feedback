import { capitalize } from 'helpers/capitalize';
import { StyledButton } from './Button.styled';

function Button({ text, cbOnClick }) {
  const title = capitalize(text);

  const handleClick = () => {
    cbOnClick(text);
  };

  return <StyledButton onClick={handleClick}>{title}</StyledButton>;
}

export default Button;

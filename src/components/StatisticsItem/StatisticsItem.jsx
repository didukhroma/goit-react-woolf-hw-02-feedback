import { capitalize } from 'helpers/capitalize';
import { StyledLi, StyledItem } from './StatisticsItem.styled';

function StatisticsItem({ name, value, symbol }) {
  const title = capitalize(name);
  return (
    <StyledLi>
      <p>
        <StyledItem>{`${title}:`}</StyledItem>
        <span>{value}</span>
        {symbol}
      </p>
    </StyledLi>
  );
}

export default StatisticsItem;

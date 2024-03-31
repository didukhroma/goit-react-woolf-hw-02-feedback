import { capitalize } from 'helpers/capitalize';

function StatisticsItem({ name, value, symbol }) {
  const title = capitalize(name);
  return (
    <li>
      <p>
        <span>{title}</span>:<span>{value}</span>
        {symbol && symbol}
      </p>
    </li>
  );
}

export default StatisticsItem;

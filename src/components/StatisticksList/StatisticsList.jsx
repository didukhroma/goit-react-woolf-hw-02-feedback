import StatisticsItem from 'components/StatisticsItem';

function StatisticsList(props) {
  const keys = Object.keys(props);
  const text = 'positive feedback';
  const symbol = <span>&#37;</span>;
  return (
    <ul>
      {keys.map((el, idx, arr) => (
        <StatisticsItem
          key={el}
          name={arr.length - 1 !== idx ? el : text}
          value={props[el]}
          symbol={arr.length - 1 === idx && symbol}
        />
      ))}
    </ul>
  );
}

export default StatisticsList;

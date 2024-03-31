import Notification from 'components/Notification';
import StatisticsList from 'components/StatisticksList';

function Statistics(props) {
  return (
    <>
      {!props.total ? (
        <Notification message="There is no feedback" />
      ) : (
        <StatisticsList {...props} />
      )}
    </>
  );
}

export default Statistics;

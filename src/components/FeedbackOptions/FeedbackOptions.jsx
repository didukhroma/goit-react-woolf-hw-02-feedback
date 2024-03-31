import Button from 'components/Button';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const keys = Object.keys(options);
  return (
    <div>
      {keys.map(el => (
        <Button key={el} text={el} cbOnClick={onLeaveFeedback} />
      ))}
    </div>
  );
}

export default FeedbackOptions;

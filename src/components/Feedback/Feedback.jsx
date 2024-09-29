const Feedback = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback ? (
        <button onClick={() => resetFeedback()}>Reset</button>
      ) : null}
    </div>
  );
};

export default Feedback;

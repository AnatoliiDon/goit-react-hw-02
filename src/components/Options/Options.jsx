import styles from './Options.module.css';

const Options = ({ reviews, totalFeedback, positive }) => {
  return (
    <ul className={styles.container}>
      <li>Good: {reviews.good}</li>
      <li>Neutral: {reviews.neutral}</li>
      <li>Bad: {reviews.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positive}%</li>
    </ul>
  );
};

export default Options;

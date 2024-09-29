import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

function App() {
  const [reviews, setReviews] = useState(() => {
    const val = localStorage.getItem('reviews');
    const parsedVal = JSON.parse(val) ?? 0;
    return parsedVal
      ? JSON.parse(val)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positive = Math.round((reviews.good / totalFeedback) * 100);
  const updateFeedback = feedbackType => {
    setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setReviews({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    const stringifiedValue = JSON.stringify(reviews);
    localStorage.setItem('reviews', stringifiedValue);
  }, [reviews]);

  return (
    <div className="mainContainer">
      <Description />
      <Feedback
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback ? (
        <Options
          reviews={reviews}
          totalFeedback={totalFeedback}
          positive={positive}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;

import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

const Score = ({ text, result, percent }) => {
  return (
    <div>
      {text} {result} {percent}
    </div>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const allVotes = good + neutral + bad;

  if (allVotes) {
    return (
      <div>
        <h2>statisctics</h2>
        <Score text="good" result={good} />
        <Score text="neutral" result={neutral} />
        <Score text="bad" result={bad} />
        <Score text='all' result={allVotes} />
        <Score text='average' result={(good - bad) / allVotes} />
        <Score text='positive' result={(good / allVotes) * 100} percent='%' />
      </div>
    )
  } else {
    return (
      <>
        <h2>statisctics</h2>
        <div>no feedback has been given</div>
      </>
    )
  }

}
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>)
}
export default App;

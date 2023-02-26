import { useState } from "react";


const StatisticLine = ({ stat, text, percent }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{stat}{percent}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  if (all) {
    return (
      <table>
        <tbody>
          <StatisticLine stat={good} text='good' />
          <StatisticLine stat={neutral} text='neutral' />
          <StatisticLine stat={bad} text='bad' />
          <StatisticLine stat={all} text='all' />
          <StatisticLine stat={average} text='average' />
          <StatisticLine stat={positive} text='positive' percent='%' />
        </tbody>
      </table>
    );
  } else {
    return <p>no feedback has been given</p>;
  }
};


const Button = ({ clickHandler, text }) => {
  return <button onClick={clickHandler}>{text}</button>
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <h1>give feedback</h1>
      <Button clickHandler={handleGood} text='good' />
      <Button clickHandler={handleNeutral} text='neutral' />
      <Button clickHandler={handleBad} text='bad' />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;

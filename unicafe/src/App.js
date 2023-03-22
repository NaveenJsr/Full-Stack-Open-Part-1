import { useState } from 'react';
import Button from './Button';
import StatisticLine from './StatisticLine';

const App = () =>
{
  const [ good, setGood ] = useState( 0 );
  const [ neutral, setNeutral ] = useState( 0 );
  const [ bad, setBad ] = useState( 0 );

  const handleGoodClick = () => setGood( good + 1 );
  const handleNeutralClick = () => setNeutral( neutral + 1 );
  const handleBadClick = () => setBad( bad + 1 );

  const total = good + neutral + bad;
  const average = ( good - bad ) / total || 0; // avoid division by zero
  const positivePercentage = ( good / total ) * 100 || 0; // avoid NaN

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={ handleGoodClick } text="good" />
      <Button onClick={ handleNeutralClick } text="neutral" />
      <Button onClick={ handleBadClick } text="bad" />
      <h2>statistics</h2>
      { total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <StatisticLine text="good" value={ good } />
          <StatisticLine text="neutral" value={ neutral } />
          <StatisticLine text="bad" value={ bad } />
          <StatisticLine text="all" value={ total } />
          <StatisticLine text="average" value={ average } />
          <StatisticLine
            text="positive"
            value={ `${ positivePercentage }%` }
          />
        </div>
      ) }
    </div>
  );
};

export default App;

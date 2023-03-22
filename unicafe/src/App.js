import { useState } from 'react';
import Button from './Button';
import Statistics from './Statistics';

const App = () =>
{
  const [ good, setGood ] = useState( 0 );
  const [ neutral, setNeutral ] = useState( 0 );
  const [ bad, setBad ] = useState( 0 );

  const all = good + neutral + bad;
  const average = ( good - bad ) / all || 0;
  const positive = ( good / all ) * 100 || 0;

  const handleGoodClick = () => setGood( good + 1 );
  const handleNeutralClick = () => setNeutral( neutral + 1 );
  const handleBadClick = () => setBad( bad + 1 );

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={ handleGoodClick } text="good" />
      <Button onClick={ handleNeutralClick } text="neutral" />
      <Button onClick={ handleBadClick } text="bad" />

      <h1>statistics</h1>
      <Statistics
        good={ good }
        neutral={ neutral }
        bad={ bad }
        all={ all }
        average={ average }
        positive={ positive }
      />
    </div>
  );
};


export default App;

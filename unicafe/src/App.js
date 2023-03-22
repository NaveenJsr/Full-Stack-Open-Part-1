import { useState } from 'react'

const Statistics = ( { good, neutral, bad } ) =>
{
  const total = good + neutral + bad
  const average = ( good - bad ) / total || 0 // avoid division by zero
  const positivePercentage = ( good / total ) * 100 || 0 // avoid NaN

  if ( total === 0 )
  {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Statistics</h2>
      <p>good { good }</p>
      <p>neutral { neutral }</p>
      <p>bad { bad }</p>
      <p>all { total }</p>
      <p>average { average }</p>
      <p>positive { positivePercentage }%</p>
    </div>
  )
}


const App = () =>
{
  // save clicks of each button to its own state
  const [ good, setGood ] = useState( 0 )
  const [ neutral, setNeutral ] = useState( 0 )
  const [ bad, setBad ] = useState( 0 )

  const handleGoodClick = () =>
  {
    setGood( good + 1 )
  }

  const handleNeutralClick = () =>
  {
    setNeutral( neutral + 1 )
  }

  const handleBadClick = () =>
  {
    setBad( bad + 1 )
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={ handleGoodClick }>good</button>
      <button onClick={ handleNeutralClick }>neutral</button>
      <button onClick={ handleBadClick }>bad</button>
      <Statistics good={ good } neutral={ neutral } bad={ bad } />
    </div>
  )
}

export default App

import React from 'react';

const Header = ( { course } ) =>
{
  return (
    <h1>{ course }</h1>
  )
}



const Part = ( { name, exercises } ) =>
{
  return (
    <p>{ name } { exercises }</p>
  )
}



const Content = ( { parts } ) =>
{
  return (
    <div>
      { parts.map( part =>
        <Part key={ part.name } name={ part.name } exercises={ part.exercises } />
      ) }
    </div>
  )
}


const Total = ( { parts } ) =>
{
  const total = parts.reduce( ( sum, part ) => sum + part.exercises, 0 )

  return (
    <p>Number of exercises { total }</p>
  )
}


const App = () =>
{
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={ course.name } />
      <Content parts={ course.parts } />
      <Total parts={ course.parts } />
    </div>
  )
}




export default App;

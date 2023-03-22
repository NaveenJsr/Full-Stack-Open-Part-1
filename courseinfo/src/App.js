import React from 'react';

const Header = ( { course } ) =>
{
  return (
    <h1>{ course }</h1>
  );
};

const Part = ( { part, exercises } ) =>
{
  return (
    <p>
      { part } { exercises }
    </p>
  );
};

const Content = ( { parts } ) =>
{
  return (
    <div>
      { parts.map( ( part, index ) => (
        <Part key={ index } part={ part.name } exercises={ part.exercises } />
      ) ) }
    </div>
  );
};

const Total = ( { parts } ) =>
{
  const total = parts.reduce( ( acc, part ) => acc + part.exercises, 0 );

  return (
    <p>
      <strong>Number of exercises { total }</strong>
    </p>
  );
};

const App = () =>
{
  const course = 'Half Stack application development';

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={ course } />
      <Content parts={ parts } />
      <Total parts={ parts } />
    </div>
  );
};

export default App;

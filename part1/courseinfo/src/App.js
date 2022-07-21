import React from 'react'

const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ name, exercises }) => {
  
  return <p>{name} {exercises}</p>
}

const Content = ({ parts }) => {

  return (
    <React.Fragment>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </React.Fragment>
  )
}

const Total = ({ parts }) => {

  let sum = 0;

  parts.forEach(element => {
    sum += element.exercises;
  })

  return <p>Number of exercises {sum}</p>
}

const App = () => {

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
    <React.Fragment>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </React.Fragment>
  )
}

export default App
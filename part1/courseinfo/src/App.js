import React from 'react'

const Header = ({ course }) => <h1>{course}</h1>

const Content = (props) => {
  return <React.Fragment>
    <p>
      {props.part1} {props.exercises1}
    </p>
    <p>
      {props.part2} {props.exercises2}
    </p>
    <p>
      {props.part3} {props.exercises3}
    </p>
  </React.Fragment>
}

const Total = ({ totalexercises }) => <p>Number of exercises {totalexercises}</p>

const App = () => {
  const course = 'Hey you'
  const part1 = 'Fundamentals of React'
  const exercises1 = 100
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}
        exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total totalexercises={exercises1 + exercises2+ exercises3}/>
    </div>
  )
}

export default App
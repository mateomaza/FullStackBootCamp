import { useState } from 'react'
import React from 'react'

const Button = ({ setState, state, use }) => <button onClick={() => setState(state + 1)}>{use}</button>

const StatisticLine = ({ text, value }) => {
  return (
    <React.Fragment>
      <td>{text}</td><td>{value}</td>
    </React.Fragment>
  )
}

const Statistic = ({ good, neutral, bad }) => {

  const all = good + neutral + bad
  let score = (good * 1 + neutral * 0 + bad * -1) / all
  if (score < 0) { score = 0 }
  let positive = (good * 100 / all) + '%'
  return (
    <React.Fragment>
      <h2>statistics</h2>
      <table>
        <tbody>
          <tr><StatisticLine text='good' value={good} /></tr>
          <tr><StatisticLine text='neutral' value={neutral} /></tr>
          <tr><StatisticLine text='bad' value={bad} /></tr>
          <tr><StatisticLine text='all' value={all} /></tr>
          <tr><StatisticLine text='score' value={score} /></tr>
          <tr><StatisticLine text='positive' value={positive} /></tr>
        </tbody>
      </table>
    </React.Fragment>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <React.Fragment>
      <h2>give feedback</h2>
      <Button setState={setGood} state={good} use='good' />
      <Button setState={setNeutral} state={neutral} use='neutral' />
      <Button setState={setBad} state={bad} use='bad' />
      {good || neutral || bad ? (
        <Statistic good={good} neutral={neutral} bad={bad} />) : (
        <p>No feedback given</p>)}
    </React.Fragment>
  )
}

export default App
import { useState } from 'react'
import React from 'react'

const firstIndex = Math.floor(Math.random() * 7)

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(firstIndex)

  // We use this statement so the newIndex is always different than the previous one, avoiding issues
  let newIndex
  do {
    newIndex = Math.floor(Math.random() * 7)
  } while (newIndex === selected)

  // We could use: Uint8Array
  const n = 7  // arbitrary length
  const currentVotes = Array(n).fill(0)

  const [votes, setVotes] = useState(currentVotes)

  const addVote = (index) => {
    const vote = votes[index] + 1
    setVotes([
      ...votes.slice(0, index),
      vote,
      ...votes.slice(index + 1, n)
    ])
  }

  const mostVotes = Math.max(...votes);
  const mvIndex = votes.indexOf(mostVotes)

  console.log(newIndex)
  console.log(anecdotes[selected])

  return (
    <React.Fragment>
      <h1>Anecdote of the day</h1>
      <h4>{anecdotes[selected]}</h4>
      <p>has {votes[selected]} votes</p>
      <button type="button" onClick={() => addVote(selected)}>vote</button>
      <button type="button" onClick={() => setSelected(newIndex)}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>The anecdote with most votes is: <mark>{anecdotes[mvIndex]}</mark></p>
      <p>With "{mostVotes}" votes</p>
    </React.Fragment>
  )
}

export default App
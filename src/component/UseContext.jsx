import React from 'react'
import { counterContext } from '../context/counterContext'
import { useContext } from 'react'

function UseContext() {
 const {count} = useContext(counterContext)
  return (
    <div>{count} inside context</div>
  )
}

export default UseContext
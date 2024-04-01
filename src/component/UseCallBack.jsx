import React, {useState} from 'react'
import Header from './Header'
import { useCallback } from 'react'
import { counterContext } from '../context/counterContext'
import { useContext } from 'react'

/**
 * 
 * since function is identify as a differnt when it calls more and passes to the component
 * it causes to call the function again and again when it passes as prop
 * instead the component is wrap with memo() 
 * to resolve above problem we need to wrap the function into callback so that
 * it will inform that the function send is same so no coponent rerender takes place
 */

function UseCallBack() {
  const {setCount: setcounter} = useContext(counterContext)
    const [count,  setCount] = useState(0)
    const increaseCount = useCallback(() => {
        console.log(count);
        setCount((prev) => prev+1)
        setcounter((prev) => prev+1)
    }, [])
  return (
    <div>
        <Header setCount ={increaseCount} />
       <h1>{count}</h1>
    </div>
  )
}

export default UseCallBack
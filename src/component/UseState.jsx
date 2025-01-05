import React, {useState} from 'react'

/**
 * 
 * useState hook
 * usestate update the value asyncronously, if we want synchronous behavior we should update it via callback
 */

function UseState() {

    const [count, setCount] = useState(0)

  return (
    <div>
   <button onClick={()=> setCount(count+1)}>+</button>
   {count}
   <button  onClick={()=> setCount(count-1)}>-</button>
    </div>
  )
}

export default UseState
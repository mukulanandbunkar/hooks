import React from 'react'
import { memo } from 'react';


function Header(props) {
    const {setCount} = props;
    console.log('header is rendering');
  return (
    <div><button onClick={()=> setCount()}>increment</button></div>
  )
}

export default memo(Header)
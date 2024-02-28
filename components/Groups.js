import React, { useContext } from 'react'
import { Button } from 'react-native'
import { useCounter } from '../context';

const Groups = ( ) => {
  const data = useCounter();
  return (
    <>
             <Button onPress={()=>data.setState(data.state+1)} title="increment by 1"  />
            <Button  onPress={()=>data.setState(data.state-1)}   title="decrease by 1"  />
            <Button  onPress={()=>data.setState(data.state+5)}  title="incease by 5"  />
    </>
  )
}

export default Groups
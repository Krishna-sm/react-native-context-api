import { View, Text } from 'react-native'
import React  from 'react'
import {  useCounter } from '../context'

const Sqr = ( ) => {

  const data = useCounter();

  return (
    <View>
      <Text style={{fontSize:20}}>{data.state} </Text>
    </View>
  )
}

export default Sqr
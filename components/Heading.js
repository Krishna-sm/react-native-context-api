import { View, Text } from 'react-native'
import React from 'react'
import Sqr from './Sqr'

const Heading = ({state}) => {
  return (
    <View>
      {/* <Text style={{fontSize:88}}>{state}</Text> */}
      <Sqr state={state} />
    </View>
  )
}

export default Heading
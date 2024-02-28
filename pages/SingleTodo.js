import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTodoContext } from '../context/Todo.context';

const SingleTodo = ({route}) => {
  const { getTodoById} = useTodoContext()

  const [loading,setLoading] = useState(true);
  const [todo,setTodo] = useState({})
    const fetchtodo = ()=>{
          const response = getTodoById(route.params.id)
          setTodo(response)
    } 
     useEffect(()=>{
        try {
          fetchtodo()
        } catch (error) {
              console.log("error something occoured");
        }finally{
          
          setLoading(false)
        }

  },[])

  if(loading){
    return <ActivityIndicator size={'large'} />
  }
 
  return (
    <SafeAreaView style={{padding:20}}>
      <Text style={{fontSize:38}}>{todo.title}</Text>
      <Text style={{fontSize:20}}>{todo.desc}</Text>
    </SafeAreaView>
  )
}

export default SingleTodo

import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'
import { Link } from '@react-navigation/native'
import { useTodoContext } from '../context/Todo.context'

const AddTodo = () => {


    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');
    const {AddTodoContext} = useTodoContext()

    const AddTodoHandler=()=>{
        if(!title|| !desc){
                // Alert.alert('Error','All Field are required')
                Toast.show({
                    type:'error',
                    text1:'All Fields are required'
                })
                return
        }

        AddTodoContext(title,desc)
        setTitle('')
        setDesc('')
    }


  return (
    <SafeAreaView style={style.View}>
        <Text style={{fontSize:45}}>Add Todo</Text>
        <View style={style.InputGroup}>
            <Text style={style.Lable}>
                        Enter Title
            </Text>
            <TextInput value={title}  placeholder='Enter title' onChangeText={setTitle} style={style.input} />
        </View>
        <View style={style.InputGroup}>
            <Text style={style.Lable}>
                        Enter Description
            </Text>
            <TextInput value={desc}  placeholder='Enter Description' numberOfLines={8} onChangeText={setDesc} style={style.input} />
        </View>
        <Button onPress={AddTodoHandler} title='Add Todo' color={'black'}  />   

        <View style={{display:'flex',justifyContent:'flex-end',width:'100%',alignItems:'flex-end',paddingVertical:20}}>
            <Link to={{screen:'AllTodo'}}>
                    <Text> Visit All Todos</Text>
            </Link>
        </View>
       
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    View:{
        paddingHorizontal:20,
        paddingVertical:30,
    },
    InputGroup:{
        padding:5,
        display:'flex',
        gap:10
    },
    Lable:{
        fontSize:10
    },
    input:{
        width:'100%',
        borderWidth:1,
        paddingHorizontal:10,
        paddingVertical:9,
        borderRadius:10
    }
})

export default AddTodo
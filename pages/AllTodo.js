import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/AntDesign'
import { useTodoContext } from '../context/Todo.context'
import { Link } from '@react-navigation/native'


const Card = ({data})=>{ 
  const {RemoveTodo} = useTodoContext()
 
  return <> 
       
      <Link to={{screen:'SingleTodo',params:{
          id:data.id
        }}} onPress={()=>console.log("dasda")} style={style.card}  >
              <View style={style.body}>
              <Text style={style.heading}>{data.title}</Text>
          <Text style={style.desc}>{data.desc}</Text>
              </View>
              <View style={style.footer}>
              <Icon onPress={()=>RemoveTodo(data.id)} style={style.icon} name='delete' />
              </View>
        </Link> 
  </>
}

const AllTodo = () => {

  const {todos} = useTodoContext()

  return (
    <SafeAreaView>
<Text style={{fontSize:45}}>All Todo</Text>

        
            <FlatList showsVerticalScrollIndicator={false} data={todos} keyExtractor={(item,index)=>index}
                renderItem={({item,index})=>{
                return <Card key={item?.id} data={item} />
                }}
              />


    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  card:{
    marginVertical:10,
    width:"100%",
    borderWidth:1,
    paddingVertical:10,
    paddingHorizontal:50,
    display:"flex",
    flexDirection:'row',
    justifyContent:'space-between'
  },
  body:{
    display:'flex'
  },
  icon:{
    fontSize:40
  },
  heading:{
    fontSize:20
  }

})

export default AllTodo
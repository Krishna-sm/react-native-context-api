
import {createContext, useContext, useState} from 'react'
import Toast from 'react-native-toast-message';

  const TodoContext = createContext();

export const useTodoContext=()=>{
    return useContext(TodoContext)
}

export const TodoContextProvider = ({children})=>{

    const [todos,setTodos] = useState([])

    const AddTodoContext = (title,desc)=>{
        const item = {
            id:new Date().getTime(),
            title,
            desc,
            isComplete:false
        }
        setTodos([...todos,item])
        Toast.show({
            type:'success',
            text1:'Todo Added'
        })
    }

    const RemoveTodo = (id)=>{ 
                const new_todo = todos.filter((cur)=>cur.id!==id);
                setTodos(new_todo)
                Toast.show({
                    type:'success',
                    text1:'Todo Deleted'
                })
    }

    
    const getTodoById = (id)=>{
        const new_todo = todos.find((cur)=>cur.id===id); 
        return new_todo
       
}


    const value = {AddTodoContext,todos,RemoveTodo,getTodoById }
    

        return <TodoContext.Provider value={value} >
                    {children}
        </TodoContext.Provider>
}

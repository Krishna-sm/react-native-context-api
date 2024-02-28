
import {createContext, useContext, useState} from 'react'

  const CounterContext = createContext();

export const useCounter=()=>{
    return useContext(CounterContext)
}

export const CounterProvider = ({children})=>{

    const [state,setState] = useState(0)
    const value = {state,setState}
    

        return <CounterContext.Provider value={value} >
                    {children}
        </CounterContext.Provider>
}

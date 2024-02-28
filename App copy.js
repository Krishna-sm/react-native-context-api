import { SafeAreaView } from "react-native-safe-area-context";
 
import { useState } from "react";
import Heading from "./components/Heading";
import Groups from "./components/Groups";
import { CounterProvider } from "./context";
export default function App(){


     


  return <>
      <CounterProvider>
  <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
            {/* <Text style={{fontSize:88}}>{state}</Text> */}
        <Heading  />
           <Groups   />

  </SafeAreaView>
  </CounterProvider>
  
  </>
}
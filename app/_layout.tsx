
import { SplashScreen, Stack } from "expo-router";
import {UserDetailContext} from './../context/UserDetailContext'
import { useState } from "react";
import { useEffect } from "react";
import { useFonts } from "expo-font";



export default function RootLayout() {

  useFonts({
    'outfit': require("./../assets/fonts/Outfit-Regular.ttf"),
    'outfit-bold': require("./../assets/fonts/Outfit-Bold.ttf"),
    'nico': require("./../assets/fonts/NicoMoji-Regular.ttf"),
    'poppins-b': require("./../assets/fonts/Poppins-Bold.ttf"),
    'poppins-r': require("./../assets/fonts/Poppins-Regular.ttf"),

  })


  const [userDetail, setUserDetail] = useState()
  





  return( 
  <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
   <Stack screenOptions={{
    headerShown : false
  }}>
    
  </Stack>
  </UserDetailContext.Provider>
  
  )
}

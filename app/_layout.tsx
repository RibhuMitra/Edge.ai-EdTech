import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import {UserDetailContext} from './../context/UserDetailContext'
import { useState } from "react";

export default function RootLayout() {

  useFonts({
    'outfit': require("./../assets/fonts/Outfit-Regular.ttf"),
    'outfit-bold': require("./../assets/fonts/Outfit-Bold.ttf"),
    'nico': require("./../assets/fonts/NicoMoji-Regular.ttf"),
    'poppins-b': require("./../assets/fonts/Poppins-Bold.ttf"),
    'poppins-r': require("./../assets/fonts/Poppins-Regular.ttf"),

  })





  return( 
    
   <Stack screenOptions={{
    headerShown : false
  }}>
    
  </Stack>
  
  )
}

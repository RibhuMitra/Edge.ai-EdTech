import { View, Text, Platform } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import NoCourse from '../../components/Home/NoCourse'

export default function Home() {
  return (
    <View style={{
        padding: 25,
        paddingTop: Platform.OS == 'ios' && 45,
        flex: 1,
        backgroundColor: 'white'
    }}>
        
      <Header />
      <NoCourse />
    </View>
  )
}
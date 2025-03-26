import { View, Text, Image } from 'react-native'
import React from 'react'
import Button from '../Shared/Button'
import { useRouter } from 'expo-router'

export default function NoCourse() {
    const router = useRouter();
  return (
    <View style ={{
        marginTop: 40,
        display: 'flex',
        alignItems: 'center'

    }}>
      <Image source={require('./../../assets/images/book.png')} style={{
        height: 200,
        width: 200
      }}/>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 20,
        color : '#585858',
        textAlign: 'center'
      }} >Don't have any courses yet?</Text>

     <Button text={'+ Create a New One'} onPress={()=> router.push('/addCourse')}/>
     <Button text={'Explore existing courses'} type='outline'/>
    </View>
  )
}
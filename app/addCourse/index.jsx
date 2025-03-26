import { View, Text } from 'react-native'
import React from 'react'

export default function AddCourse() {
  return (
    <View
        style={{
          padding: 25,
          flex: 1,
          backgroundColor: 'white'
        }}
    >
      <Text style ={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
      }}>Create New Course
      </Text>
      <Text style ={{
        fontFamily: 'outfit',
        fontSize: 25,
      }}>What you want to learn today?
      </Text>
      <Text style ={{
        fontFamily: 'outfit',
        
      }}>What course you want to create (ex. Learn Python, React, Springboot, DSA, etc...)
      </Text>
    </View>
  )
}
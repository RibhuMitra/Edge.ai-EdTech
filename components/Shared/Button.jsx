import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({text, type="fill", onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={{
        padding: 10,
        width:'90%',
        borderRadius: 25,
        marginTop: 15,
        borderWidth : 1.5,
        borderColor : type=='fill'? 'black':'grey',
        backgroundColor: type=='fill'? 'black':'white'


    }}>
        <Text style={{
            textAlign:'center',
            fontSize: 17,
            color: type=='fill'? 'white':'black'

        }}>{text}</Text>
    </TouchableOpacity>
  )
}
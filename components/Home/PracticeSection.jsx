import { View, Text, FlatList, Image } from 'react-native'
import React, { Component } from 'react';
import { PracticeOption } from '../../constant/Option'


export default function PracticeSection() {
  return (
    <View>
      <Text style={{
        fontFamily : 'outfit-bold',
        fontSize : 20,
      }}>Practice Section</Text>

      <View>
        <FlatList 
            data = {PracticeOption}
            renderItem={({ item, index }) => (
                <View key ={index}>
                    <Image source={item?.image} style= {{
                        width : 200,
                        height: 200,
                        maxHeight: 160,
                        borderRadius: 15
                    }}
                    />

                </View>
            )}

        />
      </View>





    </View>
  )
}
import { View, Text, Image} from 'react-native'
import React from 'react'
import backgroundbg from '../../assets/images/banner4.png'
import { imageAssets } from '../../constant/Option'
import Octicons from '@expo/vector-icons/Octicons';
import Button from '../Shared/Button';

export default function Intro({ course }) {
  return (
    <View >
      

      <View style={{
        padding: 20,
      }}>
        <Text style={{
            fontFamily: 'outfit-bold',
            fontSize: 23,
            color : '#585858'
        }}>{course?.courseTitle} </Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap : 8,
                    alignItems: 'center',
                    marginLeft: 2,
                    marginTop : 5
                }}>
                    <Octicons name="book" size={20} color="black" />
                    <Text style = {{
                    fontFamily : 'outfit',
                    fontSize: 18
                    }}>
                 {course?.chapters?.length}  Chapters</Text>
               
                </View>
            <Text style= {{
                fontFamily : 'outfit-bold',
                fontSize: 20,
                marginTop: 10,
                color: '#585858',
            }}>
                Description
            </Text>
            <Text style={{
                fontFamily: 'outfit',
                fontSize: 16,
                color: '#585858',
            }}>
                {course?.description}
            </Text>

            
            <View style={{
                alignItems: 'center',
            }}>
            <Button text={'Start Now'} 
            onPress={() => console.log('') }
            />
            </View>
      </View>
    </View>
  )
}
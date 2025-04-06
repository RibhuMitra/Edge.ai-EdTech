import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { imageAssets } from '../../constant/Option'
import Colors from '../../constant/Colors'
import * as Progress from 'react-native-progress';


export default function CourseProgress( { courseList }) {
  return (
    <View style={{
        marginTop: 15,
    }}>
      <Text style = {{
        fontSize: 20,
        fontFamily: 'outfit-bold',
        color: '#585858',
      }}>Progress</Text>

      <FlatList
        data={courseList}
        horizontal = {true}
        showsHorizontalScrollIndicator = { false }
        renderItem={({ item, index}) => (
            <View style={{
                margin : 7,
                padding : 7,
                backgroundColor: Colors.BG_GRAY,
                borderRadius: 8,
                width: 280
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 8
                }}>
                    <Image source = { imageAssets[item?.banner_image] } 
                    style= {{
                        width : 80,
                        height : 80,
                        borderRadius : 10,
                    }}
                    />

                    <View style={{
                        flex: 1
                    }}>
                        <Text 
                            numberOfLines={ 2 } 
                            style={{
                            fontFamily: 'outfit-bold',
                            fontSize: 16,
                            flexWrap: 'wrap'
                        }}>{item?.courseTitle}</Text>
                        <Text style={{
                            fontFamily: 'outfit',
                        }}>{item?.chapters?.length} Chapters</Text>

                        


                    </View>


                </View>

                <View 
                style={{
                    marginTop: 10,
                }}>
                    <Progress.Bar progress={0.3} width={265} color='#5B5B5B'/>
                    <Text style = {{
                        fontFamily: 'outfit',
                        marginTop: 5,
                        fontSize : 13


                    }}>3 Out of 5 Chapter Completed</Text>


                </View>
            </View>
        )}
      
      
      />
    </View>
  )
}
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity,  } from 'react-native'
import React from 'react'
import { imageAssets } from '../../constant/Option';
import Colors from '../../constant/Colors';
import Octicons from '@expo/vector-icons/Octicons';
import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';


export default function CourseList({ courseList }) {


  const route = useRouter();
  return (
    <View style = {{
        marginTop : 15
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize : 25,
        color: '#585858',
      }}>Courses</Text>

      <FlatList
        data={courseList}
        horizontal={true}
        showsHorizontalScrollIndicator ={false}
        renderItem={({ item, index }) => ( 
            <TouchableOpacity
             onPress={ () =>  route.push({
              pathname:'/courseView',
              params: {
                courseParams:JSON.stringify(item) 
              }
             })}  
            key={index} style = {styles.CourseContainer} >
                <Image source = {imageAssets[item.banner_image]} 
                style= {{
                    width : '100%',
                    height : 150,
                    borderRadius : 15
                }}/>
                <Text style ={{
                    fontFamily : 'outfit',
                    fontSize : 16,
                    marginTop : 10,
                    fontWeight : "700"
                }}>{item?.courseTitle}</Text>
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
                    }}>
                 {item?.chapters?.length}  Chapters</Text>
               
                </View>
            </TouchableOpacity>

    
         
        )}
      
      
      
      />


      



    </View>
  )
}


const styles = StyleSheet.create({
    CourseContainer : {
        padding : 10,
        backgroundColor : Colors.BG_GRAY,
        margin : 6,
        borderRadius : 15, 
        width : 240,
    }


})
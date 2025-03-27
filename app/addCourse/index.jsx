import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from './../../constant/Colors';
import { TextInput } from 'react-native';
import Button from '../../components/Shared/Button';
import { useState } from 'react';
import { GenerateTopicAIModel } from '../../config/AiModel';
import Prompt from '../../constant/Prompt';


export default function AddCourse() {
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState();
  const [topics, setTopics] = useState();

  const onGenerateTopic= async()=> {
    setLoading(true);
    // Get Topic Ideas from AI Model
    const PROMPT = userInput + Prompt.IDEA;
    const aiResp = await GenerateTopicAIModel.sendMessage(PROMPT)
    const topicIdea= JSON.parse(aiResp.response.text());
    console.log(topicIdea);
    setTopics(topicIdea?.course_titles);
    setLoading(false);


  }


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
        fontSize: 27,
      }}>What you want to learn today?
      </Text>
      <Text style ={{
        fontFamily: 'outfit',
        fontSize: 18,
        marginTop: 8,
        color: Colors.GRAY,
      }}>What course you want to create (ex. Learn Python, React, Springboot, Data Structures & Algorithms etc...)
      </Text>

      <TextInput 
        placeholder='{Ex. Learn Python, Learn React.js}' style={ styles.textInput }
        numberOfLines={3}
        multiline= { true }
        onChangeText={(value) => setUserInput(value)}
      
      />


      <TouchableOpacity  style={styles.Btn}>

      <Button text={'Generate Topic'} type='fill' onPress={() => onGenerateTopic()} loading={loading} />
      </TouchableOpacity>

      <View style={{
        marginTop: 15,
        
      }}>
        <Text style={{
          fontFamily: 'outfit',
          fontSize: 18,
          color : 'rgba(5, 5, 5, 0.58)'

        }}>Selet all topics which you want to add in the course</Text>

        <View>
          {topics.map((item, index) => (
            <Text>{ item }</Text>
          ))}

        </View>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  textInput: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#026257',  // Dark Green Border
    borderRadius: 15,
    height: 100,
    marginTop: 10,
    alignItems: 'flex-start',
    fontSize: 18
  },
  Btn: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

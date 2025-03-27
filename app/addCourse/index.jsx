import { View, Text, StyleSheet, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Colors from './../../constant/Colors';
import { TextInput } from 'react-native';
import Button from '../../components/Shared/Button';
import { GenerateTopicAIModel } from '../../config/AiModel';
import Prompt from '../../constant/Prompt';

export default function AddCourse() {
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState();
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopics] = useState([]);

  const onGenerateTopic = async () => {
    setLoading(true);
    const PROMPT = userInput + Prompt.IDEA;
    const aiResp = await GenerateTopicAIModel.sendMessage(PROMPT);
    const topicIdea = JSON.parse(aiResp.response.text());
    console.log(topicIdea);
    setTopics(topicIdea?.course_titles);
    setLoading(false);
  };

  const onTopicSelect = (topic) => {
    const isAlreadyExist = selectedTopic.find((item) => item == topic);
    if (!isAlreadyExist) {
      setSelectedTopics((prev) => [...prev, topic]);
    } else {
      const topics = selectedTopic.filter((item) => item !== topic);
      setSelectedTopics(topics);
    }
  };

  const isTopicSelected = (topic) => {
    return selectedTopic.includes(topic);
  };

  // Used to Generate Course Using AI Model
  const onGenerateCourse= () => {
    const PROMPT = selectedTopics + Prompt.COURSE;

  }

  return (
    <View style={{ padding: 25, flex: 1, backgroundColor: 'white' }}>
      <Text style={{ fontFamily: 'outfit-bold', fontSize: 30 }}>Create New Course</Text>
      <Text style={{ fontFamily: 'outfit', fontSize: 27 }}>What you want to learn today?</Text>
      <Text style={{ fontFamily: 'outfit', fontSize: 18, marginTop: 8, color: Colors.GRAY }}>
        What course you want to create (ex. Learn Python, React, Springboot, Data Structures & Algorithms etc...)
      </Text>

      <TextInput
        placeholder="{Ex. Learn Python, Learn React.js}"
        style={styles.textInput}
        numberOfLines={3}
        multiline={true}
        onChangeText={(value) => setUserInput(value)}
      />

      <TouchableOpacity style={styles.Btn}>
        <Button text={'Generate Topic'} type="outline" onPress={() => onGenerateTopic()} loading={loading} />
      </TouchableOpacity>

      <View style={{ marginTop: 15, marginBottom: 1 }}>
        <Text style={{ fontFamily: 'outfit', fontSize: 18, color: 'rgba(5, 5, 5, 0.58)' }}>
          Select all topics which you want to add in the course
        </Text>

        {/* Wrapped topic list inside a ScrollView */}
        <ScrollView style={{ height: 200, marginTop: 6 }} nestedScrollEnabled={true}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, padding: 1.5  }}>
            {topics.map((item, index) => (
              <Pressable key={index} onPress={() => onTopicSelect(item)}>
                <Text
                  style={{
                    padding: 7,
                    borderWidth: 0.6,
                    borderRadius: 99,
                    paddingHorizontal: 15,
                    backgroundColor: isTopicSelected(item) ? 'rgb(2, 175, 132)' : null,
                    color: isTopicSelected(item) ? 'white' : 'rgba(1, 34, 26, 0.81)',
                    borderColor: 'rgb(2, 175, 132)',
                  }}
                >
                  {item}
                </Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>

      {setSelectedTopics?.length > 0 && <TouchableOpacity style={styles.Btn}>
        <Button text={'Generate Course'} type="fill" onPress={() => onGenerateCourse()} loading={loading} />
      </TouchableOpacity>}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#026257',
    borderRadius: 15,
    height: 100,
    marginTop: 10,
    alignItems: 'flex-start',
    fontSize: 18,
  },
  Btn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { View, Text, FlatList, Image } from 'react-native'
import React from 'react';

export const PraticeOption = [
  {
    name: 'Quiz',
    image: require('./../../assets/images/quizz.png'),
    icon: require('./../../assets/images/quiz.png'),
    path: '/quiz'
  },
  {
    name: 'Flashcards',
    image: require('./../../assets/images/flashcard.png'),
    icon: require('./../../assets/images/layers.png'),
    path: '/flashcards'
  },
  {
    name: 'Question & Ans',
    image: require('./../../assets/images/notes.png'),
    icon: require('./../../assets/images/qa.png'),
    path: '/questionAnswer'
  }
];

export default function PracticeSection() {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 20,
        marginBottom: 10
      }}>Practice Section</Text>

      <FlatList 
        data={PraticeOption}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ marginRight: 15 }}>
            <Image 
              source={item.image} 
              style={{
                width: 200,
                height: 160,
                borderRadius: 15,
                resizeMode: 'cover'
              }} 
            />
          </View>
        )}
      />
    </View>
  );
}

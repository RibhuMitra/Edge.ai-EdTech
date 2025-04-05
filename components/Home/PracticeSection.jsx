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
    <View style= {{
      marginTop : 5
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 20,
      }}>Practice</Text>
      
      <View>
      <FlatList 
        data={PraticeOption}
        numColumns={3}
        renderItem={({ item, index}) => (
          <View key = { index }
          style={{
            flex : 1,
            margin : 5,
            aspectRatio : 1,

           }}
          
          >
            <Image source={item?.image} 
              style={{
                width: '100%',
                height:'100%',
                maxHeigt: 160,
                borderRadius : 15,
                

              }} />
              
              <Text style = {{
                position : 'absolute',
                padding : 10,
                fontFamily : 'outfit',
                fontSize : 15,
                color: 'white'
              }
              }>{ item.name }</Text>
          </View>
        )}
      /> 
      </View>
    </View>
  );
}

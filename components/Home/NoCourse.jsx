import { View, Text, Image, FlatList, Animated, Dimensions } from 'react-native';
import React, { useRef } from 'react';
import Button from '../Shared/Button';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const ITEM_SIZE = 100;
const SPACING = 20;
const CENTER_OFFSET = (width - ITEM_SIZE) / 2 - ITEM_SIZE / 2;

const courses = [
  require('./../../assets/images/linux.jpeg'),
  require('./../../assets/images/java.png'),
  require('./../../assets/images/python.png'),
  require('./../../assets/images/Cpp.png'),
  require('./../../assets/images/aws.png'),
  require('./../../assets/images/ml.png'),
  require('./../../assets/images/androidstudio.png'),
  require('./../../assets/images/ios.png'),
  require('./../../assets/images/jslogo1.jpg'),
  require('./../../assets/images/github1.png'),
];

export default function NoCourse() {
  const router = useRouter();
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ marginTop: 40, display: 'flex', alignItems: 'center' }}>
      <Image source={require('./../../assets/images/courselogo.jpg')} style={{ height: 200, width: 200 }} />
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 20,
          color: '#585858',
          textAlign: 'center',
        }}
      >
        Don't have any courses yet?
      </Text>
      <Button text={'+ Create a New One'} onPress={() => router.push('/addCourse')} />
      <Button text={'Explore existing courses'} type='outline' />

      {/* Extremely Curvy Animated Carousel */}
      <View style={{ marginTop: 20, height: 280 }}>
        <Animated.FlatList
          data={courses}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ alignItems: 'center', paddingHorizontal: CENTER_OFFSET }}
          snapToAlignment='center'
          snapToInterval={ITEM_SIZE + SPACING}
          decelerationRate='fast'
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * (ITEM_SIZE + SPACING),
              index * (ITEM_SIZE + SPACING),
              (index + 1) * (ITEM_SIZE + SPACING),
            ];
            
            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [0.6, 1.6, 0.6],
              extrapolate: 'clamp',
            });
            
            const translateY = scrollX.interpolate({
              inputRange,
              outputRange: [40, -30, 40],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                style={{
                  marginHorizontal: SPACING / 2,
                  borderRadius: 50,
                  overflow: 'hidden',
                  transform: [{ scale }, { translateY }],
                  shadowColor: '#002925',
                  shadowOffset: { width: 0, height: 6 },
                  shadowOpacity: 0.6,
                  shadowRadius: 10,
                  elevation: 10, // Enhanced for Android
                }}
              >
                <Image source={item} style={{ width: ITEM_SIZE, height: ITEM_SIZE, borderRadius: 50 }} />
              </Animated.View>
            );
          }}
        />
      </View>
    </View>
  );
}
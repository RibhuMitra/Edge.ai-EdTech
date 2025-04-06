import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import Intro from '../../components/CourseView/Intro'
import Chapters from '../../components/CourseView/Chapters'
import { imageAssets } from '../../constant/Option'

export default function CourseView() {
  const { courseParams } = useLocalSearchParams()
  const course = JSON.parse(courseParams)

  // Sections to render below the banner
  const sections = [
    { key: 'intro', render: () => <Intro course={course} /> },
    { key: 'chapters', render: () => <Chapters course={course} /> },
  ]

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Fixed Banner Image */}
      <Image
        source={imageAssets[course?.banner_image]}
        style={{
          width: '100%',
          height: 280,
          borderBottomLeftRadius: 35,
          borderBottomRightRadius: 35,
        }}
      />

      {/* Scrollable content below the image */}
      <FlatList
        data={sections}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => item.render()}
        contentContainerStyle={{
          
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

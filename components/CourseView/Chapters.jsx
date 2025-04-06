import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useCallback } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';

export default function Chapters({ course }) {
  const router = useRouter();
  const [completedChapters, setCompletedChapters] = useState(course?.completedChapter || []);

  // Refresh completion state when returning to this screen
  useFocusEffect(
    useCallback(() => {
      setCompletedChapters(course?.completedChapter || []);
    }, [course?.completedChapter])
  );

  const isChapterCompleted = (index) => {
    return completedChapters?.includes(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Chapters</Text>

      <FlatList
        data={course?.chapters}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              router.push({
                pathname: '/chapterView',
                params: {
                  chapterParams: JSON.stringify(item),
                  docId: course?.docId,
                  chapterIndex: index,
                },
              });
            }}
            style={styles.chapterContainer}
          >
            <View style={styles.chapterContent}>
              <View style={styles.chapterInfo}>
                <Text style={styles.chapterText}>{index + 1}.</Text>
                <Text
                  style={styles.chapterName}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {item?.chapterName}
                </Text>
              </View>
              {isChapterCompleted(index) ? (
                <MaterialIcons name="verified" size={24} color="rgb(33, 182, 145)" />
              ) : (
                <AntDesign name="eye" size={24} color="rgb(33, 182, 145)" />
              )}
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  heading: {
    fontFamily: 'outfit-bold',
    fontSize: 25,
    color: '#585858',
    marginBottom: 10,
  },
  chapterContainer: {
    padding: 15,
    borderWidth: 0.5,
    borderRadius: 15,
    marginTop: 10,
    borderColor: '#D3D3D3',
    backgroundColor: 'white',

    // Shadows
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  chapterContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  chapterInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    flexWrap: 'wrap',
    columnGap: 6,
  },
  chapterText: {
    fontSize: 18,
    fontFamily: 'outfit',
    color: '#585858',
  },
  chapterName: {
    fontSize: 18,
    fontFamily: 'outfit',
    color: '#585858',
    flexShrink: 1,
    flex: 1,
  },
});

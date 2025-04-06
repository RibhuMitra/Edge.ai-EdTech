import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import * as Progress from 'react-native-progress';
import Button from '../../components/Shared/Button';
import { arrayUnion } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';
import { useRouter } from 'expo-router';

export default function ChapterView() {
    const {chapterParams, docId, chapterIndex} = useLocalSearchParams();

    const chapters = JSON.parse(chapterParams);

    const [currentPage, setCurrentPage] = useState(0);
    const [loader, setLoader] = useState(false);
    const router = useRouter();
    const GetProgress = (currentPage) => {
        const perc = (currentPage/chapters?.content?.length);
        return perc;
    }


    const onChapterComplete = async() => {
        setLoader(true)

        await updateDoc(doc(db,'Courses', docId),{
            completedChapter: arrayUnion(chapterIndex)
        })

        setLoader(false);
        router.back('/courseView');



    }




  return (
    <View style = {{
        padding : 25,
        flex: 1,
        backgroundColor : 'white',
        
    }}>
      <Progress.Bar progress={GetProgress(currentPage)} width={Dimensions.get('screen').width*0.85} color='rgb(0, 124, 93)' />

      <View style={{
        marginTop: 20
      }}>
        <Text style={{
            fontFamily: 'outfit-bold',
            fontSize: 20,
        }}>{chapters?.content[currentPage]?.topic}</Text>
        <Text style={{
            fontFamily: 'outfit',
            fontSize: 19,
            marginTop: 10
        }}>{chapters?.content[currentPage]?.explain}</Text>

       {chapters?.content[currentPage]?.code && <Text style={[styles.codeExampleText, { backgroundColor: 'rgb(27, 63, 54)' }]}>
        {chapters?.content[currentPage]?.code}
         </Text> }
         

         {chapters?.content[currentPage]?.example && <Text style={styles.codeExampleText}>{chapters?.content[currentPage]?.example}</Text>}
      </View>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        position : 'absolute',
        bottom : 50,
        width : '100%',
        left: 25
      }}>
        {chapters?.content?.length-1!=currentPage?
      <Button text={'Next'} onPress={()=> setCurrentPage(currentPage + 1)}/> : <Button text={'Finish'} onPress={()=> onChapterComplete()} loading={loader}/> }
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    codeExampleText : {
        padding : 15,
        backgroundColor : 'grey',// ,
        borderRadius : 15,
        fontFamily: 'outfit',
        fontSize: 18,
        marginTop: 15,
        color: 'white'

    }
})
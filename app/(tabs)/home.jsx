import { View, Text, Platform } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Home/Header'
import NoCourse from '../../components/Home/NoCourse'
import CourseList from '../../components/Home/CourseList'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './../../config/firebaseConfig';
import { UserDetailContext } from '../../context/UserDetailContext';
import PracticeSection from '../../components/Home/PracticeSection'

export default function Home() {


  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    userDetail && GetCourseList();
  }, [userDetail])

  
  const GetCourseList = async() => {
    setCourseList([])
    const q = query(collection(db, 'Courses'), where("createdBy", '==', userDetail?.email))
    const querySnapshot = await getDocs(q);
    
    querySnapshot.forEach((doc) => {
      console.log("--",doc.data());
      setCourseList((prev) => [...prev, doc.data()])
    })
  }



  







  return (
    <View style={{
        padding: 25,
        paddingTop: Platform.OS == 'ios' && 45,
        flex: 1,
        backgroundColor: 'white'
    }}>
        
      <Header />
      {courseList?.length == 0 ?
        <NoCourse /> : 
        <View>
          <PracticeSection />
          <CourseList courseList={ courseList } /> 
          
        
        </View>
      }
    </View>
  )
}
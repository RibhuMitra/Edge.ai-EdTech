import { View, Text, Platform } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Home/Header'
import NoCourse from '../../components/Home/NoCourse'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './../../config/firebaseConfig';
import { UserDetailContext } from '../../context/UserDetailContext';

export default function Home() {


  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [courseList, setCourseList] = useState([]);



  







  return (
    <View style={{
        padding: 25,
        paddingTop: Platform.OS == 'ios' && 45,
        flex: 1,
        backgroundColor: 'white'
    }}>
        
      <Header />
      <NoCourse />
    </View>
  )
}
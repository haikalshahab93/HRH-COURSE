import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import DetailSection from '../Components/CourseDetailScreen/DetailSection'
import ChapterSection from '../Components/CourseDetailScreen/ChapterSection'
import { enrollCourse,getUserEnrolledCourse } from '../Services'
import { useUser } from '@clerk/clerk-expo'

export default function CourseDetailScreen() {
  const navigate = useNavigation()
  const params = useRoute().params;
  const {user} = useUser();

  useEffect(() => {
    console.log(params.course)
    if(user&&params.course){
      GetUserEnrolledCourse()
    }
  }, [params.course,user])

  const UserEnrollCourse = ()=>{
    enrollCourse(params.course.id,user.primaryEmailAddress.emailAddress)
    // console.log(enrollCourse)
  }

  const GetUserEnrolledCourse=()=>{
    getUserEnrolledCourse(params.course.id,user.primaryEmailAddress.emailAddress)
    .then(resp=>{
      console.log('---',resp)
    })
    
  }
  return params.course && (
    <ScrollView style={{ padding: 20 }}>
      <TouchableOpacity onPress={() => navigate.goBack()}>
        <Ionicons name="ios-arrow-back-circle" size={40} color='black' />
      </TouchableOpacity>
        <DetailSection course ={params.course} enrollCourse={()=>UserEnrollCourse()}/>
        <ChapterSection chapterList ={params.course.chapters}/>
    </ScrollView>
  )
}
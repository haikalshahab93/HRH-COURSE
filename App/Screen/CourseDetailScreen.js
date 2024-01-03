import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import DetailSection from '../Components/CourseDetailScreen/DetailSection'

export default function CourseDetailScreen() {
  const navigate = useNavigation()
  const params = useRoute().params;

  useEffect(() => {
    console.log(params.course)
  }, [params.course])

  return params.course && (
    <View style={{ padding: 20 }}>
      <TouchableOpacity onPress={() => navigate.goBack()}>
        <Ionicons name="ios-arrow-back-circle" size={40} color='black' />
        <DetailSection course ={params.course}/>
      </TouchableOpacity>
    </View>
  )
}
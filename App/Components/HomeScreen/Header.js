import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

export default function Header() {
  const { isLoaded, isSignedIn, user } = useUser();
  return isLoaded&&(
    <View style={{padding:20}}>
      <View>
        <Image source={{ uri: user?.imageUrl }} style={{ width: 50, heigt: 50, borderRadius: 99 }} />
      </View>
    </View>
  )
}
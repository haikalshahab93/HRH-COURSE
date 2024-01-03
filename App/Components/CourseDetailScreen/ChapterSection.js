import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../Utils/Colors'

export default function ChapterSection({ chapterList }) {
    return (
        <View>
            {chapterList.map((item, index) => (
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, borderWidth: 1, borderRadius: 10, marginTop: 10 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, padding: 15 }}>
                        <Text style={{ fontFamily: 'outfit-medium', fontSize: 27 }}>{index + 1}</Text>
                        <Text style={{ fontFamily: 'outfit', fontSize: 21 }}>{item.title}</Text>
                    </View>
                    <Ionicons name='play-circle' size={30} color='black' />
                </View>
            ))}
        </View>
    )
}
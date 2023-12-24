import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import app from './../../assets/images/haikal.jpg'
import google from './../../assets/images/google.png'
import Colors from '../Utils/Colors'

export default function LoginScreen() {
    return (
        <View style={{ display: 'flex', alignItems: 'center' }}>
            <Image source={app} style={{ width: 250, height: 500, objectFit: 'contain', marginTop: 50 }} />
            <View style={{ height: 400, backgroundColor: Colors.PRIMARY, width: '100%', marginTop: -100, padding: 20 }}>
                <Text style={{ fontSize: 35, color: Colors.WHITE, fontFamily: 'outfit-bold', textAlign: 'center' }}>CODEBOX</Text>
                <Text style={{ textAlign: "center", fontSize: 20, color: Colors.LIGHT_PRIMARY, fontFamily: 'outfit' }}

                >Test</Text>
                <TouchableOpacity style={{ backgroundColor: Colors.WHITE, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 99 }}>
                    <Image source={google} style={{ width: 40, height: 40, objectFit: 'contain', borderRadius: 99 }} />
                    <Text>Sign in With Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
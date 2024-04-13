import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-3xl font-pbold'>Video Screen</Text>
       <StatusBar style="auto" />
       <Link href={'/profile'} >Go to Profile</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
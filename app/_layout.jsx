import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

export default RootLayout = () => {
  return (
    <>
      <Text>Header</Text>
      <Slot/>
      <Text>Footer</Text>
    </>
  )
}
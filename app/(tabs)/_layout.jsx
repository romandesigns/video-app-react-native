import { View, Text,Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import {icons} from '../../constants';

const TabIcon = ({focused, color, icon, name}) => {
  return (
    <View>
      <Image source={icon}/>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs.Screen>
        <Tabs.Screen name='Home' path='/home' options={
          {
            title: 'Home',
            headerShown: false,
            tabBarIcon:({color, focused}) => (
              <TabIcon focused={focused} color={color} icon={icons.home} name='Home'/>
            )
          }
        }/>
      </Tabs.Screen>
    </>
  )
}

export default TabsLayout
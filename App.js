import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tabs from './src/components/Tabs'
import { View, ActivityIndicator } from 'react-native'

const Tab = createBottomTabNavigator()

function App() {
  const [loading, setLoading] = useState(true)
  if (loading) {
    return (
      <View>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

export default App

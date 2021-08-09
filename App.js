import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import DT from './darkTheme'
import myDarkTheme from './darkTheme'
import { Cards } from './Components/Cards'

function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <Cards />
      </View>
    </SafeAreaView>
  )
}

const HomeStack = createStackNavigator()

function HomeScrenStack({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={HomeScreen}></HomeStack.Screen>
    </HomeStack.Navigator>
  )
}

function App() {
  const scheme = useColorScheme()
  const MyDarkTheme = DT()

  return (
    <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : DefaultTheme}>
      <HomeScrenStack />
    </NavigationContainer>
  )
}

export default App

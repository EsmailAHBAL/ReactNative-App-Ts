import React from 'react'
import { Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import History from './History.screens'
import Home from './Home.screens'
import Terms from './TermsOfuse.screens'

const BTN = createBottomTabNavigator()

const BottomTabs:React.FC = () => {
  return (
          <BTN.Navigator>
            <BTN.Screen name='Home' component={Home}  />
            <BTN.Screen name='History' component={History} />
            <BTN.Screen name='Terms' component={Terms} />
          </BTN.Navigator>
  )
}

export default BottomTabs
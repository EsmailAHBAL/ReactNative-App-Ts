import React from 'react'
import { Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import History from './History.screens'
import Home from './Home.screens'
import Terms from './TermsOfuse.screens'
import { Icons, List, TermsIcon } from '../Icons/Icons'

const BTN = createBottomTabNavigator()

const BottomTabs:React.FC = () => {
  return (
          <BTN.Navigator screenOptions={({route})=>({
            tabBarIcon :()=>{ 
              if(route.name.includes('Home')) return <Icons size={24} color='orange' />
               if(route.name.includes('History')) return <List />
               if(route.name.includes('Terms')) return <TermsIcon />
               }
          })}>
            <BTN.Screen name='Home' component={Home}  />
            <BTN.Screen name='History' component={History} />
            <BTN.Screen name='Terms' component={Terms} />
          </BTN.Navigator>
  )
}

export default BottomTabs
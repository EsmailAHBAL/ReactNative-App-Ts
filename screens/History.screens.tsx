import { format } from "date-fns"
import React, { useCallback } from "react"
import { Pressable, Text, View } from "react-native"
import { useAppContext } from "../AppContext"
import { MoodTypeWithSTM } from "../Types/Types"
import {PanGestureHandler} from 'react-native-gesture-handler'
import { useAnimatedGestureHandler } from "react-native-reanimated"

const History :React.FC =() => {

const OnGestureEvent =  useAnimatedGestureHandler(
  {
    onActive: event => {
      console.warn(event.translationX);
    },
  },
  [],
);
 
  const getAppContext = useAppContext()
  const moodDeleted =useCallback((m:MoodTypeWithSTM) => {
    getAppContext.deleteMood(m)
  },[getAppContext.MoodList])
  return (
  <PanGestureHandler  
  minVelocityX={200} minDist={900} minVelocityY={988}
  onGestureEvent={OnGestureEvent}
  >
      <View>
         {
          getAppContext.MoodList.map(item =>(
            <View className={`flex flex-row justify-between mx-4 my-4  items-center py-3 bg-amber-100`} key={item.timestamp}>
            <Text style={{fontFamily:'Kalam_700Bold'}} className='font-semibold text-base'>{item.mood.emoji}  {item.mood.description}</Text>
            <Text className='font-thin pt-3'>{format(new Date(item.timestamp),"d:MM 'at' hh:mm")}</Text>
            <Pressable onPress={()=>moodDeleted(item)} className='px-5'>
              <Text style={{fontFamily:'Kalam_700Bold'}}>Delete</Text>
            </Pressable>
           </View>
          ))
         }
    </View>
  </PanGestureHandler>
  )
}

export default History
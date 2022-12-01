import React, { useCallback, useState } from 'react'
import { View ,Text, StyleSheet, FlatList} from 'react-native'
import ModelPicker from '../components/ModePicher'
import { MoodType, MoodTypeWithSTM } from '../Types/Types'

const Home :React.FC = () => {
    const mySkills :string [] = ['Spring Boot','NodeJs','NestJs','ReactJs','Vuejs']
    const [moodStm,SetMoodSTM] = useState<MoodTypeWithSTM []>([])
    const handlingMood = useCallback((mood:MoodType) => {
      SetMoodSTM(c => [...c, {mood:mood,timestamp: Date.now()}])
    },[])
  return (
    <View className='m-4 border border-black py-5 rounded-lg'>
       <View className='flex flex-row justify-center items-center'>
       <Text className='font-bold text-lg'>How Are U Right Now !! </Text>
       </View>
        <ModelPicker  handlingMood ={handlingMood}/>
        {
          moodStm.map(item => (
            <Text key={item.timestamp}>
              {item.mood.emoji} : {new Date(item.timestamp).toDateString()}
            </Text>
          ))
        }
    </View>
  )
}

export default Home
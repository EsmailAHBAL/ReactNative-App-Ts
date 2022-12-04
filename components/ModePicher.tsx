import React, { useCallback, useState } from "react"
import { View ,Text, Pressable, Alert, Image} from "react-native"
import { MoodType } from "../Types/Types"
import Reanimated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
type PickerProps = {
  handlingMood : (mood :MoodType) =>void
}
const partyImage = require('../assets/ii.png')
const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable);

const ModelPicker :React.FC<PickerProps>= ({handlingMood}) => {
    const EMOJIS :MoodType[]= [
        {emoji:'🙂',description:'Happy'},
        {emoji:'😢',description:'Sad'},
        {emoji:'😠 ',description:'Angry'},
        {emoji:'🥳 ',description:'Celebration'},
        {emoji:'😔 ',description:'Pensive'},
]
const [selectMood,setSelectMood] = useState<MoodType>()

const buttonStyle = useAnimatedStyle(
  () => ({
    opacity: selectMood ? withTiming(1) : withTiming(0.5),
  }),
  [selectMood]
);
const [isSelected,setIsSelected]= useState<boolean>(false)
const handleSelect =useCallback((e:MoodType) => {
   handlingMood(e)
   setIsSelected(true)
},[])

if(isSelected){
  return (
    <View>
      <View className="flex flex-row justify-center items-center  py-4">
      <Image source={partyImage} className='h-[150px] w-[150px] bg-teal-100 rounded-full'/>
      </View>
      <Pressable onPress={() => setIsSelected(false)}
      className='border border-black rounded-lg font-bold bg-teal-200 w-[auto] h-10 flex flex-row 
      justify-center items-center mt-6 px-7'>
        <Text>Choose An Other 🆕 </Text>
      </Pressable>
    
    </View>
  )
}
return (
  <React.Fragment >
  
    <View className="flex flex-row justify-around mt-5">
      {
        EMOJIS.map(e =>(
          <Pressable onPress={() => setSelectMood(e) } key={e.description} 
           className={selectMood?.emoji === e.emoji ? "bg-orange-300 rounded-full border border-orange-500 w-[70px] h-[70px]  flex flex-row justify-center items-center " :"bg-orange-400 rounded-full border border-zinc-500 w-[60px] h-[60px]  flex flex-row justify-center items-center  active:bg-red-50"}>
              <Text key={e.description}>{e.emoji}</Text>
            </Pressable>
        ))
      }
    </View>
      <View className="flex flex-row justify-center">
      <ReanimatedPressable onPress={() => {if(selectMood) {handleSelect(selectMood)}}} style={buttonStyle}
      className='border border-black rounded-lg font-bold bg-orange-400 w-[auto] h-10 flex flex-row 
      justify-center items-center mt-6 px-7'>
        <Text>Choose U Mood 👆</Text>
      </ReanimatedPressable>
      </View>
      
      </React.Fragment>
 ) 
}

export default ModelPicker
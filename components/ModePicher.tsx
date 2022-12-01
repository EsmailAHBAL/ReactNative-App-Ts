import React, { useCallback, useState } from "react"
import { View ,Text, Pressable, Alert} from "react-native"
import { MoodType } from "../Types/Types"
type PickerProps = {
  handlingMood : (mood :MoodType) =>void
}
const ModelPicker :React.FC<PickerProps>= ({handlingMood}) => {
    const EMOJIS :MoodType[]= [
        {emoji:'🙂',description:'Happy'},
        {emoji:'😢',description:'Sad'},
        {emoji:'😠 ',description:'Angry'},
        {emoji:'🥳 ',description:'Celebration'},
        {emoji:'😔 ',description:'Pensive'},
]


const [selectMood,setSelectMood] = useState<MoodType>()
const showDes =useCallback((e:string) => {
  Alert.alert(e)
},[])
const showMood = useCallback(() => {
  if(selectMood){
    Alert.alert(selectMood?.emoji,selectMood.description )
  }
},[selectMood?.emoji])
return (
  <React.Fragment >
  
    <View className="flex flex-row justify-around mt-5">
      {
        EMOJIS.map(e =>(
          <Pressable onPress={() => setSelectMood(e)} 
           className={selectMood?.emoji === e.emoji ? "bg-amber-200 rounded-full border border-black w-[50px] h-[50px]  flex flex-row justify-center items-center " :"rounded-full border border-black w-[40px] h-[40px]  flex flex-row justify-center items-center  active:bg-red-50"}>
              <Text key={e.emoji}>{e.emoji}</Text>
            </Pressable>
        ))
      }
    </View>
      <View className="flex flex-row justify-center">
      <Pressable onPress={() => {if(selectMood) {handlingMood(selectMood)}}}
      className='border border-black rounded-lg font-bold bg-amber-200 w-[auto] h-10 flex flex-row 
      justify-center items-center mt-6 px-7'>
        <Text>Choose U Mood 👆</Text>
      </Pressable>
      </View>
      </React.Fragment>
 ) 
}

export default ModelPicker
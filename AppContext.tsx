import React,{createContext, useCallback, useContext, useEffect, useState} from "react";
import { Alert } from "react-native";
import { gettingData, savingData } from "./Storage/Savign__Data.Storage";
import { MoodType, MoodTypeWithSTM } from "./Types/Types";
    type PickerProps = {
    MoodList :MoodTypeWithSTM []
    handlingMood : (mood :MoodType) =>void,
    deleteMood : (mood:MoodTypeWithSTM) => void,
    }
    const defaultPContext:PickerProps = {MoodList:[],handlingMood:()=>{},deleteMood: () => {}}
    const context = createContext<PickerProps>(defaultPContext)
    export const AppContext :React.FC<{children :any}>= ({children}) => {
    const [mood ,setMoods] = useState<MoodTypeWithSTM []>([])
    const deleteMood = useCallback((p:MoodTypeWithSTM) => {
      setMoods( c => {
        const newList = c.filter((i)=> i.timestamp !== p.timestamp )
        savingData({moodList:newList})
        return newList
      })
    },[])
    const handlingMood = useCallback((moodP:MoodType) => {
        setMoods(c => {
            const newListMood = [...c, {mood:moodP,timestamp: Date.now()}]
            savingData({moodList:newListMood})
            return newListMood
        }

        )
      },[])
      useEffect(() => {
        const fetchingData = async() => {
          const data = await gettingData()
          if(data) {
            setMoods(data.moodList)
          }
        }
        fetchingData()
      },[])
     return (
    <context.Provider value={{MoodList:mood,handlingMood:handlingMood,deleteMood:deleteMood}}>
        {children}
    </context.Provider>
  )
}

export const useAppContext = () =>  useContext(context)

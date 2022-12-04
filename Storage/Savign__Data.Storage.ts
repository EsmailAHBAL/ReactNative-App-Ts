import AsyncStorage from "@react-native-async-storage/async-storage"
import { MoodTypeWithSTM } from "../Types/Types"

type appData = {
    moodList :MoodTypeWithSTM []
}
const appKey:string = ''

export const savingData = async (input :appData) => {
    try {
     await AsyncStorage.setItem(appKey,JSON.stringify(input))
    
 } catch { }
}

export const gettingData =async () :Promise<appData | null>=> {
    try {
        const res  = await AsyncStorage.getItem(appKey);
        if(res) return JSON.parse(res)
    } catch (error) {       
    }
    return null
}
import { useFonts,Inter_800ExtraBold } from '@expo-google-fonts/inter'
import { format } from 'date-fns'
import React, { } from 'react'
import { View , ScrollView,ImageBackground} from 'react-native'
import { useAppContext } from '../AppContext'
import ModelPicker from '../components/ModePicher'
import { Icons } from '../Icons/Icons'

const urlImage :string=`https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxMXx8bW91bnRhaW58ZW58MHx8fHwxNjY5OTgyNDgy&ixlib=rb-4.0.3&q=80&w=1080`
const Home :React.FC = () => {
    const getAppContext = useAppContext()
 
  
    
  return (
    <ScrollView>
      <View className='border border-black  rounded-lg h-[690px]'>
         <ImageBackground source={{uri:urlImage}} className='h-full' 
            style={{flex:1,justifyContent:"center"}}>
   
          <ModelPicker  handlingMood ={getAppContext.handlingMood} />
        <Icons size={40} color='blue'/>
        </ImageBackground >
      </View>
     </ScrollView>
  )
}

export default Home
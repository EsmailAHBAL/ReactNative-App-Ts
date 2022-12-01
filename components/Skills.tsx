import React from "react"
import { Text, View } from "react-native"
type skillsProps = {skill :string}
const Skills :React.FC<skillsProps>= ({skill}) => {
  return (
    <View>
      <Text className="border border-black rounded-full mt-2 pl-5">
      {skill} 
      </Text>
    </View>
  )
}

export default Skills
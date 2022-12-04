import { useFonts, Kalam_700Bold } from "@expo-google-fonts/kalam";
import React from "react"
import { Text, View } from "react-native"

const Terms :React.FC =() => {
  let [fontsLoaded] = useFonts({
    Kalam_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
        <Text style={{fontFamily:'Kalam_700Bold'}}>
        Lorem ipsum dolor sit amet, consecte
        {""}
        tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
    </View>
  )
}

export default Terms
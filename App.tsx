import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import { Platform, UIManager } from 'react-native';
import { AppContext } from './AppContext';
import BottomTabs from './screens/BottomTabs.screens';
export default function App() {

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
  return (
    <AppContext>
   <NavigationContainer>
      <BottomTabs />
   </NavigationContainer>
    </AppContext>
  );
}


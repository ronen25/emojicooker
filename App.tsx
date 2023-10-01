import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstEmojiScreen from './src/features/EmojiSelection/screens/FirstEmojiScreen';
import SecondEmojiScreen from './src/features/EmojiSelection/screens/SecondEmojiScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='firstEmoji' component={FirstEmojiScreen} />
        <Stack.Screen name='secondEmoji' component={SecondEmojiScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

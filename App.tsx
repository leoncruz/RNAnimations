import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Text>Hello World</Text>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

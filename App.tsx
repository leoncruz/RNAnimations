import { Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Text>Hello World</Text>
    </GestureHandlerRootView>
  );
}

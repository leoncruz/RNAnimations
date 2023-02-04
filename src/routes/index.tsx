import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../pages/Home';

const Drawer = createDrawerNavigator();

export function Routes(): JSX.Element {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

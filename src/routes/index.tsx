import { createDrawerNavigator } from '@react-navigation/drawer';
import { ColorInterpolate } from '../pages/ColorInterpolate';
import { Home } from '../pages/Home';

const Drawer = createDrawerNavigator();

export function Routes(): JSX.Element {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Color Interporlation" component={ColorInterpolate} />
    </Drawer.Navigator>
  );
}

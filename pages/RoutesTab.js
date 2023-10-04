import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppCar from './Appcar';
import Marcas from './Marcas';
import Navigation from './Navigation';

const Tab = createBottomTabNavigator();

export default function Routestab() {
  return (
    <Tab.Navigator initialRouteName="AppCar" options={(tabBarShowLabel = 'false')}>
      <Tab.Screen
        name="AppCar"
        component={AppCar}
        options={{
          headerShown: false,
          tabBarIcon: ({size}) => (
            <MaterialCommunityIcons
              name="apps"
              color='black'
              size='30'
            />
          ),
        }}
      />

      <Tab.Screen
        name="Marcas"
        component={Marcas}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="car-sports"
              color='black'
              size='30'
            />
          ),
        }}
      />

      <Tab.Screen
        name="Modelos"
        component={Navigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="car-multiple"
              color='black'
              size='30'
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

import {createStackNavigator} from '@react-navigation/stack';
import Escolha from './Escolha';
import Fiat from './Fiat'; 
import Chevrolet from './Chevrolet';
import VolksWagen from './VolksWagen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Escolha" component={Escolha}/>
      <Stack.Screen name="Fiat" component={Fiat}/>
      <Stack.Screen name="Chevrolet" component={Chevrolet}/>
      <Stack.Screen name="VolksWagen" component={VolksWagen}/>

    </Stack.Navigator>
  );
}
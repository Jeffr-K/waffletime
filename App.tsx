import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen } from './src/user/pages/profile';
import { HomeScreen } from './src/common/screen/home';
import { SettingsScreen } from './src/common/screen/settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage';
import { BellScreen } from './src/common/screen/bell';
import { MessageScreen } from './src/common/screen/message';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export type RootStackParamList = {
  Home: undefined,
  Profile: { name: string };
};


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }: any) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;
            switch (route.name) {
              case 'Home':
                iconName = focused ? faHouse : faHouse;
                break;
              case 'Profile':
                iconName = focused ? faUser : faUser;
                break;
              case 'Messages':
                iconName = focused ? faMessage : faMessage;
                break;
              case "Alarm":
                iconName = focused ? faBell : faBell;
                break;
              case 'Settings':
                iconName = focused ? faGear : faGear;
                break;
              default:
                iconName = focused ? faHouse : faHouse;
            }
            return <FontAwesomeIcon icon={iconName} size={20} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Messages" component={MessageScreen} />
        <Stack.Screen name="Alarm" component={BellScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;

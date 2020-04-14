import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeedStack from '../Screens/Feed';
import MessageStack from '../Screens/Message';

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="white"
      inactiveColor="black"
      backBehavior="initialRoute"
      barStyle={{backgroundColor: '#694fad'}}
      shifting
      labeled={true}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Message') {
            iconName = focused ? 'message-text' : 'message-text-outline';
          }
          return <Icon name={iconName} size={24} color={color} />;
        },
      })}>
      <Tab.Screen name="Feed" component={FeedStack} />
      <Tab.Screen name="Message" component={MessageStack} />
    </Tab.Navigator>
  );
};

export default BottomTab;
// options={{
//   tabBarLabel: 'Home',
//   tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
// }}

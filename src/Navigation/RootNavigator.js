import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerContent from '../Screens/DrawerContent';
import BottomTab from './BottomTab';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={BottomTab} />
    </Drawer.Navigator>
  );
};

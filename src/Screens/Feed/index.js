import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import Feed from './Feed';
import Details from './Detail';

const Stack = createStackNavigator();

const Header = ({scene, previous, navigation}) => {
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header>
      {previous ? (
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
          color={'white'}
        />
      ) : (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Icon name="menu" size={30} color="white" />
        </TouchableOpacity>
      )}
      <Appbar.Content
        style={{marginLeft: 120}}
        title={
          previous ? title : <Icon name="twitter" size={40} color="white" />
        }
      />
    </Appbar.Header>
  );
};

const getHeaderTitle = (route) => {
  const routeName = route.state;
  switch (routeName) {
    case 'Feed':
      return 'New feeds';
    case 'Details':
      return 'Details';
  }
};

const FeedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
    </Stack.Navigator>
  );
};

export default FeedStack;

import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const Details = ({navigation}) => (
  <View style={styles.container}>
    <Text>Details</Text>
    <Button title="Go back" onPress={() => navigation.goBack()} />
    <Button
      title="Go back to first screen in stack"
      onPress={() => navigation.popToTop()}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Details;

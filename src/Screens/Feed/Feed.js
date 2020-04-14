import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const Feed = ({navigation}) => (
  <View style={styles.container}>
    <Text>Feed</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
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

export default Feed;

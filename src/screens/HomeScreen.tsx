import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

const HomeScreen = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Real State Crypto Currency</Text>
      <Button icon="camera">Press me</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default HomeScreen;

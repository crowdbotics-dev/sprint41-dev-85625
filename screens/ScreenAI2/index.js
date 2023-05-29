import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TestScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Test Screen</Text>
      </View>
      <View style={styles.content}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.text}>
          This is a test screen. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel bibendum bibendum, elit elit bibendum elit, vel bibendum elit elit elit. Sed euismod, nisl vel bibendum bibendum, elit elit bibendum elit, vel bibendum elit elit elit.
        </Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 80,
    backgroundColor: '#4a148c',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24
  }
});
export default TestScreen;
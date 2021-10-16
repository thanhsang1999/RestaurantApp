import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ResultsList = ({ title, result }) => {
  console.log(title, result);
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text>{result.length}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default ResultsList;

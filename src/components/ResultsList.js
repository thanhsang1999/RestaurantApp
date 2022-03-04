import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, result }) => {
  console.log(title, result);
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={result}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <ResultsDetail item={item} />;
        }}
      />
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

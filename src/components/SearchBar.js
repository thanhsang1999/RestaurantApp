import React from 'react';
import { View, Text, StyleSheet, TextInput, ToastAndroid } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const SearchBar = ({ term, onChangeTerm, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <FontAwesome5 name="search" size={22} style={styles.icon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.input}
        value={term}
        onChangeText={onChangeTerm}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    margin: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
  },
  icon: {
    marginHorizontal: 15,
    color: '#34495e',
  },
  input: {
    fontSize: 16,
    flex: 1,
    color: '#2c3e50',
    height: 45,
  },
});

export default SearchBar;

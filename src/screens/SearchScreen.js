import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

function SearchScreen() {
  const [term, setTerm] = useState('');
  const [result, errorMessage, searchApi] = useResults();
  // console.log(result);
  const filterResultByPrice = (price) => {
    return result.filter((item) => item.price === price);
  };
  return (
    <View style={styles.root}>
      <SearchBar
        term={term}
        onChangeTerm={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {result.length} results</Text>
      <ResultsList title="Cost Effective" result={filterResultByPrice('$')} />
      <ResultsList title="Bit Pricier" result={filterResultByPrice('$$')} />
      <ResultsList title="Big Spender" result={filterResultByPrice('$$$')} />
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: 10,
  },
});
export default SearchScreen;

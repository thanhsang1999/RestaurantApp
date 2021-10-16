import React, { useEffect, useState } from 'react';
import searchApi from '../api/searchApi';

export default () => {
  const [result, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const handleCallApi = async (searchTerm) => {
    // console.log('searchTerm', searchTerm);
    try {
      const res = await searchApi.searchNewYork({
        term: searchTerm,
      });
      setResult(res.data?.businesses);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };
  useEffect(() => {
    handleCallApi('pasta');
  }, []);
  return [result, errorMessage, handleCallApi];
};

import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <Feather name="search" size={24} color="silver" style={styles.icon} />
      <TextInput style={styles.input} placeholder="Search" />
      <Feather name="sliders" size={23} color="gray" style={[styles.icon, styles.rotatedIcon]} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: 'black',
  },
  icon: {
    marginRight: 8,
  },
  rotatedIcon: {
    transform: [{ rotate: '90deg' }], // Adjust this value to rotate left or right
  },
});

export default SearchBar;

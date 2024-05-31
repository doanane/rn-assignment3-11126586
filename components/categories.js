import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const categories = [
  {name: 'Exercise', tasks: 12, image: require('../assets/exercise.png')},
  {name: 'Study', tasks: 12, image: require('../assets/study.png')},
  {name: 'Code', tasks: 12, image: require('../assets/code.png')},
  {name: 'Cook', tasks: 12, image: require('../assets/cook.png')},
  {name: 'Read', tasks: 12, image: require('../assets/read.png')},
  {name: 'Sleep', tasks: 12, image: require('../assets/sleep.png')},
  {name: 'Sing', tasks: 12, image: require('../assets/sing.png')},
  {name: 'Learn', tasks: 12, image: require('../assets/learn.png')},
  {name: 'Explore', tasks: 12, image: require('../assets/explore.png')},

];

const CategoryCard = ({ category }) => {
  return (
    <View style={styles.categoryCard}>
      <Text style={styles.categoryName}>{category.name}</Text>
      <Text style={styles.taskCount}>{category.tasks} Tasks</Text>
      <Image source={category.image} style={styles.image} />
    </View>
  );
};

const Categories = () => {
  return (
    <View style={styles.categories}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryCard category={item} />}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categories: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryList: {
    paddingLeft: 10,
  },
  categoryCard: {
    width: 150,
    padding: 10,
    marginRight: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  taskCount: {
    color: 'gray',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

export default Categories;

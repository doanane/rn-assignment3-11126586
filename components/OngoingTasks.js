import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OngoingTasks = () => {
  const tasks = [
    { name: 'Mobile App Development' },
    { name: 'Web Development' },
    { name: 'Push Ups' },
    { name: 'Learning Data Analysis' },
    { name: 'Learning javascript' },
    { name: 'Cyber Security' },
    { name: 'Pray to God' },
    { name: 'Code' },
    { name: 'Learn from Others' },
    { name: 'Happy yourself' },
    { name: 'Eat-Well' },
    { name: 'Have a quite time' },
    { name: 'Wash your clothes' },
    { name: 'Continue learning' },
    { name: 'Follow the steps again' },
  ];

  return (
    <View style={styles.ongoingTasks}>
      <Text style={styles.title}>Ongoing Tasks</Text>
      <View style={styles.taskList}>
        {tasks.map((task, index) => (
          <View key={index} style={styles.taskCard}>
            <Text>{task.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ongoingTasks: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskList: {
    flexDirection: 'column',
  },
  taskCard: {
    padding: 50,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});

export default OngoingTasks;

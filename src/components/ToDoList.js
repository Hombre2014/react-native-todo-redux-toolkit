import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const ToDoList = () => {
  const data = [
    {
      id: 1,
      title: 'Learn React Native',
    },
    {
      id: 2,
      title: 'Learn Redux',
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.item}>{item.title}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => {
            deleteItem(item.id);
          }}
        >
          <Ionicons name="trash" size={30} color="red" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#e9e9e9',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
  },
  delete: {
    color: 'red',
    fontSize: 24,
  },
  deleteButton: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
});

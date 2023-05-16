import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';
import { useDispatch } from 'react-redux';

const ToDoList = () => {
  const todos = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  console.log(todos);

  const deleteItem = (id) => {
    dispatch(deleteTask({ id }));
  };


  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.item}>{item.name}</Text>
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
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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

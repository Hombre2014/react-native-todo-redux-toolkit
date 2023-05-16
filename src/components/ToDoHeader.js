import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const ToDoHeader = () => {

  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const onSubmitTask = () => {
    if (todo.trim().length === 0) {
      alert('Please enter a task');
      setTodo('');
      return;
    }
    dispatch(
      addTask({
        tasks: todo,
      })
    );
    setTodo('');
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
        }}
      >
        Todo List
      </Text>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <TextInput
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10,
            padding: 10,
            width: "90%",
            borderRadius: 5,
          }}
          placeholder="Add Todo"
          onChangeText={setTodo}
          value={todo}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            padding: 10,
            width: "90%",
            margin: 10,
            borderRadius: 5,
            alignItems: 'center',
          }}
          onPress={onSubmitTask}
        >
          <Text style={{ color: 'white' }}>Add Todo</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ToDoHeader;

const styles = StyleSheet.create({});

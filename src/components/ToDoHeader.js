import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const ToDoHeader = () => {
  const [todo, setTodo] = useState('');

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
            width: "80%",
            borderRadius: 5,
          }}
          placeholder="Add Todo"
          onChange={setTodo}
          value={todo}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            padding: 10,
            width: "80%",
            margin: 10,
            borderRadius: 5,
            alignItems: 'center',
          }}
          onPress={
            () => {
              console.log(todo);
              setTodo('');
            }
          }
        >
          <Text style={{ color: 'white' }}>Add Todo</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ToDoHeader;

const styles = StyleSheet.create({});

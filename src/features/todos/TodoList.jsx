import React from 'react'
import { Text, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function TodoList() {

    const todos = useSelector((state) => state.todos);
    console.log('Todos : ', todos, 'Todo lenght: ', todos.length);

    if (todos.length < 1) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Start creating a new Todo</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Todo List </Text>
            {
                todos.map((todo, index) => (
                    <Text style={styles.todoText} key={todo.id}> {`${index + 1}. ${todo.text}`}</Text>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    todoText: {
        margin: 4,
        color: 'black',
        fontWeight: 'bold'
    }
})

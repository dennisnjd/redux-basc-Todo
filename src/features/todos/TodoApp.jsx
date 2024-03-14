import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import NewFile from '../../NewFile'

export default function TodoApp() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> ToDo App </Text>
            <AddTodo />
            <NewFile />
            <TodoList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    }
})


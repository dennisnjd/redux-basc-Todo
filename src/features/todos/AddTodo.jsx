import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

export default function AddTodo() {
    const [text, setText] = useState();
    const dispatch = useDispatch();

    function handleSubmit() {
        dispatch(addTodo(text));
        setText('');
    }

    return (
        <View style={styles.conatiner}>
            <TextInput
                placeholder='Todo'
                value={text}
                onChangeText={setText}
                style={styles.input}
            />
            <Button title='Add' onPress={handleSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        margin:12,
        width:200,
    },
    input: {
        backgroundColor:'ghostwhite',
    }
})

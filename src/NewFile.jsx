import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'

export default function NewFile() {

    const contents = useSelector((state) => state.todos);

    if (contents.length < 1) {
        return (
            <View >
                <Text > Start creating a new Todo</Text>
            </View>
        )
    }

    return (
        <View >
            <Text> Contents </Text>
            {contents ? (
                contents.map((content, index) => 
                    (
                        <Text key={index}>{content.text}</Text>
                    )
                )) :
                console.log('No contents')
            }
        </View>
    )
}


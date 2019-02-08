import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text} from 'react-native';

class SubscribeScreen extends Component {

    render() {
        return (
            <ScrollView>
                <Text style={styles.textSecond}> Subscribe </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    textSecond: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 300,
    },
});

export default SubscribeScreen;
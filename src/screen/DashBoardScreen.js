import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text} from 'react-native';

class DashBoardScreen extends Component {

    render() {
        return (
            <ScrollView>
                <Text style={styles.textFirst}> DashBoard </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    textFirst: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 300,
    },
});

export default DashBoardScreen;
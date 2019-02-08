import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

class AlertsScreen extends Component {

    render() {
        return (
            <ScrollView>
                <Text style={styles.textFirst}> Alerts </Text>
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

export default AlertsScreen;
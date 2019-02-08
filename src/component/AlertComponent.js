import React, {Component} from "react";
import {Image, View} from 'react-native';
import AlertsScreen from "../screen/AlertsScreen";


class AlertComponent extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Image source={require('../assets/drawable/call.png')} style={[{tintColor: tintColor}]}/>),
    };

    render() {
        return (
            <View>
                <AlertsScreen/>
            </View>
        )
    }

}

export default AlertComponent;
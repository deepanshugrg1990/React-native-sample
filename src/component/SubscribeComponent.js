import React, {Component} from "react";
import {Image, View} from 'react-native';
import SubscribeScreen from "../screen/SubscribeScreen";


class SubscribeComponent extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Image source={require('../assets/drawable/subscribe.png')} style={[{tintColor: tintColor}]}/>),
    };

    render() {
        return (
            <View>
                <SubscribeScreen/>
            </View>
        )
    }

}

export default SubscribeComponent;
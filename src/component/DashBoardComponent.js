import React, {Component} from "react";
import {Image, View} from 'react-native';
import DashBoardScreen from "../screen/DashBoardScreen";


class DashBoardComponent extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Image source={require('../assets/drawable/dashBoard.png')} style={[{tintColor: tintColor}]}/>),
    };

    render() {
        return (
            <View>
                <DashBoardScreen/>
            </View>
        )
    }

}

export default DashBoardComponent;
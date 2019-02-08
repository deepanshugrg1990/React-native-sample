import React, {Component} from "react";
import {View} from 'react-native';
import ManageProfileScreen from "../screen/ManageProfileScreen";

class ManageProfileComponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <ManageProfileScreen/>
            </View>
        );
    }

}

export default ManageProfileComponent;
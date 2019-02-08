import React, {Component} from "react";
import {Image, View} from 'react-native';
import {HomeListScreen, HomeScreen} from "../screen";
import {Utility} from "../Utils";

class HomeComponent extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Image source={require('../assets/drawable/home.png')} style={[{tintColor: tintColor}]}/>),
    };

    render() {
        return (
            <View>
                <HomeScreen/>
                <HomeListScreen
                    itemClick={this.onClick}
                    list={Utility.getListData()}
                />
            </View>
        );
    }

    onClick = (positions) => {
        switch (positions) {
            case 0:
                this.props.navigation.navigate('ManageProfile');
                break;
            case 1:
                // Future Task
                break;
            case 2:
                // Future Task
                break;
            case 3:
                // Future Task
                break;
            case 4:
                // Future Task
                break;
        }

    }


}

export default HomeComponent;
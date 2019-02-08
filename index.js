import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createAppContainer, createStackNavigator} from "react-navigation";
import * as React from "react";
import TabNavigator from "./BottomTabNavigator";
import {ManageProfileComponent} from "./src/component";


const App = createStackNavigator({
    Home: {screen: TabNavigator, navigationOptions: {header: null}},
    ManageProfile: {screen: ManageProfileComponent, navigationOptions: {title: "Manage Profile"}}
});


AppRegistry.registerComponent(appName, () => createAppContainer(App));

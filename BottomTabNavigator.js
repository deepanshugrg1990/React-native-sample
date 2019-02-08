import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import * as React from "react";
import {AlertComponent, DashBoardComponent, HomeComponent, SubscribeComponent} from "./src/component";

const TabNavigator = createBottomTabNavigator({
        Home: {
            screen: HomeComponent,
        },
        Alerts: {
            screen: AlertComponent,
        },
        Subscribe: {
            screen: SubscribeComponent,
        },
        DashBoard: {
            screen: DashBoardComponent
        }
    }, {
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'gray',
            animationEnabled: true,
            showIcon: true,
            labelStyle: {
                fontSize: 14,
            },
            style: {
                height: 70,
                marginBottom: 5,
            }
        },
    }
);
export default createAppContainer(TabNavigator);
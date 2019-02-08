import React, {Component} from "react";
import {IndicatorViewPager, PagerDotIndicator} from "rn-viewpager";
import {StyleSheet, View} from "react-native";
import {Utility} from "../Utils"
import ViewPagerScreen from "./ViewPagerScreen";

class ManageProfileScreen extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{marginTop: 80}}>
                    <IndicatorViewPager
                        style={{height: 420}}
                        indicator={this._renderDotIndicator()}>
                        <ViewPagerScreen
                            data={Utility.getViewData()}
                        />
                    </IndicatorViewPager>
                </View>
            </View>


        );
    }

    _renderDotIndicator() {
        return (
            <PagerDotIndicator
                pageCount={Utility.getViewData().length}
                dotStyle={styles.selectDot}
                selectedDotStyle={styles.dot}
            />
        );
    }
}


const styles = StyleSheet.create({
    outerCircle: {
        width: 300,
        height: 300,
        borderRadius: 300 / 2,
        backgroundColor: 'red'
    },

    innerCircle: {
        width: 270,
        height: 270,
        margin: 15,
        borderRadius: 270 / 2,
        backgroundColor: 'gray'
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 10 >> 1,
        backgroundColor: '#BBBBBB',
        margin: 10 >> 1
    },
    selectDot: {
        backgroundColor: 'black'
    }
});


export default ManageProfileScreen;
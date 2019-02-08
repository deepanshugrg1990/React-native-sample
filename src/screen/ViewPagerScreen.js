import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';

class ViewPagerScreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                {this.renderView(this.props.data)}
            </View>
        );
    }

    renderView = (array) => {
        return array.map((item, index) => {
            return (
                <View style={styles.topBackGround}
                      key={item}>
                    <View style={styles.outerCircle}>
                        <View style={[styles.innerCircle, {
                            position: 'absolute', justifyContent: 'center',
                            alignItems: 'center'
                        }]}>
                            <Image style={{width: 100, height: 100}} source={item.icon}/>
                        </View>
                    </View>
                </View>
            )
        })
    }
}


const styles = StyleSheet.create({
    outerCircle: {
        width: 300,
        height: 300,
        borderRadius: 300 / 2,
        backgroundColor: 'red',
        position: 'absolute'
    },

    innerCircle: {
        width: 270,
        height: 270,
        margin: 15,
        borderRadius: 270 / 2,
        backgroundColor: 'gray'
    },
    topBackGround:{
        backgroundColor: 'white', alignItems: 'center'
    }
});

export default ViewPagerScreen;
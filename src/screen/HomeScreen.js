import React, {Component} from "react";
import {Image, StyleSheet, Text, View} from 'react-native';

class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.headerStyle}>
                <View style={{alignItems: 'center'}}>
                    <View style={{alignItems: 'center'}}>
                        <View style={styles.hexagon2}>
                            <View style={styles.hexagonInner2}/>
                            <View style={styles.hexagonBefore2}/>
                            <View style={styles.hexagonAfter2}/>
                        </View>
                    </View>

                    <View style={{position: 'absolute', alignItems: 'center'}}>
                        <View style={[styles.hexagon]}>
                            <View style={styles.hexagonInner}/>
                            <View style={styles.hexagonBefore}/>
                            <View style={styles.hexagonAfter}/>
                        </View>
                        <Image source={require('../assets/drawable/home.png')} style={styles.imageViewStyle}/>
                    </View>
                    <Text style={styles.textStyle}>Shobhit Siwach</Text>
                    <Text style={styles.textStyle2}>Subscription - AFN for 15 days</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        height: 210,
        backgroundColor: '#ff6666',
        width: '100%',
        flexDirection: 'column'
    },
    hexagon: {
        marginTop: 40,
        width: 100,
        height: 55
    },
    hexagon2: {
        marginTop: 40,
        width: 110,
        height: 60
    },
    hexagonInner: {
        width: 100,
        height: 55,
        backgroundColor: 'white'
    },
    hexagonInner2: {
        width: 110,
        height: 60,
        backgroundColor: 'red'
    },
    hexagonAfter: {
        position: 'absolute',
        bottom: -25,
        left: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 50,
        borderLeftColor: 'transparent',
        borderRightWidth: 50,
        borderRightColor: 'transparent',
        borderTopWidth: 25,
        borderTopColor: 'white'

    },
    hexagonAfter2: {
        position: 'absolute',
        bottom: -27,
        left: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 55,
        borderLeftColor: 'transparent',
        borderRightWidth: 55,
        borderRightColor: 'transparent',
        borderTopWidth: 27,
        borderTopColor: 'red'
    },
    hexagonBefore: {
        position: 'absolute',
        top: -24,
        left: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 50,
        borderLeftColor: 'transparent',
        borderRightWidth: 50,
        borderRightColor: 'transparent',
        borderBottomWidth: 25,
        borderBottomColor: 'white'
    },

    hexagonBefore2: {
        position: 'absolute',
        top: -28,
        left: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 55,
        borderLeftColor: 'transparent',
        borderRightWidth: 55,
        borderRightColor: 'transparent',
        borderBottomWidth: 25,
        borderBottomColor: 'red'

    },
    imageViewStyle: {
        position: 'absolute',
        width: 50,
        height: 40,
        marginTop: 45
    },
    textStyle: {
        marginTop: 30,
        fontSize: 27,
        color: 'white'
    },
    textStyle2: {
        fontSize: 12,
        justifyContent: 'center',
        color: 'white'
    }
});

export default HomeScreen;

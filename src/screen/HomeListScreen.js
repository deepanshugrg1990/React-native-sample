import React, {Component} from "react";
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

class HomeListScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.list
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={{marginTop: 20}}>
                    {this.getRowView(this.state.data)}
                </View>
            </ScrollView>
        )
    }

    getRowView = (array) => {
        return array.map((item, index) => {
            return (
                <TouchableOpacity key={index}
                                  onPress={() => this.props.itemClick(index)}>
                    <View style={styles.rowStyle}>
                        <View style={styles.textIconStyle}>
                            <Image source={item.icon}/>
                            <Text style={styles.textStyle}> {item.text}</Text>
                        </View>
                        <View style={styles.endViewStyle}>
                            <Text style={styles.textStyles}>{'>'}</Text>
                        </View>

                    </View>
                </TouchableOpacity>)
        })
    };
}

const styles = StyleSheet.create({
    rowStyle: {
        height: 50,
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:15
    },
    textStyle: {
        fontSize: 17,
        marginLeft: 5,
        fontWeight: '300',
        color: 'black',
    },
    textIconStyle: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    endViewStyle: {
        flex: 0.5,
        alignItems: 'flex-end',
        marginRight: 20
    },
    textStyles: {
        fontSize: 25,
        alignItems: 'flex-end'
    }
});

export default HomeListScreen;
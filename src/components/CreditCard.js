'use strict'
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, Text, Dimensions, View, Image } from 'react-native';

import { lightTheme } from '../theme/colors';


const { width } = Dimensions.get('window')
const prdWidth = (width - 2) / 2

export default class CreditCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "JOHN DOE",
            cardNumber: 'XXXX XXXX XXXX 3456',
            exp: "07/24",
            cvv: 'XXX'
        };
    }


    async componentDidMount() {
        this.setState({ name: name.firstName + ' ' + name.lastName })
    }

    hideCardDetails() {
        this.setState(
            {
                name: "JOHN DOE",
                cardNumber: "lllll",
                exp: "07/24",
                cvv: 'XXX'
            }
        )
    }


    render() {
        const { show } = this.props;
        console.warn(show)
        return (
            <View style={styles.card_container}>
                <View style={[styles.card_body, {backgroundColor: lightTheme.SECONDARY_COLOR}]} >
                    <View style={styles.card_part_one}>
                    <Image
                            style={{ width: 80, height: 40 }}
                            resizeMode='contain'
                            source={require('../assets/images/master.png')}
                        />
                        <View style={{ color: lightTheme.DEFAULT_COLOR, fontSize: 12, fontWeight: '200', flex: 1, }}>
                        </View>
                       
                    </View>
                    <View style={styles.card_part_two}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' ,marginVertical:15}}>
                            <Text style={{ color: lightTheme.DEFAULT_COLOR, fontSize: 12, marginRight: 15, marginBottom:10, fontFamily: 'Proxima-nova-SemiBold' }}>{this.state.cardNumber}</Text>
                        </View>
                    </View>

                    <View style={styles.card_part_three}>
                        <View style={styles.card_details}>
                            <Text style={{ color: lightTheme.DEFAULT_COLOR, fontSize: 12, fontFamily: 'Proxima-nova-Bold', fontWeight: '200', }}>{this.state.name}</Text>
                        </View>
                        <View style={styles.card_chip}>
                        <Text style={{ flex: 1, color: lightTheme.DEFAULT_COLOR, fontSize: 10, marginRight: 15, fontFamily: 'Proxima-nova-SemiBold' }}>Expires: {this.state.exp}</Text>

                        </View>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    card_container: {
        alignItems: 'center',
    },
    card_body: {
        backgroundColor: 'green',
        width: Dimensions.get('window').width / 1.3,
        borderRadius: 5,
    },
    card_part_one: {
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,

    },
    card_part_two: {
        marginLeft: 20,
        marginRight: 20,
    },
    card_part_three: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },
    card_details: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    card_chip: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})



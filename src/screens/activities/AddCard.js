import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    StatusBar,
    Image,
    Dimensions,
    Keyboard,
    ImageBackground,
    ScrollView

} from 'react-native';
import { Container, Content } from 'native-base';
import { lightTheme } from '../../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import * as images from '../../assets/images';
import { Icon } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HeaderBar from '../../components/HeaderBar';



export default class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,

        };
    }

    async componentDidMount() {

    }


    async loginRequest() {

        const { email, password, is_valide_mail } = this.state

    }


    render() {

        if (this.state.loading) {
            return (
                <ActivityIndicator message={'Verifying...'} />
            );
        }
        return (
            <Container style={{ backgroundColor: 'transparent' }}>
                <StatusBar backgroundColor={lightTheme.PRIMARY_COLOR_LIGHT} barStyle="Light-content" />
                <Content>
                    <View style={styles.body}>
                        <View style={{ backgroundColor: lightTheme.DEFAULT_COLOR }}>

                            <View style={styles.header}>
                                <LinearGradient colors={[lightTheme.PRIMARY_COLOR, lightTheme.PRIMARY_COLOR_LIGHT]} start={{ x: 1, y: 1 }} end={{ x: 1, y: 0 }} style={{ flex: 1 }}>
                                    <View style={{ flex: 1 }}>

                                    <HeaderBar
                                            image={images.user}
                                            onNotificationPress={()=> console.warn('llfllfl')}
                                        />
                                        <View style={{ marginLeft: 20, justifyContent: 'center', marginTop: 20 }}>

                                            <Text style={{ marginTop: 5, fontSize: 10, color: lightTheme.PRIMARY_TEXT_COLOR, textAlign: 'left', fontFamily: 'Montserrat-Regular' }}>Available Balance</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                <View style={{ height: 8, width: 8, borderRadius: 10, backgroundColor: lightTheme.SECONDARY_COLOR, marginRight: 6 }} />
                                                <Text style={{ fontSize: 10, color: lightTheme.PRIMARY_TEXT_COLOR, textAlign: 'left', fontFamily: 'Montserrat-Regular' }}>NGN 4,000</Text>
                                            </View>

                                        </View>


                                    </View>

                                </LinearGradient>
                            </View>
                        </View>
                        <View style={styles.mainbody}>

                        </View>
                        <View style={{ flex: 1, height: Dimensions.get('window').height }}>
                        </View>
                    </View>
                </Content>
                <View style={{ position: 'absolute', left: 0, top: 180, flex: 1, width: Dimensions.get('window').width, alignItems: 'center', height: Dimensions.get('window').height, }}>
                    <View style={{ flex: 1, backgroundColor: '#fff', width: Dimensions.get('window').width - 50, height: Dimensions.get('window').height, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginLeft: 15 }}>
                            <Text style={{ fontSize: 12, color: lightTheme.SECONDARY_TEXT_COLOR, textAlign: 'left', fontFamily: 'Montserrat-Regular' }}>Connect a Debit Card</Text>
                        </View>

                        <ScrollView showsHorizontalScrollIndicator={false}>
                            {this.renderGallery()}
                        </ScrollView>
                    </View>
                </View>
            </Container>
        );
    };

    renderGallery() {
        return (
            <View style={{ marginTop: 20 }}>

                <View style={styles.textInputContainer}>
                    <View style={styles.text_icon}>
                        <Icon
                            name="credit-card"
                            size={20}
                            type='font-awesome'
                            color={lightTheme.SECONDARY_TEXT_COLOR + "75"}
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            placeholder="Card number"
                            placeholderTextColor={lightTheme.SECONDARY_TEXT_COLOR}
                            secureTextEntry
                            returnKeyType="next"
                            onSubmitEditing={() => this.loginRequest()}
                            keyboardType='password'
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={{ flex: 1, fontSize: 10, color: lightTheme.SECONDARY_TEXT_COLOR, fontFamily: 'Montserrat-Regular', }}
                            onChangeText={(text) => this.setState({ password: text })}
                            onSubmitEditing={() => this.passwordInput.focus()}
                        />
                    </View>
                </View>


                <View style={styles.textInputContainer}>
                    <View style={styles.input}>
                        <TextInput
                            placeholder="CVV"
                            placeholderTextColor={lightTheme.SECONDARY_TEXT_COLOR}
                            secureTextEntry
                            returnKeyType="next"
                            onSubmitEditing={() => this.loginRequest()}
                            keyboardType='password'
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={{ flex: 1, fontSize: 10, color: lightTheme.SECONDARY_TEXT_COLOR, fontFamily: 'Montserrat-Regular', }}
                            onChangeText={(text) => this.setState({ password: text })}
                            onSubmitEditing={() => this.passwordInput.focus()}
                        />
                    </View>
                </View>



                <View style={styles.textInputContainer}>
                    <View style={styles.text_icon}>
                        <Icon
                            name="calendar"
                            size={18}
                            type='font-awesome'
                            color={lightTheme.SECONDARY_TEXT_COLOR + "75"}
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            placeholder="Expiry"
                            placeholderTextColor={lightTheme.SECONDARY_TEXT_COLOR}
                            secureTextEntry
                            returnKeyType="next"
                            onSubmitEditing={() => this.loginRequest()}
                            keyboardType='password'
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={{ flex: 1, fontSize: 10, color: lightTheme.SECONDARY_TEXT_COLOR, fontFamily: 'Montserrat-Regular', }}
                            onChangeText={(text) => this.setState({ password: text })}
                            onSubmitEditing={() => this.passwordInput.focus()}
                        />
                    </View>
                </View>



                <View style={styles.textInputContainer}>
                    <View style={styles.text_icon}>
                        <Icon
                            name="key"
                            size={20}
                            type='font-awesome'
                            color={lightTheme.SECONDARY_TEXT_COLOR + "75"}
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            placeholder="Pin"
                            placeholderTextColor={lightTheme.SECONDARY_TEXT_COLOR}
                            secureTextEntry
                            returnKeyType="next"
                            onSubmitEditing={() => this.loginRequest()}
                            keyboardType='password'
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={{ flex: 1, fontSize: 10, color: lightTheme.SECONDARY_TEXT_COLOR, fontFamily: 'Montserrat-Regular', }}
                            onChangeText={(text) => this.setState({ password: text })}
                            onSubmitEditing={() => this.passwordInput.focus()}
                        />
                    </View>
                </View>


                <View style={{ marginTop: 6, marginHorizontal: 15 }}>

                    <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: lightTheme.PRIMARY_COLOR }]} block iconLeft>
                        <Text style={{ color: '#fff', fontSize: 11, fontWeight: '600', marginHorizontal: 8 }}>Buy Now </Text>

                    </TouchableOpacity>
                </View>
            </View>

        );
    }

}


const styles = StyleSheet.create({
    body: {
        width: Dimensions.get('window').width,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: Dimensions.get('window').height / 2,

    },
    mainbody: {
        width: Dimensions.get('window').width,
        flex: 1,
        backgroundColor: lightTheme.DEFAULT_COLOR
    },

    profile_container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    profile_name: {
        marginTop: 5,
        fontSize: 22,
        color: lightTheme.PRIMARY_TEXT_COLOR,
        textAlign: 'center',
        fontFamily: 'Montserrat-SemiBold'
    },
    profile_about: {
        marginTop: 5,
        fontSize: 15,
        color: lightTheme.PRIMARY_TEXT_COLOR,
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular'
    },
    buttonContainer: {
        height: 40,
        backgroundColor: lightTheme.PRIMARY_TEXT_COLOR,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 7,
        marginTop: 10,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
       
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 10
    },

    textInputContainer: {
        flexDirection: 'row',
        marginRight: 20,
        marginLeft: 20,
        height: 40,
        borderColor: lightTheme.SECONDARY_TEXT_COLOR,
        marginBottom: 10,
        marginTop: 10,
        paddingLeft: 5,
        borderBottomWidth: 0.5,
    },
    input: {
        flex: 1,
        marginLeft: 5,
        color: lightTheme.SECONDARY_TEXT_COLOR,
    },
    text_icon: {
        alignItems: 'center',
        justifyContent: 'center',
    },


});

//#7758b4

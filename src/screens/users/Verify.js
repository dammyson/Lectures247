import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    StatusBar,
    Alert,
    Dimensions,
    Keyboard,
    ImageBackground

} from 'react-native';
import { Container, Content } from 'native-base';
import { lightTheme } from '../../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { getHeaders, processResponse, baseUrl, showTopNotification } from '../../utilities';
import ActivityIndicator from '../../components/ActivityIndicator';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            token:'',
        };
    }

    async componentDidMount() {

    }

    async loginRequest() {

        const { token } = this.state
        if (token == "") {
            showTopNotification('warning', 'field(s) cannot be empty')
            return
        }
        var body = JSON.stringify({
            token: token,
        })

        this.setState({ loading: true })
        fetch(baseUrl() + 'accounts/verify-email', {
            method: 'POST', headers: getHeaders(false, ""), body: body
        })
            .then(processResponse)
            .then(res => {
                this.setState({ loading: false })
                const { data, statusCode} = res
                console.warn( data, statusCode);
                if (res.statusCode==200) {
                    this.props.navigation.navigate('login');
                } else {
                    showTopNotification('error', res.message)
                }
            }).catch((error) => {
                this.setState({ loading: false })
                showTopNotification('error', error.message)
            });
    }


    render() {

        if (this.state.loading) {
            return (
                <ActivityIndicator message={'Verify...'} />
            );
        }
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={lightTheme.PRIMARY_COLOR_LIGHT} barStyle="Light-content" />
                <LinearGradient colors={[lightTheme.PRIMARY_COLOR, lightTheme.PRIMARY_COLOR_LIGHT]} start={{ x: 1, y: 1 }} end={{ x: 1, y: 0 }} style={{ flex: 1, height: Dimensions.get('window').height, }}>
                    <Container style={{ backgroundColor: 'transparent' }}>
                        <Content>
                            <View style={styles.backgroundImage}>
                                <View style={styles.mainbody}>
                                    <View style={{ marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: 15, }}>
                                        <View style={{ height: 80, width: 80, borderRadius: 50, backgroundColor: lightTheme.SECONDARY_COLOR, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: 15, }}>
                                            <FontAwesome5
                                                name="user-alt"
                                                size={40}
                                                color={lightTheme.DEFAULT_COLOR}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: 15, }}>
                                        <Text style={{ color: lightTheme.DEFAULT_COLOR, fontFamily: 'Montserrat-Bold', fontSize: 20, marginBottom: 2, marginTop: 2 }}>V E R I F Y</Text>
                                    </View>
                                    <View style={styles.textInputContainer}>
                                        <View style={styles.input}>
                                            <TextInput
                                                placeholder="Email"
                                                placeholderTextColor={lightTheme.DEFAULT_COLOR}
                                                returnKeyType="next"
                                                keyboardType='email-address'
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                defaultValue={this.state.email}
                                                style={{ flex: 1, fontSize: 14, color: lightTheme.DEFAULT_COLOR, fontFamily: 'Montserrat-SemiBold', }}
                                                onChangeText={(text) => this.setState({ token: text })}
                                                onSubmitEditing={() => this.passwordInput.focus()}
                                            />
                                        </View>
                                    </View>

                                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.loginRequest()} >
                                        <Text style={{ fontFamily: 'Montserrat-Regular', color: '#fff', fontSize: 14 }}>Verify</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Content>
                    </Container>
                </LinearGradient>
            </View>

        );
    };



}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9a57c3'
    },
    backgroundImage: {
        width: Dimensions.get('window').width,
    },
    mainbody: {
        width: Dimensions.get('window').width,
        flex: 1,
        justifyContent: 'center'
    },
    textInputContainer: {
        flexDirection: 'row',
        marginRight: 20,
        marginLeft: 20,
        height: 45,
        borderColor: lightTheme.DEFAULT_COLOR,
        marginBottom: 15,
        marginTop: 10,
        paddingLeft: 12,
        borderBottomWidth: 0.6,

        borderRadius: 40
    },
    input: {
        flex: 1,
        marginLeft: 15,
    },
    text_icon: {
        padding: 10,
        borderRightWidth: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        height: 50,
        marginRight: 50,
        marginLeft: 50,
        marginTop: 13,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: lightTheme.SECONDARY_COLOR
    },

});

//#7758b4

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
    ImageBackground
} from 'react-native';
import { Container, Content } from 'native-base';
import { lightTheme } from '../../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import * as images from '../../assets/images/';
import { Icon } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HeaderBar from '../../components/HeaderBar';
import { ScrollView } from 'react-native';

import StarRating from 'react-native-star-rating';
import CreditCard from '../../components/CreditCard';

export default class Home extends Component {
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
                <View style={{ position: 'absolute', left: 0, top: 160, flex: 1, width: Dimensions.get('window').width, alignItems: 'center', height: Dimensions.get('window').height, }}>
                    <View style={{ flex: 1, backgroundColor: '#fff', width: Dimensions.get('window').width - 50, height: Dimensions.get('window').height, paddingHorizontal: 5 }}>


                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginLeft: 15 }}>
                            <CreditCard />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginLeft: 15 }}>
                            <Text style={{ fontSize: 12, color: lightTheme.SECONDARY_TEXT_COLOR, textAlign: 'left', fontFamily: 'Montserrat-Regular' }}>Categories</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 6 }}>

                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                                <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: lightTheme.PRIMARY_COLOR }]} block iconLeft>
                                    <Text style={{ color: '#fff', fontSize: 12, fontWeight: '600', marginHorizontal: 15 }}>Enterpreneur </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonContainer} block iconLeft>
                                    <Text style={{ color: '#000', fontSize: 12, fontWeight: '600', marginHorizontal: 15 }}> Engineering </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonContainer} block iconLeft>
                                    <Text style={{ color: '#000', fontSize: 12, fontWeight: '600', marginHorizontal: 15 }}>Computer </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonContainer} block iconLeft>
                                    <Text style={{ color: '#000', fontSize: 12, fontWeight: '600', marginHorizontal: 15 }}>Economics </Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginLeft: 15 }}>
                            <Text style={{ fontSize: 12, color: lightTheme.SECONDARY_TEXT_COLOR, textAlign: 'left', fontFamily: 'Montserrat-Regular' }}>Featured Courses</Text>
                        </View>
                        <ScrollView showsHorizontalScrollIndicator={false}>
                            {this.renderGallery(menuItems)}
                        </ScrollView>

                    </View>
                </View>
            </Container>
        );
    };




    renderGallery(data) {
        return (
            <View style={styles.table}>
                {data.map((data, id) => (
                    <View style={styles.cell} key={id}>
                        <ImageBackground
                            source={{ uri: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg' }}
                            style={{ height: 100, marginHorizontal: 10, marginVertical: 5 }}
                            imageStyle={{ borderRadius: 5, }}
                        >
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                                <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: lightTheme.SECONDARY_COLOR }]} block iconLeft>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
                                        <Icon
                                            name="controller-play"
                                            size={20}
                                            type='entypo'
                                            color={lightTheme.DEFAULT_COLOR}
                                        />
                                    </View>

                                </TouchableOpacity>
                            </View>

                        </ImageBackground>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginLeft: 15 }}>
                            <Text style={{ fontSize: 10, color: lightTheme.SECONDARY_TEXT_COLOR, textAlign: 'left', fontFamily: 'Montserrat-Bold' }}>Introduction to Nature</Text>
                        </View>
                        <View style={{ marginLeft: 15, width: 100, marginTop: 3 }}>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={this.state.starCount}
                                selectedStar={(rating) => this.setState({ starCount: rating })}
                                iconSet={'FontAwesome'}
                                starSize={15}
                                starStyle={{ borderColor: 'red' }}
                                fullStarColor={lightTheme.PRIMARY_COLOR}
                                emptyStarColor={lightTheme.PRIMARY_COLOR}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginLeft: 15 }}>
                            <Text style={{ fontSize: 10, color: lightTheme.SECONDARY_TEXT_COLOR, textAlign: 'left', fontFamily: 'Montserrat-Regular' }}>3,000 NGN</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 6, marginLeft: 5 }}>

                            <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: lightTheme.PRIMARY_COLOR }]} block iconLeft>
                                <Text style={{ color: '#fff', fontSize: 10, fontWeight: '600', marginHorizontal: 8 }}>Buy Now </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: lightTheme.SECONDARY_COLOR }]} block iconLeft>
                                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                                    <Icon
                                        name="shoppingcart"
                                        size={20}
                                        type='antdesign'
                                        color={lightTheme.DEFAULT_COLOR}
                                    />
                                </View>

                            </TouchableOpacity>
                        </View>

                    </View>
                ))}
            </View>

        );
    }





}


const menuItems = [
    { id: 1, data: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg', },
    { id: 2, data: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg', },
    { id: 3, data: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg', },
    { id: 3, data: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg', },
    { id: 1, data: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg', },
    { id: 2, data: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg', },
    { id: 3, data: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg', },
    { id: 3, data: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg', },
];

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
        height: 30,
        backgroundColor: lightTheme.PRIMARY_TEXT_COLOR,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 3,
        marginTop: 5,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 10
    },

    table: {
        marginTop: 15,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    cell: {
        flexBasis: '50%',
        flex: 1,
    },

});


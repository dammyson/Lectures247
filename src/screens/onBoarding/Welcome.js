import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  Animated,
  Easing,
  FlatList,
  ScrollView,
} from 'react-native';
import { Container, Content } from 'native-base';
import { lightTheme } from '../../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import * as images from '../../assets/images/';

const { BACKGROUND_COLOR } = lightTheme;

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
    }).start();
  }

  renderItem = ({ item }) => (
    <View style={{ backgroundColor: 'red', flexGrow: 1, height: "50%", width: "50%", marginVertical: 10, marginHorizontal: 10 }}>
      <Text>{item.title}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={lightTheme.PRIMARY_COLOR_LIGHT} barStyle="Light-content" />
        <LinearGradient colors={[lightTheme.PRIMARY_COLOR, lightTheme.PRIMARY_COLOR_LIGHT]} start={{ x: 1, y: 1 }} end={{ x: 1, y: 0 }} style={{ flex: 1, height: Dimensions.get('window').height, }}>

          <View style={styles.backgroundImage}>
            <Image
              style={styles.logo}
              source={images.logo}
            />
          </View>
          <View style={{ height: 100, flexDirection: 'row' }}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('login')} >
              <Text style={{ fontFamily: 'Montserrat-Regular', color: '#fff', fontSize: 14 }}>SIGN IN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('register')} >
              <Text style={{ fontFamily: 'Montserrat-Regular', color: '#fff', fontSize: 14 }}>SIGN UP</Text>
            </TouchableOpacity>


          </View>

        </LinearGradient>
      </View>
    );
  }
}

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9a57c3'
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 70,
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  buttonContainer: {
    height: 50,
    flex:1,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 13,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1,
    borderColor: lightTheme.DEFAULT_COLOR
  },
});

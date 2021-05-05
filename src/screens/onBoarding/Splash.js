import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    AsyncStorage,
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

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  componentDidMount() {
    setTimeout(() => {
      this.initPage();
    }, 3000);
  }


  initPage = () => {
    AsyncStorage.getItem('login').then((value) => {
      if (value == 'true') {
        this.props.navigation.replace('app');
      } else if (value == null) {
        this.props.navigation.replace('Welcome');
      } else {
        this.props.navigation.replace('Welcome');
      }

    })

  }


  render() {
    return (
      <View style={styles.container}>
                <StatusBar backgroundColor={lightTheme.PRIMARY_COLOR_LIGHT} barStyle="Light-content" />
                <LinearGradient colors={[lightTheme.PRIMARY_COLOR, lightTheme.PRIMARY_COLOR_LIGHT]} start={{ x: 1, y: 1 }} end={{ x: 1, y: 0 }} style={{ flex: 1, height: Dimensions.get('window').height, }}>
                    <Container style={{ backgroundColor: 'transparent' }}>

                        <Content>
                            <View style={styles.backgroundImage}>
                            <Image
            style={styles.logo}
            source={images.logo} 
          />
                            </View>
                        </Content>

                    </Container>
                </LinearGradient>
            </View>

    );
  }
}




const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#9a57c3'
  },
  backgroundImage: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      justifyContent:'center',
      alignItems:'center'
  },
  logo: {
    width: 200,
    height: 70,
    justifyContent: 'center',
    resizeMode: 'contain'
  }

});
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
import { lightTheme } from '../theme/colors';
import { Icon } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class HeaderBar extends Component {
  render() {
    const { image, onPress } = this.props;
    return (
      <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 20 }}>

        <View style={{}}>
          <Image
            source={image}
            style={{ width: 80, height: 80, borderRadius: 150, borderWidth: 1, borderColor: lightTheme.DEFAULT_COLOR }}
          />
          <View style={{ position: 'absolute', right: -5, bottom: 0, height: 30, width: 30, borderRadius: 50, backgroundColor: lightTheme.SECONDARY_COLOR, justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesome5
              name="camera"
              size={15}
              color={lightTheme.DEFAULT_COLOR}

            />
          </View>

        </View>

        <View style={{ marginLeft: 20, justifyContent: 'center', flex: 1 }}>

          <Text style={{ marginTop: 5, fontSize: 14, color: lightTheme.PRIMARY_TEXT_COLOR, textAlign: 'left', fontFamily: 'Montserrat-SemiBold' }}>WELCOME</Text>
          <Text style={{ fontSize: 14, color: lightTheme.PRIMARY_TEXT_COLOR, textAlign: 'left', fontFamily: 'Montserrat-SemiBold' }}>JOHN</Text>
          <Text style={{ fontSize: 9, color: lightTheme.PRIMARY_TEXT_COLOR, textAlign: 'left', fontFamily: 'Montserrat-Regular' }}>Good to see you again</Text>


        </View>

        <View style={{ marginLeft: 20, justifyContent: 'center', }}>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <TouchableOpacity style={{ marginHorizontal: 6 }}>
              <Icon
                name="bell"
                size={20}
                type='feather'
                color={lightTheme.DEFAULT_COLOR}
              />
            </TouchableOpacity>

            <TouchableOpacity style={{ marginHorizontal: 6 }}>
              <Icon
                name="setting"
                size={20}
                type='antdesign'
                color={lightTheme.DEFAULT_COLOR}
              />
            </TouchableOpacity>

          </View>

          <View style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity style={{ marginHorizontal: 4, marginTop: 9 }}>
              <Icon
                name="shoppingcart"
                size={20}
                type='antdesign'
                color={lightTheme.DEFAULT_COLOR}
              />
            </TouchableOpacity>



          </View>

        </View>
      </View>
    );
  }
}

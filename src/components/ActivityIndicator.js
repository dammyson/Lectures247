import React from 'react'
import { StyleSheet, StatusBar, Dimensions, View, Text } from 'react-native'
import PropTypes from 'prop-types';
import { SkypeIndicator } from 'react-native-indicators';
import { lightTheme } from '../theme/colors';

const width = Dimensions.get('window').width

const ActivityIndicator = ({message}) => {
  return (
    <View  style={styles.loadingBackgroundImage}  resizeMode="cover">
      <StatusBar barStyle="light-content" hidden={false} translucent backgroundColor="transparent" />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.welcome}>
          <SkypeIndicator color={lightTheme.SECONDARY_COLOR} size={45} />
          <Text style={{ color: lightTheme.SECONDARY_COLOR, fontFamily: 'Poppins-Light', fontSize: 13, marginBottom: 2, marginTop: 2 }}>{message}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loadingBackgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: lightTheme.PRIMARY_COLOR,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  welcome: {
    height: 85
  },

});

export default ActivityIndicator
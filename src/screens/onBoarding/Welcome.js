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
import { lightTheme } from '../../theme/colors';

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
        <StatusBar
          backgroundColor={BACKGROUND_COLOR}
          barStyle="light-content"
        />
        <View style={styles.header}>

        </View>
      </View>
    );
  }
}

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <View>
        <View style={styles.View_10}>
          <Icon name="align-justify" />
        </View>
      </View>
      <View>
        <View style={styles.View_20}>
          <Text style={styles.Text_27}>M.U.A.</Text>
          <Text style={styles.Text_29}>Making Up Acronyms</Text>
        </View>
      </View>
      <Button
        title="START GAME"
        color="#030303"
        style={styles.Button_5}
        onPress={() => this.props.navigation.navigate("SplashScreen1155494")}
      />
      <Button
        title="JOIN GAME"
        color="#ffffff"
        style={styles.Button_21}
        onPress={() => this.props.navigation.navigate("SplashScreen1155494")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  View_9: {},
  View_10: { height: -11 },
  Icon_25: {},
  View_18: {},
  View_20: { alignSelf: "center" },
  Text_27: {
    height: 100,
    alignSelf: "center",
    fontSize: 87,
    color: "#b26262",
    fontFamily: "Lato-Regular",
    letterSpacing: 6
  },

  Text_29: {
    alignSelf: "center",
    fontFamily: "Lato-Regular",
    textAlign: "center"
  },

  Button_5: {
    width: "97%",
    marginLeft: 3,
    paddingTop: 14,
    alignSelf: "center",
    color: "#fcfcfc",
    fontFamily: "Roboto-Bold",
    letterSpacing: 4
  },

  Button_21: {
    width: "97%",
    marginLeft: 3,
    paddingTop: 14,
    alignSelf: "center",
    fontFamily: "Roboto-Bold",
    letterSpacing: 4
  },
  View_1: {},
  View_9: {},
  View_10: { height: -11 },
  Icon_25: {},
  View_18: {},
  View_20: { alignSelf: "center" },
  Text_27: {
    height: 100,
    alignSelf: "center",
    fontSize: 87,
    color: "#b26262",
    fontFamily: "Lato-Regular",
    letterSpacing: 6
  },
  Text_29: {
    alignSelf: "center",
    fontFamily: "Lato-Regular",
    textAlign: "center"
  },
  Button_5: {
    width: "97%",
    marginLeft: 3,
    paddingTop: 14,
    alignSelf: "center",
    color: "#fcfcfc",
    fontFamily: "Roboto-Bold",
    letterSpacing: 4
  },
  Button_21: {
    width: "97%",
    marginLeft: 3,
    paddingTop: 14,
    alignSelf: "center",
    fontFamily: "Roboto-Bold",
    letterSpacing: 4
  }
})

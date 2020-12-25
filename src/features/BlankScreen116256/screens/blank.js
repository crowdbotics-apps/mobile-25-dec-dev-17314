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
  StyleSheet,
  ScrollView
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

  state = { CheckBox_2: true }

  render = () => (
    <View>
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_2}
        onPress={nextChecked => this.setState({ CheckBox_2: nextChecked })}
      />
      <Image
        source={{
          uri:
            "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/2_Q1v8Fiy.jpg"
        }}
        style={styles.Image_3}
      />
      <View style={styles.View_4}>
        <View />
        <View>
          <Image
            source={{
              uri:
                "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/2_Q1v8Fiy.jpg"
            }}
          />
        </View>
      </View>
      <View>
        <View>
          <Image
            source={{
              uri:
                "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/2_Q1v8Fiy.jpg"
            }}
          />
        </View>
        <View />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  CheckBox_2: {},
  Image_3: { width: 100, height: 100 },
  View_4: { flexDirection: "row" },
  View_5: {},
  View_6: {},
  Image_14: {},
  View_7: {},
  View_8: {},
  Image_11: {},
  View_9: {}
})

/**
 * Created by ${USER} on ${DATE}
 */
 
 import  React, {Component} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  DeviceEventEmitter,
} from 'react-native';
import {Toast,} from 'teaset'
import { SafeAreaView } from "react-navigation";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class teacherPage extends Component {
  static navigationOptions = {
    title:''
  }

  componentDidMount() {

  }
  constructor(props){
    super(props);
    this.state={

    }
  }

  componentWillUnmount() {
  }

  render(){
    return(
      <SafeAreaView style={styles.safeArea}>

      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF'
  },

});

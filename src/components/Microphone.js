import Voice from '@react-native-community/voice';
import React, {Component} from 'react';
import { Permissions, Button } from 'react-native';

class Microphone extends Component {
  constructor(props) {
    super(props);
  }

  onStartButtonPress = () => {
    Voice.start('en-US');
  }

  async componentDidMount() {
    const { status, expires, permissions } = await Permissions.askAsync(
      Permissions.AUDIO_RECORDING
    );
    if (status !== "granted") {
      this.setState({showRecordButton: false});
    } else {
      this.setState({showRecordButton: true});
    }
  }

  render() {
    return (
      <Button
        title="Voice Control"
        onPress={this.onStartButtonPress} />
    )
  }
}

export default Microphone;

import React from 'react';
import { StyleSheet, Button } from 'react-native';
import Voice from '@react-native-community/voice';

export default class Microphone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recognized: false,
      started: false,
      results: [],
    };
    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart(e) {
    this.setState({
      started: true,
    });
  };

  onSpeechRecognized(e) {
    this.setState({
      recognized: true,
    });
  };

  onSpeechResults(e) {
    console.warn('you said', e.value);
    this.setState({
      results: e.value,
    });
  }

  async _startRecognition(e) {
    this.setState({
      recognized: false,
      started: true,
      results: [],
    });
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  }

  render () {
    return (
      <Button style={styles.transcript}
        onPress={this._startRecognition.bind(this)}
        title="Start" />
    );
  }
}

const styles = StyleSheet.create({
  transcript: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 1,
    top: '400%',
  },
});

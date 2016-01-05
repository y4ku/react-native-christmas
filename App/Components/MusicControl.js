var React = require('react-native');
var api = require('../Utils/api');

var AudioPlayer = require('react-native-audioplayer');

var {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
  playContainer: {
    flexDirection: 'row',
    padding: 20
  },
  textView: {
    flex: .5
  },
  playView: {
    flex: .5
  },
  text: {
    fontFamily: 'SavoyeLetPlain',
    fontSize: 32,
    color: '#CEBAC7',
  },
  playIcon: {
    height: 30,
    width: 30,
    marginLeft: 10,
    alignSelf: 'flex-end'
  }
});


class Music extends React.Component{
  constructor(props) {
     super(props);
     this.state = {showName: false};
   }
  onClick(event) {
    if(!this.state.showName) {
      this.setState({
        showName: true
      });
    }
    AudioPlayer.play('audio/'+this.props.songTitle+'.mp3');
  }
  render() {
    return(
      <View style={styles.playContainer}>
        <View style={styles.textView}>
          <TouchableHighlight underlayColor="A65387">
            {this.state.showName ?
              <Text onPress={this.props.chooseSong} style={styles.text}>{this.props.songDisplayTitle}</Text>
              :
              <Text style={styles.text}>?????????</Text>
            }
          </TouchableHighlight>
        </View>
        <View style={styles.playView}>
        <TouchableHighlight underlayColor="A65387" onPress={this.onClick.bind(this)}>
          <Image
            style={styles.playIcon}
            source={require('../Images/play.png')}
            />
        </TouchableHighlight>
        </View>
      </View>
      )
  }
};

module.exports = Music;

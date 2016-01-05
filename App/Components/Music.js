var React = require('react-native');

var MusicControl = require('./MusicControl');
var Result = require('./Result');

var AudioPlayer = require('react-native-audioplayer');

var {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  AlertIOS
} = React;

var styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#852C64',
    flex: 1
  },
  header: {
    fontFamily: 'SavoyeLetPlain',
    fontSize: 32,
    color: '#CEBAC7',
    textAlign: 'center',
    margin: 20
  }
});


class Music extends React.Component{
  chooseSong(song) {
    AlertIOS.alert(
       'Choose '+song+'?',
       null,
       [
         {
           text: 'Choose Song',
           onPress: (text) => {
             this.props.navigator.push({
               component: Result,
               title: 'Your Choice',
               passProps: {
                 dress: this.props.dressType,
                 song: song
               }
             })
           }
          },
          {text: 'Nope', onPress: (text) => console.log('Text: ' + text)},
       ],
       'default'
     )
  }
  render() {
    return(
      <ScrollView style={styles.mainContainer}>
        <Text style={styles.header}>Listen to the songs then touch the name to choose!</Text>
        <MusicControl key="salsa" chooseSong={this.chooseSong.bind(this, 'Salsa')} songTitle="salsa" songDisplayTitle="Salsa" />
        <MusicControl key="swing" chooseSong={this.chooseSong.bind(this, 'Swing')} songTitle="swing" songDisplayTitle="Swing" />
        <MusicControl key="mambo" chooseSong={this.chooseSong.bind(this, 'Mambo')} songTitle="mambo" songDisplayTitle="Mambo" />
        <MusicControl key="tango" chooseSong={this.chooseSong.bind(this, 'Tango')} songTitle="tango" songDisplayTitle="Tango" />
        <MusicControl key="foxtrot" chooseSong={this.chooseSong.bind(this, 'Foxtrot')} songTitle="foxtrot" songDisplayTitle="Foxtrot" />
        <MusicControl key="waltz" chooseSong={this.chooseSong.bind(this, 'Waltz')} songTitle="waltz" songDisplayTitle="Waltz" />
      </ScrollView>
      )
  }
};

module.exports = Music;

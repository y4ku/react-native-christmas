var React = require('react-native');
var AudioPlayer = require('react-native-audioplayer');

var {
  ScrollView,
  Text,
  StyleSheet,
  Image
} = React;

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#852C64',
    flex: 1,
    flexDirection: 'column'
  },
  text: {
    fontFamily: 'SavoyeLetPlain',
    fontSize: 32,
    color: '#FFFFFF',
    textAlign: 'center',
    margin: 20,
  },
  image: {
    alignSelf: 'center',
    borderRadius: 10,
    margin: 10
  }
});


class Result extends React.Component{
  constructor(props) {
     super(props);
     AudioPlayer.play('audio/'+this.props.song.toLowerCase()+'.mp3');
   }
  generateText() {
    var song = this.props.song;
    var text;
    switch(song) {
      case 'Salsa':
        text = "Salsa/Latin dance class!";
        break;
      case 'Swing':
        text = "Swing dance class!";
        break;
      case 'Mambo':
        text = "Mambo/Latin dance class!";
        break;
      case 'Tango':
        text = "Tango/Latin dance class!";
        break;
      case 'Foxtrot':
        text = "Foxtrot/Classical dance class!";
        break;
      case 'Waltz':
        text = "Waltz/Classical dance class!";
        break;
    }
    return this.generateDressText() + text;
  }
  generateDressText() {
    var dress = this.props.dress;
    var text = "Looks like you're wearing a ";
    if (dress === 'salsa'){
      text += "Salsa dress to a ";
    } else if(dress === 'waltz') {
      text += "Classical (waltz/foxtrot) dress to a ";
    } else if(dress === 'swing') {
      text += "Swing dress to a ";
    }
    return text;
  }
  render() {
    return(
      <ScrollView style={styles.container}>
        <Text style={styles.text}>{this.generateText()}</Text>
        <Text style={styles.text}>Merry Christmas Adrianna!</Text>
        <Image
          style={styles.image}
          source={require('../Images/like.png')}
          />
      </ScrollView>
    )
  }
};

module.exports = Result;

var React = require('react-native');

var Music = require('./Music');

var {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#852C64',
    flex: 1
  },
  titleText: {
    fontFamily: 'SavoyeLetPlain',
    textAlign: 'center',
    fontSize: 32,
    padding: 20,
    color: '#CEBAC7',
  },
  dressContainer: {
    backgroundColor: '#852C64',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  image: {
    alignSelf: 'center',
    margin: 10,
    borderRadius: 10
  }
});


class Main extends React.Component{
  onClick(dressType, event) {
    this.props.navigator.push({
      component: Music,
      title: 'Choose Your Music',
      passProps: {dressType: dressType}
    })
  }
  render() {
    return(
      <ScrollView style={styles.mainContainer}>
        <View>
          <Text style={styles.titleText}> Choose a Dress </Text>
        </View>
        <View style={styles.dressContainer}>
          <TouchableHighlight underlayColor="A65387" onPress={this.onClick.bind(this, 'salsa')}>
            <Image
              style={styles.image}
              source={require('../Images/salsa.png')}
              />
          </TouchableHighlight>
          <TouchableHighlight underlayColor="A65387" onPress={this.onClick.bind(this, 'swing')}>
            <Image
              style={styles.image}
              source={require('../Images/swing.png')}
              />
          </TouchableHighlight>
          <TouchableHighlight underlayColor="A65387" onPress={this.onClick.bind(this, 'waltz')}>
            <Image
              style={styles.image}
              source={require('../Images/waltz.png')}
              />
          </TouchableHighlight>
        </View>
      </ScrollView>
      )
  }
};

module.exports = Main;

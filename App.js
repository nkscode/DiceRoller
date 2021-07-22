import {switchCase} from '@babel/types';
import {set} from 'lodash';
import {breakList} from 'prelude-ls';
import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
  const [resource, setResource] = useState(DiceOne);

  const playButtonTapped = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setResource(DiceOne);
        break;

      case 2:
        setResource(DiceTwo);
        break;

      case 3:
        setResource(DiceThree);
        break;

      case 4:
        setResource(DiceFour);
        break;

      case 5:
        setResource(DiceFive);
        break;

      case 6:
        setResource(DiceSix);
        break;

      default:
        setResource(DiceOne);
        break;
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={resource} />
        <Pressable onPress={playButtonTapped}>
          <Text style={styles.gamePlayButton}> Play Game </Text>
        </Pressable>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },

  gamePlayButton: {
    fontSize: 20,
    marginTop: 30,
    color: '#F2A365',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: '#30475E',
    borderWidth: 4,
    fontWeight: 'bold',
    borderRadius: 5,
  },
});

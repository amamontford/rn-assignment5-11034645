// Card.js
import React, { useContext } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import themeContext from './theme/themeContext';

const Card = () => {
  const theme = useContext(themeContext);

  return (
      <View style={[styles.card, { backgroundColor: theme.backgroundColor }]}>
        <Image source={require('../assets/mastercard.png')} style={styles.cardImage} />
      </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Card;

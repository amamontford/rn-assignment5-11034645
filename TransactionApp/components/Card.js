import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.cardInfo}>
          <Text style={styles.cardNumber}>4562 1122 4595 7852</Text>
          <Text style={styles.cardName}>AR Jonson</Text>
          <View style={styles.cardDetails}>
            <Text style={styles.cardExpiry}>Expiry Date</Text>
            <Text style={styles.cardCvv}>CVV</Text>
          </View>
          <View style={styles.cardDetails}>
            <Text style={styles.cardExpiryDate}>24/2000</Text>
            <Text style={styles.cardCvvNumber}>6986</Text>
          </View>
        </View>
        <Image source={require('../assets/mastercard.png')} style={styles.cardImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    height: 200,
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 20,
    justifyContent: 'space-between',
  },
  cardInfo: {
    flex: 1,
  },
  cardNumber: {
    color: '#FFFFFF',
    fontSize: 20,
    marginBottom: 20,
  },
  cardName: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  cardExpiry: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  cardCvv: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  cardExpiryDate: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardCvvNumber: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardImage: {
    width: 60,
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
});

export default Card;

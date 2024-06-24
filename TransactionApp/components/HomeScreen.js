import React from 'react';
import { SafeAreaView, View, Image, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Card from './Card';
import Transactions from './Transactions';

const HomeScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        <Card />
        <View style={styles.actionsContainer}>
          <View style={styles.actionButton}>
            <Image source={require('../assets/sent.png')} style={styles.actionImage} />
            <Text style={styles.actionText}>Sent</Text>
          </View>
          <View style={styles.actionButton}>
            <Image source={require('../assets/receive.png')} style={styles.actionImage} />
            <Text style={styles.actionText}>Receive</Text>
          </View>
          <View style={styles.actionButton}>
            <Image source={require('../assets/loan.png')} style={styles.actionImage} />
            <Text style={styles.actionText}>Loan</Text>
          </View>
          <View style={styles.actionButton}>
            <Image source={require('../assets/topUp.png')} style={styles.actionImage} />
            <Text style={styles.actionText}>Topup</Text>
          </View>
        </View>
        <Transactions />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionImage: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  actionText: {
    fontSize: 14,
  },
});

export default HomeScreen;

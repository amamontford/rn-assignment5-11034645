import React, { useContext } from 'react';
import { SafeAreaView, View, Image, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Card from './Card';
import Transactions from './Transactions';
import themeContext from './theme/themeContext';

const HomeScreen = ({ navigation }) => {
  const theme = useContext(themeContext);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.backgroundColor }]}>
      <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
        <Header />
        <Card />
        <View style={styles.actionsContainer}>
          <View style={styles.actionContainer}>
            <View style={[styles.actionButton, { backgroundColor: theme.buttonBackground }]}>
              <Image source={require('../assets/sent.png')} style={[styles.actionImage, { tintColor: theme.color }]} />
            </View>
            <Text style={[styles.actionText, { color: theme.color }]}>Sent</Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={[styles.actionButton, { backgroundColor: theme.buttonBackground }]}>
              <Image source={require('../assets/receive.png')} style={[styles.actionImage, { tintColor: theme.color }]} />
            </View>
            <Text style={[styles.actionText, { color: theme.color }]}>Receive</Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={[styles.actionButton, { backgroundColor: theme.buttonBackground }]}>
              <Image source={require('../assets/loan.png')} style={[styles.actionImage, { tintColor: theme.color }]} />
            </View>
            <Text style={[styles.actionText, { color: theme.color }]}>Loan</Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={[styles.actionButton, { backgroundColor: theme.buttonBackground }]}>
              <Image source={require('../assets/topUp.png')} style={[styles.actionImage, { tintColor: theme.color }]} />
            </View>
            <Text style={[styles.actionText, { color: theme.color }]}>Topup</Text>
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
  actionContainer: {
    alignItems: 'center',
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 30,
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  actionImage: {
    width: 24,
    height: 24,
  },
  actionText: {
    fontSize: 12,
  },
});

export default HomeScreen;
